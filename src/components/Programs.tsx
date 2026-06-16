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
    outcomes: [
      { metric: "6-9 kg", desc: "Média de perda de gordura nos primeiros 60 dias" },
      { metric: "+8-12%", desc: "Aumento médio em marcas de força nos compostos" },
      { metric: "-6.5%", desc: "Média de gordura visceral reduzida em 90 dias" }
    ],
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
    outcomes: [
      { metric: "6-9 kg", desc: "Redução média de gordura num ciclo de 90 dias" },
      { metric: "100%", desc: "Sem restrição forçada de doces – controle por macros" },
      { metric: "+25%", desc: "Melhora nos níveis de energia relatada pelas alunas" }
    ],
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
      className="relative py-24 bg-neutral-950 border-b border-white/[0.03] overflow-hidden"
    >
      {/* Background neon glows */}
      <div className="absolute top-[30%] left-[-15%] w-[400px] h-[400px] bg-neon-green/3 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[350px] h-[350px] bg-neon-green/4 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
            <Target className="w-3.5 h-3.5 text-neon-green" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-neon-green uppercase">MÉTODOS AVANÇADOS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            PROGRAMAS DE PERFORMANCE <br className="hidden sm:inline" />
            <span className="text-gradient-neon font-black font-display text-4xl sm:text-5xl font-extrabold tracking-tight">SOB MEDIDA</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Escolha o segmento que melhor se ajusta ao seu metabolismo e rotina neste momento. Cada detalhe será personalizado e monitorado pelo coach.
          </p>
        </div>

        {/* Modular Selector Tabs for large program cards */}
        <div className="flex justify-center mb-10">
          <div className="glass-panel p-1 border border-white/5 rounded-xl flex items-center">
            <button
              id="btn_program_men"
              onClick={() => setActivePlan('men')}
              className={`py-3 px-6 md:px-8 rounded-lg font-display font-black text-xs md:text-sm tracking-widest uppercase cursor-pointer transition-all flex items-center gap-2 ${
                activePlan === 'men' 
                  ? 'bg-neon-green text-black shadow-md shadow-neon-green/20' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Dumbbell className="w-4 h-4" /> MÉTODO ELITE MASCULINO
            </button>
            <button
              id="btn_program_women"
              onClick={() => setActivePlan('women')}
              className={`py-3 px-6 md:px-8 rounded-lg font-display font-black text-xs md:text-sm tracking-widest uppercase cursor-pointer transition-all flex items-center gap-2 ${
                activePlan === 'women' 
                  ? 'bg-neon-green text-black shadow-md shadow-neon-green/20' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" /> MÉTODO SCULPT FEMININO
            </button>
          </div>
        </div>

        {/* Large Massive Interactive Card Box */}
        <div 
          id="active_program_container"
          className="glass-panel border border-white/10 rounded-3xl p-6 md:p-10 lg:p-12 relative overflow-hidden transition-all duration-500 hover:border-white/20"
        >
          {/* Subtle neon vector background overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/3 blur-[90px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              
              <div className="space-y-3">
                <span className="text-[10px] md:text-xs font-mono text-neon-green tracking-widest uppercase font-black block">
                  {currentPlan.subtitle}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none uppercase">
                  {currentPlan.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  {currentPlan.description}
                </p>
              </div>

              {/* CTA trigger inside the active program detail */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    id={`apply_program_${activePlan}`}
                    href="https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20de%20treino%20e%20nutri%C3%A7%C3%A3o%21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-8 rounded-xl bg-neon-green text-black font-display font-black text-sm uppercase tracking-wider hover:bg-neon-green/80 flex items-center justify-center gap-2 shadow-lg shadow-neon-green/10 cursor-pointer text-center sm:text-left"
                  >
                    Iniciar protocolo <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Pillars Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4 bg-black/40 border border-white/5 p-6 md:p-8 rounded-2xl">
              <h4 className="text-xs font-mono font-bold text-neutral-400 tracking-wider uppercase mb-2">
                QUATRO PILARES DA METODOLOGIA
              </h4>

              <div className="space-y-5">
                {currentPlan.features.map((feat, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start text-left">
                    <div className="p-2 rounded-lg bg-neon-green/10 text-neon-green shrink-0 mt-0.5 border border-neon-green/20">
                      {idx === 0 && <Dumbbell className="w-4 h-4" />}
                      {idx === 1 && <Target className="w-4 h-4" />}
                      {idx === 2 && <Apple className="w-4 h-4" />}
                      {idx === 3 && <Calendar className="w-4 h-4" />}
                    </div>
                    <div>
                      <span className="font-display font-bold text-white text-sm block">
                        {feat.title}
                      </span>
                      <p className="text-[11px] md:text-xs text-neutral-400 mt-1 leading-normal">
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
