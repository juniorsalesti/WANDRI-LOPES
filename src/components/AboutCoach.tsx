import React from 'react';
import { Award, ShieldCheck, Star } from 'lucide-react';

export default function AboutCoach() {
  const coachData = {
    name: 'Wandri Lopes',
    title: 'Profissional de Educação Física & Bodybuilding Coach',
    credentials: [
      'Personal Trainer Certificado',
      'Treinador Certificado em Biomecânica e Exercício',
      'Especialista em Hipertrofia e Emagrecimento',
      'Pós-graduado em Bodybuilding Coach'
    ],
    metrics: [
      { label: 'De experiência profissional.', value: '+8 ANOS' },
      { label: 'Planejamento adaptado aos objetivos e às necessidades de cada aluno.', value: '100% INDIVIDUAL' }
    ]
  };

  return (
    <section 
      id="about_coach_section" 
      className="content-auto relative py-14 sm:py-20 md:py-24 bg-[#060606] border-b border-white/10 overflow-hidden"
    >
      {/* Background neon elements (hidden on mobile for 60fps scrolling) */}
      <div className="hidden md:block absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-neon-green/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="hidden md:block absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-neon-green/4 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Styled Portrait Photo with borders */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            
            {/* Soft backdrop glow */}
            <div className="hidden md:block absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] bg-neon-green/10 blur-[80px] rounded-full z-0 pointer-events-none" />

            <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[4/5] z-10">
              
              {/* Image Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden glass-panel border border-white/10 relative shadow-2xl">
                <img 
                  id="coach_about_img"
                  src="https://i.ibb.co/zVj9spt9/JEE-2333.jpg" 
                  alt="Coach Wandri Lopes" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-700 object-center filter saturate-[1.15]"
                />
                
                {/* Visual glass brand bar */}
                <div className="absolute bottom-4 inset-x-4 glass-panel border border-white/10 p-4 rounded-xl flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[9px] font-mono font-bold text-neon-green uppercase tracking-widest block">DIRETOR TÉCNICO</span>
                    <span className="text-white font-display font-extrabold text-sm uppercase block tracking-tight">Coach Wandri Lopes</span>
                  </div>
                  <div className="bg-neon-green/20 text-neon-green p-1 px-2.5 rounded border border-neon-green/30 text-[10px] font-mono font-bold">
                    BODYBUILDING COACH
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
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
                <Award className="w-3.5 h-3.5 text-neon-green" />
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-neon-green uppercase">O ARQUITETO DO SEU CORPO</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                CONHEÇA O PROFISSIONAL <br className="hidden sm:inline" />
                <span className="text-gradient-neon font-black">POR TRÁS DO SEU ACOMPANHAMENTO</span>
              </h2>
            </div>

            {/* Narrative paragraphs */}
            <div className="space-y-3.5 text-neutral-300 text-sm md:text-base leading-relaxed">
              <p>
                Sou profissional de Educação Física há mais de 8 anos, pós-graduado em Bodybuilding Coach, com atuação especializada em hipertrofia, emagrecimento e preparação de atletas.
              </p>
              <p>
                Minha metodologia é fundamentada no conhecimento técnico, na experiência profissional e na individualidade de cada aluno.
              </p>
              <p>
                Compreendo que o desenvolvimento físico envolve diferentes fatores e que cada pessoa apresenta necessidades, características e respostas específicas ao treinamento.
              </p>
              <p>
                Por isso, meu trabalho consiste em desenvolver estratégias individualizadas, considerando os objetivos, a condição física, a rotina e a evolução de cada aluno.
              </p>
            </div>

            {/* Key quote banner */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-neon-green/10 border border-neon-green/30 text-neon-green font-display font-extrabold text-sm sm:text-base tracking-wide uppercase flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-neon-green shrink-0 animate-pulse" />
              <span>Mais do que treinar, aprenda a treinar.</span>
            </div>

            {/* Certifications and qualifications list */}
            <div className="space-y-3.5 pt-2">
              <span className="text-xs font-mono font-bold text-neutral-400 tracking-wider uppercase block">
                MINHAS QUALIFICAÇÕES
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 pt-6 border-t border-white/5">
              {coachData.metrics.map((cell, idx) => (
                <div key={idx} className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-1.5">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-white block tracking-tight">
                    {cell.value}
                  </span>
                  <p className="text-xs text-neutral-400 font-medium leading-normal">
                    {cell.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
