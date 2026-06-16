import React from 'react';
import { Target, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface FinalCTAProps {
  onOpenAssessment: () => void;
}

export default function FinalCTA({ onOpenAssessment }: FinalCTAProps) {
  return (
    <section 
      id="final_cta_section" 
      className="relative py-14 sm:py-20 md:py-24 bg-[#050505] border-b border-white/10 overflow-hidden"
    >
      {/* Background neon ambient glows */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Large full width card */}
        <div className="glass-panel-heavy border border-white/10 rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
          
          {/* Subtle neon accents on edges of card */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
          
          <div className="max-w-2xl mx-auto space-y-4">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
              <Zap className="w-3.5 h-3.5 text-neon-green animate-bounce" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-neon-green uppercase">SEU CAMINHO COMEÇA AQUI</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight uppercase">
              Pronto Para <br className="xs:hidden" />
              <span className="text-gradient-neon font-black">Transformar Seu Corpo?</span>
            </h2>

            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Garanta sua vaga na mentoria agora. Responda ao nosso questionário de 2 minutos e receba o diagnóstico completo do Wandri Lopes com os primeiros direcionamentos biomecânicos.
            </p>

          </div>

          {/* Large Action Launcher */}
          <div className="max-w-md mx-auto relative z-10 pt-2">
            <a
              id="final_apply_btn"
              href="https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20de%20treino%20e%20nutri%C3%A7%C3%A3o%21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full relative py-5 px-8 rounded-xl bg-neon-green text-black font-display font-black text-base uppercase tracking-wider transition-all shadow-[0_0_40px_rgba(56,242,163,0.15)] hover:shadow-neon-green/45 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer text-center"
            >
              Começar Minha Avaliação Gratuita <ArrowRight className="w-5 h-5 stroke-[3]" />
            </a>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mt-4">
              ⏳ MÁXIMO DE ALUNOS ATIVOS SIMULTÂNEOS LIMITADO • AMBIENTE CRIPTOGRAFADO E SEGURO
            </span>
          </div>

          {/* Social reassurance numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto pt-6 border-t border-white/5 text-left">
            <div>
              <span className="text-white font-mono text-base md:text-lg font-black block leading-none">SEM RISCO</span>
              <span className="text-[9px] text-neutral-500 font-bold block mt-1 uppercase">Garantia Incondicional</span>
            </div>
            <div>
              <span className="text-white font-mono text-base md:text-lg font-black block leading-none">520+</span>
              <span className="text-[9px] text-neutral-500 font-bold block mt-1 uppercase">Alunos Mutados</span>
            </div>
            <div>
              <span className="text-white font-mono text-base md:text-lg font-black block leading-none">DIRETO</span>
              <span className="text-[9px] text-neutral-500 font-bold block mt-1 uppercase">Chat 1-on-1</span>
            </div>
            <div>
              <span className="text-white font-mono text-base md:text-lg font-black block leading-none">100%</span>
              <span className="text-[9px] text-neutral-500 font-bold block mt-1 uppercase">Suplementação e Treino</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
