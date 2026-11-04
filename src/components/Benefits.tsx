import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Apple, MessageSquare, Clock, ChevronDown, Check, Zap } from 'lucide-react';
import { BenefitCard } from '../types';

export default function Benefits() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const benefits: BenefitCard[] = [
    {
      id: 'training',
      title: 'Treino feito para você',
      metricHeadline: 'Pilar 01 • Individualidade',
      description: 'Um planejamento de treino pensado para seus objetivos, sua experiência e suas necessidades.',
      details: [
        'Seleção precisa de exercícios focando na sua estrutura física e objetivos',
        'Progressão inteligente de cargas e repetições calculadas para sua evolução',
        'Biblioteca de exercícios guiada com vídeos em alta definição de execução',
        'Fichas adaptáveis para academia comercial, estúdios ou treino em casa'
      ]
    },
    {
      id: 'nutrition',
      title: 'Alimentação alinhada aos seus objetivos',
      metricHeadline: 'Pilar 02 • Nutrição Estratégica',
      description: 'Acompanhamento nutricional personalizado, considerando sua rotina e o que você busca alcançar.',
      details: [
        'Acompanhamento nutricional personalizado sem restrições insustentáveis',
        'Divisão precisa de calorias e macronutrientes alinhada à sua rotina',
        'Guia completo e lista prática de substituição inteligente de alimentos',
        'Estratégias flexíveis para jantares fora, viagens e eventos sociais'
      ]
    },
    {
      id: 'support',
      title: 'Acompanhamento de perto',
      metricHeadline: 'Pilar 03 • Suporte Ativo',
      description: 'Orientação, suporte para dúvidas e ajustes nos treinos conforme sua evolução.',
      details: [
        'Contato direto e orientação contínua com o treinador para tirar dúvidas',
        'Análises e correções detalhadas de técnica e biomecânica por vídeo',
        'Ajustes dinâmicos de volume e intensidade para evitar platôs',
        'Acompanhamento constante para garantir seu foco, motivação e consistência'
      ]
    },
    {
      id: 'routine',
      title: 'Treino que cabe na sua rotina',
      metricHeadline: 'Pilar 04 • Constância & Praticidade',
      description: 'Organização dos treinos de acordo com seu tempo e sua disponibilidade, para facilitar a constância.',
      details: [
        'Planejamento de treinos adaptado ao tempo que você realmente tem disponível',
        'Divisões semanais realistas e flexíveis (de 3 a 6 dias na semana)',
        'Métodos eficientes para máximo resultado sem horas exaustivas na academia',
        'Construção de hábitos sustentáveis para facilitar a constância a longo prazo'
      ]
    }
  ];

  return (
    <section 
      id="benefits_section" 
      className="content-auto relative py-16 sm:py-24 bg-[#F9FAFB] border-y border-neutral-200 overflow-hidden"
    >
      {/* Background soft ambient lighting (hidden on mobile for high FPS) */}
      <div className="hidden md:block absolute top-[25%] right-[-10%] w-[350px] h-[350px] bg-[#2563eb]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="hidden md:block absolute bottom-[10%] left-[-5%] w-[250px] h-[250px] bg-[#2563eb]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">OS 4 PILARES DA METODOLOGIA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
            Os Quatro Pilares <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-neutral-950 to-[#2563eb] bg-clip-text text-transparent font-black">Da Nossa Metodologia</span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Elimine as tentativas sem resultado. Uma metodologia desenhada para transformar seu corpo com inteligência, sustentabilidade e acompanhamento contínuo.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit) => {
            const isExpanded = activeCard === benefit.id;
            
            return (
              <div
                id={`benefit_card_${benefit.id}`}
                key={benefit.id}
                onClick={() => setActiveCard(isExpanded ? null : benefit.id)}
                className={`group text-left p-6 md:p-8 rounded-2xl relative cursor-pointer overflow-hidden transition-all duration-300 border ${
                  isExpanded 
                    ? 'border-[#2563eb] bg-white shadow-xl shadow-blue-500/5' 
                    : 'border-neutral-200/80 bg-white hover:border-blue-400/50 hover:bg-neutral-50/50 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)]'
                }`}
              >
                {/* Subtle spotlight glow effect on card hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#2563eb]/5 blur-[40px] rounded-full transition-opacity group-hover:opacity-100 opacity-60 pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-start gap-4 md:gap-5">
                  <div className={`p-4 rounded-xl transition-all font-bold ${
                    isExpanded ? 'bg-[#2563eb] text-white scale-105 shadow-md shadow-blue-500/25' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {benefit.id === 'training' && <Dumbbell className="w-6 h-6" />}
                    {benefit.id === 'nutrition' && <Apple className="w-6 h-6" />}
                    {benefit.id === 'support' && <MessageSquare className="w-6 h-6" />}
                    {benefit.id === 'routine' && <Clock className="w-6 h-6" />}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-extrabold">
                      {benefit.metricHeadline}
                    </span>
                    <h3 className="font-display font-black text-neutral-900 text-lg md:text-xl uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                </div>

                {/* Short Paragraph Description */}
                <p className="mt-4 text-neutral-600 text-xs md:text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Deliverables accordion button indicators */}
                <div className="mt-4 pt-4 border-t border-neutral-150 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                    {isExpanded ? 'Ocultar detalhes técnicos' : 'Toque para ver a entrega detalhada'}
                  </span>
                  <div className={`p-1 rounded-full border border-neutral-200 transition-transform ${
                    isExpanded ? 'rotate-180 bg-blue-50 text-[#2563eb] border-blue-200' : 'text-neutral-500 bg-neutral-50'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Expanding subitems list */}
                {isExpanded && (
                  <div className="mt-4 space-y-2.5 bg-neutral-50/70 rounded-xl p-4 border border-neutral-150">
                    {benefit.details.map((subitem, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-neutral-700">
                        <div className="p-0.5 rounded-full bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{subitem}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
