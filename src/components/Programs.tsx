import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Dumbbell, Zap, Target, Apple, Flame, Calendar, ArrowRight, ChevronRight, Check } from 'lucide-react';

interface ProgramsProps {
  onOpenAssessment: (goal?: 'fat-loss' | 'muscle-building' | 'recomp') => void;
}

export default function Programs({ onOpenAssessment }: ProgramsProps) {
  const [activePlan, setActivePlan] = useState<'men' | 'women'>('men');

  const mensSpecs = {
    title: "Método Elite Masculino",
    subtitle: "PROTOCOLO REVOLUCIONÁRIO DE DEFINIÇÃO E HIPERTROFIA SECANTE",
    description: "Método premium desenvolvido do zero para profissionais, empresários e atletas que buscam uma redução agressiva de gordura, densidade de massa magra e ganho de força real sem perder horas preciosas do seu dia.",
    features: [
      { title: "Periodização Biomecânica", desc: "Progressões científicas de treino pensadas para blindar articulações e construir massa muscular densa." },
      { title: "Otimização Hormonal Nativa", desc: "Estruturas de macronutrientes focadas em estender a disposição física e picos naturais de testosterona." },
      { title: "Aceleradores Lipídicos", desc: "Ciclo de carboidratos estratégico que força o corpo a estocar glicogênio e incinerar a gordura abdominal." },
      { title: "Calibração de Tempo de Foco", desc: "Sessões dinâmicas de 35 a 50 minutos planejadas com precisão milimétrica para altos resultados." }
    ]
  };

  const womensSpecs = {
    title: "Método Feminino Sculpt",
    subtitle: "RECOMPOSIÇÃO CORPORAL SUSTENTÁVEL & TONIFICAÇÃO",
    description: "Sistema baseado em fisiologia feminina moderna para quem busca recomposição corporal definitiva. Reduza o percentual de gordura, tonifique e desenhe os músculos e elimine o estresse alimentar ou privações absurdas.",
    features: [
      { title: "Construção de Linha Atlética", desc: "Foco estético de volume colocado estrategicamente em glúteos, pernas e abdômen para simetria ideal." },
      { title: "Calibração Hormonal Cíclica", desc: "Treinos e planejamentos ajustados para acompanhar suas fases hormonais, otimizando rendimento." },
      { title: "Integração Social Segura", desc: "Um sistema de compensação calórica que permite viagens, jantares fora e manutenção de hábitos livres." },
      { title: "Confiança nos Movimentos", desc: "Vídeos e feedbacks diários corrigindo sua mecânica para acelerar os ganhos e eliminar a insegurança." }
    ]
  };

  const currentPlan = activePlan === 'men' ? mensSpecs : womensSpecs;

  return (
    <section 
      id="programs_section" 
      className="relative py-16 sm:py-24 bg-white border-b border-neutral-200 overflow-hidden"
    >
      {/* Background soft ambient glows */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[350px] h-[350px] bg-blue-400/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 shadow-sm">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">MÉTODOS AVANÇADOS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
            PROGRAMAS DE PERFORMANCE <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-neutral-950 to-blue-600 bg-clip-text text-transparent font-black font-display text-4xl sm:text-5xl font-extrabold tracking-tight">SOB MEDIDA</span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Escolha o segmento que melhor se ajusta ao seu metabolismo e rotina neste momento. Cada detalhe será personalizado e monitorado pelo coach.
          </p>
        </div>

        {/* Modular Selector Tabs for large program cards */}
        <div className="flex justify-center mb-10">
          <div className="bg-neutral-50 p-1 border border-neutral-200 rounded-xl flex items-center shadow-sm">
            <button
              id="btn_program_men"
              onClick={() => setActivePlan('men')}
              className={`py-3 px-6 md:px-8 rounded-lg font-display font-black text-xs md:text-sm tracking-widest uppercase cursor-pointer transition-all flex items-center gap-2 ${
                activePlan === 'men' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              <Dumbbell className="w-4 h-4" /> MÉTODO ELITE MASCULINO
            </button>
            <button
              id="btn_program_women"
              onClick={() => setActivePlan('women')}
              className={`py-3 px-6 md:px-8 rounded-lg font-display font-black text-xs md:text-sm tracking-widest uppercase cursor-pointer transition-all flex items-center gap-2 ${
                activePlan === 'women' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              <Zap className="w-4 h-4" /> MÉTODO SCULPT FEMININO
            </button>
          </div>
        </div>

        {/* Large Massive Interactive Card Box */}
        <div 
          id="active_program_container"
          className="bg-neutral-50/70 border border-neutral-200 rounded-3xl p-6 md:p-10 lg:p-12 relative overflow-hidden transition-all duration-500 hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
        >
          {/* Subtle light blue glow effect on card hover */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[90px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              
              <div className="space-y-3">
                <span className="text-[10px] md:text-xs font-mono text-blue-600 tracking-widest uppercase font-black block">
                  {currentPlan.subtitle}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 leading-none uppercase">
                  {currentPlan.title}
                </h3>
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                  {currentPlan.description}
                </p>
              </div>

              {/* CTA trigger inside the active program detail */}
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    id={`apply_program_${activePlan}`}
                    href="https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20de%20treino%20e%20nutri%C3%A7%C3%A3o%21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-8 rounded-xl bg-blue-600 text-white font-display font-black text-sm uppercase tracking-wider hover:bg-blue-700 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer text-center sm:text-left transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Iniciar protocolo <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Pillars Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4 bg-white border border-neutral-200 p-6 md:p-8 rounded-2xl shadow-sm">
              <h4 className="text-xs font-mono font-bold text-neutral-500 tracking-wider uppercase mb-2">
                QUATRO PILARES DA METODOLOGIA
              </h4>

              <div className="space-y-5">
                {currentPlan.features.map((feat, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start text-left">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0 mt-0.5 border border-blue-100">
                      {idx === 0 && <Dumbbell className="w-4 h-4" />}
                      {idx === 1 && <Target className="w-4 h-4" />}
                      {idx === 2 && <Apple className="w-4 h-4" />}
                      {idx === 3 && <Calendar className="w-4 h-4" />}
                    </div>
                    <div>
                      <span className="font-display font-bold text-neutral-900 text-sm block">
                        {feat.title}
                      </span>
                      <p className="text-[11px] md:text-xs text-neutral-600 mt-1 leading-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
