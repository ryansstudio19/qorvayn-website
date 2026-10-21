'use client';

import { useEffect, useState } from 'react';

interface NetworkInformationLike {
  saveData?: boolean;
  effectiveType?: string;
}

interface NavigatorWithCapabilities extends Navigator {
  deviceMemory?: number;
  connection?: NetworkInformationLike;
}

let cachedWebGlSupport: boolean | null = null;

function isWebGlAvailable(): boolean {
  if (cachedWebGlSupport !== null) return cachedWebGlSupport;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    cachedWebGlSupport = Boolean(gl);
  } catch {
    cachedWebGlSupport = false;
  }
  return cachedWebGlSupport;
}

function deviceCanHandle3D(): boolean {
  if (typeof window === 'undefined') return false;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }

  // Skip 3D/WebGL on small mobile viewports or primary touch/coarse-pointer devices
  if (
    window.innerWidth < 768 ||
    window.matchMedia('(max-width: 767px)').matches ||
    window.matchMedia('(pointer: coarse)').matches
  ) {
    return false;
  }

  // Skip on low-power or data-saver devices
  const nav = window.navigator as NavigatorWithCapabilities;
  if (nav.connection?.saveData) {
    return false;
  }
  if (
    nav.connection?.effectiveType &&
    (nav.connection.effectiveType === 'slow-2g' ||
      nav.connection.effectiveType === '2g' ||
      nav.connection.effectiveType === '3g')
  ) {
    return false;
  }
  if (typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency < 4) {
    return false;
  }
  if (typeof nav.deviceMemory === 'number' && nav.deviceMemory < 4) {
    return false;
  }

  return isWebGlAvailable();
}

/**
 * Returns `true` only after first paint and browser idle time (`requestIdleCallback`),
 * and only when the device is a capable desktop screen without `prefers-reduced-motion`.
 */
export function useCanRun3D(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let rafId: number | null = null;

    const evaluate = () => {
      if (cancelled) return;
      if (!deviceCanHandle3D()) {
        setReady(false);
        return;
      }

      // Defer after first paint + browser idle so main content is interactive first
      rafId = window.requestAnimationFrame(() => {
        if (cancelled) return;
        const win = window as Window & {
          requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
          cancelIdleCallback?: (id: number) => void;
        };
        if (typeof win.requestIdleCallback === 'function') {
          idleId = win.requestIdleCallback(
            () => {
              if (!cancelled && deviceCanHandle3D()) {
                setReady(true);
              }
            },
            { timeout: 1200 }
          );
        } else {
          timeoutId = setTimeout(() => {
            if (!cancelled && deviceCanHandle3D()) {
              setReady(true);
            }
          }, 280);
        }
      });
    };

    evaluate();

    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const viewportMq = window.matchMedia('(max-width: 767px)');

    const handleChange = () => {
      if (!deviceCanHandle3D()) {
        setReady(false);
      } else {
        evaluate();
      }
    };

    motionMq.addEventListener('change', handleChange);
    viewportMq.addEventListener('change', handleChange);

    return () => {
      cancelled = true;
      motionMq.removeEventListener('change', handleChange);
      viewportMq.removeEventListener('change', handleChange);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      const win = window as Window & {
        cancelIdleCallback?: (id: number) => void;
      };
      if (idleId !== null && typeof win.cancelIdleCallback === 'function') {
        win.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, []);

  return ready;
}
