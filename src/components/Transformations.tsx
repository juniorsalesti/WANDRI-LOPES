import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Award, Dumbbell } from 'lucide-react';

interface TransformationPhoto {
  id: string;
  image: string;
  alt: string;
}

export default function Transformations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const transformationPhotos: TransformationPhoto[] = [
    {
      id: 'trans_1',
      image: 'https://i.ibb.co/YB1wsJ3B/F1562403-7-D15-42-CF-AEA7-61799-F9-ED7-B0.png',
      alt: 'Transformação real alcançada com o acompanhamento de Wandri Lopes'
    },
    {
      id: 'trans_2',
      image: 'https://i.ibb.co/ymb0P4KG/B12-E08-CD-A75-D-45-A1-9-A0-A-06-D8248943-CE.png',
      alt: 'Transformação real alcançada com o acompanhamento de Wandri Lopes'
    },
    {
      id: 'trans_3',
      image: 'https://i.ibb.co/mrD8fwQT/31029-D40-A0-B2-474-A-A8-E5-B1-A42-C2-D0-DB1.png',
      alt: 'Transformação real alcançada com o acompanhamento de Wandri Lopes'
    }
  ];

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) =>
      prev === transformationPhotos.length - 1 ? 0 : prev + 1
    );
  }, [transformationPhotos.length]);

  const prevSlide = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) =>
      prev === 0 ? transformationPhotos.length - 1 : prev - 1
    );
  }, [transformationPhotos.length]);

  useEffect(() => {
    if (isPaused || transformationPhotos.length <= 1) return;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      nextSlide();
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide, transformationPhotos.length]);

  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -80 : 80,
      opacity: 0
    })
  };

  const activePhoto = transformationPhotos[currentIndex];
  const hasFailed = failedImages[activePhoto.id];

  return (
    <section
      id="results_section"
      className="content-auto relative py-14 sm:py-20 bg-[#060606] border-b border-white/10 overflow-hidden"
    >
      {/* Background visual spotlight (hidden on mobile for instant rendering) */}
      <div className="hidden md:block absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-green/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
            <Award className="w-3.5 h-3.5 text-neon-green" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-neon-green uppercase">
              CASOS DE SUCESSO COGNITIVOS E BIOLÓGICOS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            TRANSFORMAÇÕES REAIS <br className="hidden sm:inline" />
            <span className="text-gradient-neon font-black">E CERTIFICADAS</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Nós não entregamos perdas de peso passageiras baseadas em fome; nós fazemos otimizações fisiológicas. Veja transformações reais dos nossos graduados da mentoria.
          </p>
        </div>

        {/* Image-Only Carousel Container */}
        <div
          className="relative max-w-2xl mx-auto px-4 sm:px-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl glass-panel border border-white/10 bg-black/50 shadow-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activePhoto.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full flex items-center justify-center bg-black/60"
              >
                {!hasFailed ? (
                  <img
                    src={activePhoto.image}
                    alt={activePhoto.alt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [activePhoto.id]: true }))
                    }
                    className="w-full h-[380px] sm:h-[460px] md:h-[520px] object-contain select-none"
                  />
                ) : (
                  <div className="w-full h-[380px] sm:h-[460px] md:h-[520px] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-blue-950">
                    <div className="p-4 rounded-full bg-white/5 border border-white/10 text-neon-green">
                      <Dumbbell className="w-8 h-8" />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          {transformationPhotos.length > 1 && (
            <>
              <button
                id="btn_carousel_prev"
                type="button"
                onClick={prevSlide}
                className="absolute left-[-6px] sm:left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] hover:bg-neutral-900 border border-white/10 hover:border-neon-green/50 text-white flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/80 z-20"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                id="btn_carousel_next"
                type="button"
                onClick={nextSlide}
                className="absolute right-[-6px] sm:right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] hover:bg-neutral-900 border border-white/10 hover:border-neon-green/50 text-white flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/80 z-20"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Dots indicator */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {transformationPhotos.map((photo, idx) => (
                  <button
                    id={`carousel_dot_${idx}`}
                    key={photo.id}
                    type="button"
                    onClick={() => {
                      setDirection(idx > currentIndex ? 'right' : 'left');
                      setCurrentIndex(idx);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-6 bg-neon-green shadow-sm shadow-neon-green/45'
                        : 'w-2.5 bg-neutral-700 hover:bg-neutral-500'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Dynamic bottom social proof trigger */}
        <div className="mt-12 p-5 rounded-2xl max-w-2xl mx-auto glass-panel border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400 font-mono text-left block">
              Junte-se a mais de <span className="text-white font-bold font-sans">528+ alunos</span> que começaram esta semana.
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('pricing_section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="py-2.5 px-5 rounded-lg border border-neon-green/40 hover:bg-neon-green hover:text-black font-display font-extrabold text-xs tracking-widest transition-all cursor-pointer uppercase text-neon-green shrink-0"
          >
            Quebrar Meus Limites Agora
          </button>
        </div>
      </div>
    </section>
  );
}
