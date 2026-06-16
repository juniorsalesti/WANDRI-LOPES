import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Flame, ChevronRight, Play, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenAssessment: () => void;
  onScrollToStories: () => void;
}

export default function Hero({ onOpenAssessment, onScrollToStories }: HeroProps) {
  return (
    <section 
      id="hero_section" 
      className="relative min-h-[calc(100vh-100px)] flex items-center justify-center py-12 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Neon ambient meshes */}
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none select-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-neon-green/3 blur-[150px] rounded-full pointer-events-none select-none z-0" />
      
      {/* Absolute dark vertical grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-white/5 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-neon-green" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-neutral-300 uppercase">
                Vagas abertas para a mentoria
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white">
              TRANSFORME SEU <br />
              <span className="text-gradient-neon filter drop-shadow-[0_0_20px_rgba(37,99,235,0.15)]">CORPO EM 90 DIAS</span>
            </h1>

            {/* Subheadline */}
            <p className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed text-balance">
              Treino personalizado, planejamento de dieta individualizado e suporte diário de alta performance. Desenvolvido cientificamente para esculpir músculos e derreter gordura.
            </p>

            {/* CTA action buttons cluster */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a
                id="hero_cta_primary"
                href="https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20de%20treino%20e%20nutri%C3%A7%C3%A3o%21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative py-4 px-8 rounded-xl bg-neon-green text-black font-display font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(37,99,235,0.1)] hover:shadow-neon-green/35 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                Começar Minha Transformação
                <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                id="hero_cta_secondary"
                onClick={onScrollToStories}
                className="w-full sm:w-auto group py-4 px-8 rounded-xl glass-panel hover:bg-white/5 text-white font-display font-extrabold text-sm uppercase tracking-wider border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <div className="p-1 rounded-full bg-white/10 text-white shrink-0 group-hover:bg-neon-green group-hover:text-black transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                Ver Casos de Sucesso
              </button>
            </div>



          </div>

          {/* Right Image Frame Column */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            
            {/* Visual Neon Hexagon backdrop */}
            <div className="absolute inset-x-0 top-0 bottom-0 m-auto w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-neon-green/20 to-transparent blur-[70px] rounded-full z-0 pointer-events-none" />

            <div className="relative w-full max-w-[340px] md:max-w-[420px] lg:max-w-[440px] aspect-[3/4] z-10">
              
              {/* Main image container */}
              <div className="w-full h-full rounded-2xl overflow-hidden glass-panel border border-white/10 relative shadow-2xl">
                <img 
                  id="hero_trainer_img"
                  src="https://i.ibb.co/wrpzL0Ty/wandri.jpg" 
                  alt="Elite Personal Trainer" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-all duration-1000 object-center filter saturate-[1.1]"
                />
                
                {/* Immersive overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Stat Card #1 */}
              <div
                id="stat_card_1"
                className="absolute -left-6 md:-left-12 top-[15%] glass-panel rounded-xl p-3 md:p-4 border border-white/10 shadow-xl flex items-center gap-3 animate-float pointer-events-none max-w-[170px] md:max-w-[200px]"
              >
                <div className="p-2 bg-neon-green/10 text-neon-green rounded-lg">
                  <Trophy className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-black font-mono text-white leading-none block">500+</span>
                  <span className="text-[9px] md:text-xs text-neutral-400 font-medium tracking-tight block mt-0.5 leading-tight">Alunos Transformados</span>
                </div>
              </div>



              {/* Floating Stat Card #3 */}
              <div
                id="stat_card_3"
                className="absolute -left-4 md:-left-8 bottom-[10%] glass-panel rounded-xl p-3 md:p-4 border border-white/10 shadow-xl flex items-center gap-3 pointer-events-none max-w-[180px] md:max-w-[210px]"
                style={{ animation: 'float 7s ease-in-out infinite 0.5s' }}
              >
                <div className="p-2 bg-neon-green/10 text-neon-green rounded-lg">
                  <Flame className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-black font-mono text-white leading-none block">90 Dias</span>
                  <span className="text-[9px] md:text-xs text-neutral-400 font-medium tracking-tight block mt-0.5 leading-tight">Ciclo de Evolução</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
