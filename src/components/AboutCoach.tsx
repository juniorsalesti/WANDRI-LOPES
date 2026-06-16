import React from 'react';
import { Award, ShieldCheck, Heart, Dumbbell, Star, ChevronRight, Check } from 'lucide-react';
import { PremiumCoachData } from '../types';

export default function AboutCoach() {
  const coachData: PremiumCoachData = {
    name: 'Wandri Lopes',
    title: 'Arquiteto Físico de Elite & Especialista em Cinesiologia Aplicada',
    experienceYears: 8,
    philosophy: 'O desenvolvimento físico de elite é uma fórmula científica exata. Ao isolar a biomecânica estrutural de cada articulação, mapear respostas hormonais progressivas e planejar macronutrientes flexíveis, geramos resultados fisiológicos consolidados para toda a vida. Eu não trabalho com adivinhações. Nós avaliamos, medimos, refinamos e evoluímos de forma constante.',
    credentials: [
      'Treinador e Personal Certificado',
      'Especialista em Nutrição de Performance',
      'Treinador Certificado em Biomecânica de Exercícios Baseada em Evidências',
      'Especialista em Fortalecimento e Recuperação Funcional'
    ],
    metrics: [
      { label: 'ANOS DE COACHING', value: '8+ Anos' },
      { label: 'ALUNOS MUTADOS', value: '520+' },
      { label: 'SUPORTE INDIVIDUAL', value: '100%' }
    ]
  };

  return (
    <section 
      id="about_coach_section" 
      className="relative py-24 bg-[#080808] border-b border-white/[0.03] overflow-hidden"
    >
      {/* Background neon elements */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-neon-green/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-neon-green/4 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Styled Portrait Photo with borders */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            
            {/* Soft backdrop glow */}
            <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] bg-neon-green/10 blur-[80px] rounded-full z-0 pointer-events-none" />

            <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[4/5] z-10">
              
              {/* Image Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden glass-panel border border-white/10 relative shadow-2xl">
                <img 
                  id="coach_about_img"
                  src="https://i.ibb.co/wrpzL0Ty/wandri.jpg" 
                  alt="Coach Wandri Lopes" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-700 object-center filter saturate-[1.15]"
                />
                
                {/* Visual glass brand bar */}
                <div className="absolute bottom-4 inset-x-4 glass-panel border border-white/10 p-4 rounded-xl flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[9px] font-mono font-bold text-neon-green uppercase tracking-widest block">DIRETOR TÉCNICO</span>
                    <span className="text-white font-display font-extrabold text-sm uppercase block tracking-tight">Coach Wandri Lopes</span>
                  </div>
                  <div className="bg-neon-green/20 text-neon-green p-1 px-2.5 rounded border border-neon-green/30 text-[10px] font-mono font-bold">
                    ISSA ELITE
                  </div>
                </div>
                
              </div>

              {/* Little Floating Star Badge */}
              <div 
                className="absolute -right-4 top-[10%] glass-panel rounded-full p-2 border border-white/10 flex items-center justify-center shadow-lg"
                style={{ animation: 'float 5s ease-in-out infinite' }}
              >
                <div className="p-2 bg-neon-green text-black rounded-full">
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Narrative Biography & Credentials */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
                <Award className="w-3.5 h-3.5 text-neon-green" />
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-neon-green uppercase">CONHEÇA SEU MENTOR</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                O ARQUITETO DO <br className="hidden sm:inline" />
                <span className="text-gradient-neon font-black">SEU CORPO</span>
              </h2>
              <span className="font-display font-bold text-neutral-300 text-sm md:text-base block tracking-tight leading-relaxed">
                {coachData.title}
              </span>
            </div>

            {/* Narrative / Philosophy */}
            <p className="text-neutral-400 text-sm leading-relaxed text-balance">
              {coachData.philosophy}
            </p>

            {/* Certifications and credentials list */}
            <div className="space-y-3.5">
              <span className="text-xs font-mono font-bold text-neutral-400 tracking-wider uppercase block">
                SÓLIDAS CERTIFICAÇÕES INTERNACIONAIS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coachData.credentials.map((cred, idx) => (
                  <div key={idx} className="flex gap-2.5 items-center text-xs text-neutral-200">
                    <div className="p-1 rounded-full bg-neon-green/15 text-neon-green shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance metrics dashboard cells */}
            <div className="grid grid-cols-3 gap-4 py-4 pt-6 border-t border-white/5">
              {coachData.metrics.map((cell, idx) => (
                <div key={idx} className="p-3 bg-white/[0.01] border border-white/5 rounded-xl space-y-1">
                  <span className="font-mono text-xl md:text-2xl font-black text-white block tracking-tight">
                    {cell.value}
                  </span>
                  <span className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider block leading-tight">
                    {cell.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
