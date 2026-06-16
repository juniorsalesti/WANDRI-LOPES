import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingDown, Users, ChevronLeft, ChevronRight, Award, Flame, Quote, Sparkles } from 'lucide-react';
import { TransformationItem } from '../types';

export default function Transformations() {
  const [activeTab, setActiveTab] = useState<'all' | 'men' | 'women'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const transformations: TransformationItem[] = [
    {
      id: 'marcus',
      name: 'Miguel',
      age: 32,
      duration: '90 Dias',
      metric: 'Menos 11,8 kg (Gordura corporal: 22% para 11,5%)',
      beforeImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=355&h=473&q=40&sat=-60',
      afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=355&h=473&q=70',
      beforeValue: '97,5 kg',
      afterValue: '85,7 kg',
      quote: "A periodização biomecânica do Wandri salvou meus joelhos. Eliminei quase 12 kg de gordura corporal resistente enquanto batia recordes históricos de força nos meus levantamentos.",
      gender: 'men'
    },
    {
      id: 'sarah',
      name: 'Sara',
      age: 28,
      duration: '12 Semanas',
      metric: 'Perdeu 8,1 kg de Gordura Pura e Definiu o Corpo',
      beforeImg: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=355&h=473&q=40&sat=-60',
      afterImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=355&h=473&q=70',
      beforeValue: '71,6 kg',
      afterValue: '63,5 kg',
      quote: "Sem restrições absurdas de doces, apenas parâmetros e calorias sob medida. Os feedbacks regulares sobre a execução dos meus treinos me deram uma autoconfiança indescritível.",
      gender: 'women'
    },
    {
      id: 'david',
      name: 'Davi',
      age: 29,
      duration: '90 Dias',
      metric: 'Ganhou 6,3 kg de Massa Magra Densa',
      beforeImg: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=355&h=473&q=40&sat=-60',
      afterImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=355&h=473&q=70',
      beforeValue: '73,4 kg',
      afterValue: '79,7 kg',
      quote: "Eu passei anos comendo tudo o que via pela frente sem ver resultados densos. O Wandri organizou minhas janelas de descanso e nutrientes. Mudança total de patamar.",
      gender: 'men'
    },
    {
      id: 'emily',
      name: 'Emília',
      age: 33,
      duration: '90 Dias',
      metric: 'Menos 13% de Gordura Corporal e Abdômen Definido',
      beforeImg: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=355&h=473&q=40&sat=-60',
      afterImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=355&h=473&q=70',
      beforeValue: '29% GC',
      afterValue: '16% GC',
      quote: "Os treinos dinâmicos se adaptaram de forma excepcional à minha rotina pesada de viagens corporativas. O acompanhamento diário me blindou das recaídas. Melhor decisão que já tomei.",
      gender: 'women'
    }
  ];

  const filteredTrans = transformations.filter(t => 
    activeTab === 'all' || t.gender === activeTab
  );

  const handleTabChange = (tab: 'all' | 'men' | 'women') => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const nextSlide = () => {
    if (filteredTrans.length <= 1) return;
    setDirection('right');
    setCurrentIndex((prev) => (prev === filteredTrans.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (filteredTrans.length <= 1) return;
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? filteredTrans.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -100 : 100,
      opacity: 0
    })
  };

  const activeItem = filteredTrans[currentIndex];

  return (
    <section 
      id="results_section" 
      className="relative py-14 sm:py-20 bg-[#060606] border-b border-white/10 overflow-hidden"
    >
      {/* Background visual spotlight */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-green/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
            <Award className="w-3.5 h-3.5 text-neon-green" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-neon-green uppercase">CASOS DE SUCESSO COGNITIVOS E BIOLÓGICOS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            TRANSFORMAÇÕES REAIS <br className="hidden sm:inline" />
            <span className="text-gradient-neon font-black">E CERTIFICADAS</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Nós não entregamos perdas de peso passageiras baseadas em fome; nós fazemos otimizações fisiológicas. Veja transformações reais dos nossos graduados da mentoria.
          </p>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="glass-panel p-1.5 rounded-xl border border-white/5 flex items-center">
            {[
              { id: 'all', label: 'TODOS' },
              { id: 'men', label: 'MASCULINO' },
              { id: 'women', label: 'FEMININO' }
            ].map(tab => (
              <button
                id={`tab_trans_${tab.id}`}
                key={tab.id}
                onClick={() => handleTabChange(tab.id as any)}
                className={`py-2 px-4 rounded-lg font-display font-extrabold text-[11px] tracking-widest transition-all cursor-pointer uppercase ${
                  activeTab === tab.id 
                    ? 'bg-neon-green text-black shadow-md shadow-neon-green/20' 
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-2xl mx-auto px-4 sm:px-10">
          <div className="relative overflow-visible min-h-[340px] xs:min-h-[400px] sm:min-h-[460px]">
            <AnimatePresence mode="wait" custom={direction}>
              {activeItem && (
                <motion.div
                  key={activeItem.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <div
                    id={`trans_card_${activeItem.id}`}
                    className="p-5 sm:p-6 rounded-2xl glass-panel border border-white/5 flex flex-col gap-5 text-left shadow-2xl relative"
                  >
                    {/* Header with name only */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <h4 className="font-display font-black text-white text-xl uppercase tracking-wider">
                        {activeItem.name}
                      </h4>
                      <span className="text-[9px] font-mono text-neon-green/85 uppercase tracking-widest font-black border border-neon-green/10 bg-neon-green/5 px-2.5 py-1 rounded">
                        Evolução Confirmada
                      </span>
                    </div>

                    {/* Images layout side-by-side (Before / After) */}
                    <div className="flex gap-4 w-full">
                      {/* Before */}
                      <div className="flex-1 relative aspect-[3/4] rounded-xl overflow-hidden border border-white/5 bg-black/40">
                        <img 
                          src={activeItem.beforeImg} 
                          alt={`${activeItem.name} Antes`} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale opacity-50 select-none pointer-events-none" 
                        />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/75 border border-white/15 font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                          Antes
                        </div>
                      </div>

                      {/* After */}
                      <div className="flex-1 relative aspect-[3/4] rounded-xl overflow-hidden border border-neon-green/30 bg-black/40 shadow-lg shadow-neon-green/5">
                        <img 
                          src={activeItem.afterImg} 
                          alt={`${activeItem.name} Depois`} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover scale-[1.02] pointer-events-none select-none" 
                        />
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-neon-green text-black font-mono font-bold text-[9px] uppercase tracking-widest leading-none">
                          Depois
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation controls custom styled */}
          {filteredTrans.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                id="btn_carousel_prev"
                onClick={prevSlide}
                className="absolute left-[-15px] sm:left-[-25px] top-[45%] -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] hover:bg-neutral-900 border border-white/10 hover:border-neon-green/50 text-white flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/80 z-20"
                aria-label="Evolução anterior"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Next Button */}
              <button
                id="btn_carousel_next"
                onClick={nextSlide}
                className="absolute right-[-15px] sm:right-[-25px] top-[45%] -translate-y-1/2 w-10 h-10 rounded-full bg-[#111] hover:bg-neutral-900 border border-white/10 hover:border-neon-green/50 text-white flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/80 z-20"
                aria-label="Próxima evolução"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Dots indicator index row */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {filteredTrans.map((_, idx) => (
                  <button
                    id={`carousel_dot_${idx}`}
                    key={idx}
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

