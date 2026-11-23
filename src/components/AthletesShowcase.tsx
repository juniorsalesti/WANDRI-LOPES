import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Trophy, X, ChevronLeft, ChevronRight, Dumbbell, ArrowRight } from 'lucide-react';

interface AthletePhoto {
  id: string;
  image: string;
  alt: string;
}

export default function AthletesShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const athletePhotos: AthletePhoto[] = [
    {
      id: 'athlete_1',
      image: 'https://i.ibb.co/mMWQjxG/746-D1648-40-F0-4547-BBAF-E2-D201674-B78.png',
      alt: 'Atleta acompanhado por Wandri Lopes'
    },
    {
      id: 'athlete_2',
      image: 'https://i.ibb.co/DDthppBt/C7-E1-E209-BD68-4-CFD-BB63-7534-E830946-C.png',
      alt: 'Atleta acompanhado por Wandri Lopes'
    },
    {
      id: 'athlete_3',
      image: 'https://i.ibb.co/b5hgGPQg/C-pia-de-C7-C6-C350-A783-4-D36-B68-F-198201-C600-F7.jpg',
      alt: 'Atleta acompanhado por Wandri Lopes'
    },
    {
      id: 'athlete_4',
      image: 'https://i.ibb.co/wZcZGMY4/C-pia-de-E7754-A05-B652-45-BC-879-F-32-F2-B44-D2735.jpg',
      alt: 'Atleta acompanhado por Wandri Lopes'
    }
  ];

  const scrollToSlide = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const clampedIndex = (index + athletePhotos.length) % athletePhotos.length;
    const card = container.children[clampedIndex] as HTMLElement | undefined;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth'
      });
      setActiveSlide(clampedIndex);
    }
  }, [athletePhotos.length]);

  const handleScrollPrev = () => {
    scrollToSlide(activeSlide === 0 ? athletePhotos.length - 1 : activeSlide - 1);
  };

  const handleScrollNext = () => {
    scrollToSlide(activeSlide === athletePhotos.length - 1 ? 0 : activeSlide + 1);
  };

  const handleTrackScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    const currentScroll = container.scrollLeft;
    let closestIdx = 0;
    let minDist = Infinity;
    children.forEach((child, idx) => {
      const dist = Math.abs(child.offsetLeft - currentScroll);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = idx;
      }
    });
    setActiveSlide(closestIdx);
  };

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handleLightboxPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? athletePhotos.length - 1 : prev - 1
    );
  }, [athletePhotos.length]);

  const handleLightboxNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === athletePhotos.length - 1 ? 0 : prev + 1
    );
  }, [athletePhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handleLightboxPrev();
      if (e.key === 'ArrowRight') handleLightboxNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, handleCloseLightbox, handleLightboxPrev, handleLightboxNext]);

  const selectedPhoto = lightboxIndex !== null ? athletePhotos[lightboxIndex] : null;

  return (
    <section
      id="athletes_section"
      className="content-auto relative py-16 sm:py-24 bg-[#F9FAFB] border-b border-neutral-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">
              <Trophy className="w-4 h-4 text-blue-600 shrink-0" />
              <span>TIME DE ATLETAS & PREPARAÇÃO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase text-balance leading-tight">
              ATLETAS QUE CONFIAM <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-neutral-950 to-blue-600 bg-clip-text text-transparent font-black">
                NA MINHA PREPARAÇÃO
              </span>
            </h2>
          </div>

          {/* Desktop / Tablet Carousel Controls */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <button
              id="btn_athletes_prev"
              type="button"
              onClick={handleScrollPrev}
              aria-label="Foto anterior"
              className="w-11 h-11 rounded-full bg-white border border-neutral-200 hover:border-blue-600 text-neutral-800 hover:text-blue-600 flex items-center justify-center transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="btn_athletes_next"
              type="button"
              onClick={handleScrollNext}
              aria-label="Próxima foto"
              className="w-11 h-11 rounded-full bg-white border border-neutral-200 hover:border-blue-600 text-neutral-800 hover:text-blue-600 flex items-center justify-center transition-all shadow-sm cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pure Image Carousel Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleTrackScroll}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {athletePhotos.map((item, idx) => {
            const hasFailed = failedImages[item.id];
            return (
              <button
                key={item.id}
                id={`athlete_slide_${item.id}`}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Ampliar imagem ${idx + 1} de atleta`}
                className="group relative aspect-[3/4] w-[82%] sm:w-[48%] lg:w-[31.5%] shrink-0 snap-start rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.14)] hover:border-blue-500/40 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {!hasFailed ? (
                  <img
                    src={item.image}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                    }
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-blue-950 flex items-center justify-center p-6">
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 text-blue-400">
                      <Dumbbell className="w-6 h-6" />
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {athletePhotos.map((item, idx) => (
            <button
              key={item.id}
              id={`athlete_dot_${idx}`}
              type="button"
              onClick={() => scrollToSlide(idx)}
              aria-label={`Ir para imagem ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx
                  ? 'w-7 bg-blue-600'
                  : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA Bridge */}
        <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 max-w-xl">
            Quer preparar seu físico com estratégia de atleta ou subir nos palcos com acompanhamento completo?
          </p>
          <a
            id="cta_athletes_whatsapp"
            href="https://wa.me/5519991586637?text=Ol%C3%A1%20Wandri%2C%20vi%20os%20atletas%20que%20voc%C3%AA%20acompanha%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20prepara%C3%A7%C3%A3o%21"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-500/15 hover:scale-[1.02] active:scale-95 inline-flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            Falar sobre preparação <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Pure Image Lightbox Modal */}
      {selectedPhoto && (
        <div
          id="athlete_lightbox_modal"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada de atleta"
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md aspect-[3/4] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <button
              id="btn_close_athlete_modal"
              type="button"
              onClick={handleCloseLightbox}
              aria-label="Fechar visualização"
              className="absolute top-3.5 right-3.5 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/15 text-white hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />

            <button
              type="button"
              onClick={handleLightboxPrev}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/15 text-white hover:bg-blue-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleLightboxNext}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/15 text-white hover:bg-blue-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
