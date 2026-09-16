import { cn } from '@/lib/utils';
import { Container } from './container';
import { ShaderBackground, type ShaderPreset } from '@/components/canvas/shader-background';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  scene?: React.ReactNode;
  shaderPreset?: ShaderPreset;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
  scene,
  shaderPreset,
}: PageHeroProps) {
  const effectivePreset = shaderPreset || (!scene ? 'aurora' : undefined);

  return (
    <section
      className={cn(
        'relative min-h-[58vh] flex items-center overflow-hidden pt-24 pb-16',
        className
      )}
    >
      {/* Background radial gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090D] via-[#0B0F17] to-[#07090D] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,140,255,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Dynamic WebGL Shader Layer */}
      {effectivePreset && (
        <ShaderBackground
          preset={effectivePreset}
          intensity={0.75}
          className="opacity-55"
        />
      )}

      {/* 3D Scene Layer */}
      {scene && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {scene}
        </div>
      )}

      {/* Text Protection Vignette */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 hero-vignette pointer-events-none z-[5]" />

      {/* Hero Foreground Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#4F8CFF]">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="font-display font-extrabold text-[#F5F7FA] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.06] tracking-tight mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-[#94A3B8] text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
              {description}
            </p>
          )}

          {children}
        </div>
      </Container>
    </section>
  );
}
