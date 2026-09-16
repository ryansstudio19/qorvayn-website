import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { SignalScene } from '@/components/three/signal-scene';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#07090D] via-[#0B0F17] to-[#07090D] pointer-events-none" />
      <SignalScene />

      <Container className="relative z-10 py-24 sm:py-32">
        <div className="max-w-xl">
          <span className="font-display font-black text-7xl sm:text-8xl lg:text-9xl tracking-tighter text-[#4F8CFF]/20 block mb-4 select-none">
            404
          </span>

          <h1 className="font-display font-extrabold text-[#F5F7FA] text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
            Page not found.
          </h1>

          <p className="text-[#94A3B8] text-lg sm:text-xl leading-relaxed mb-10">
            The page you&apos;re looking for does not exist or may have moved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/" variant="primary" size="lg">
              <Home size={16} />
              <span>Go to homepage</span>
            </Button>
            <Button href="/products" variant="secondary" size="lg">
              <span>Explore products</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
