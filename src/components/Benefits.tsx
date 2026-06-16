import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Apple, LineChart, MessageSquare, ChevronDown, Check, Zap } from 'lucide-react';
import { BenefitCard } from '../types';

export default function Benefits() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const benefits: BenefitCard[] = [
    {
      id: 'training',
      title: 'Plano de Treino Personalizado',
      metricHeadline: 'Personalização Biomecânica',
      description: 'Seus treinos são estruturados do zero para se adaptarem à sua estrutura física, limitações e nível atual. Nada de fichas prontas ou treinos genéricos de gaveta.',
      details: [
        'Seleção de exercícios ideal focando na sua estrutura',
        'Progressão de carga e faixas de repetições inteligentes',
        'Biblioteca de exercícios guiada com vídeos em alta definição',
        'Fichas adaptáveis para academia convencional, estúdios ou em casa'
      ]
    },
    {
      id: 'nutrition',
      title: 'Estratégia Nutricional Flexível',
      metricHeadline: 'Dieta sem Restrições Absurdas',
      description: 'Alcance excelente definição física e queima de gordura sem abandonar os alimentos que você gosta. Criamos padrões alimentares integrados à sua rotina social.',
      details: [
        'Divisão precisa de macronutrientes recalculada e ajustada semanalmente',
        'Guia completo e lista detalhada de substituição de alimentos',
        'Estratégias científicas para jantares fora, eventos e rotina social',
        'Foco na saúde digestiva, disposição e otimização hormonal'
      ]
    },
    {
      id: 'reviews',
      title: 'Feedbacks Semanais de Progresso',
      metricHeadline: 'Recalibração Metabólica Dinâmica',
      description: 'Toda semana analisamos seu progresso através de fotos, pesagem diária e monitoramento de cargas para ajustar suas calorias e calorias gastas, quebrando qualquer platô.',
      details: [
        'Monitoramento de bio-feedbacks cruciais (sono, estresse e fadiga)',
        'Vídeo personalizado semanal detalhando alterações na dieta e treino',
        'Ajustes finos no metabolismo com base nas respostas do corpo',
        'Análise postural e recomendações para correções funcionais'
      ]
    },
    {
      id: 'support',
      title: 'Suporte Direto e Individual',
      metricHeadline: 'Canal Direto Sem Intermediários',
      description: 'Você nunca estará sozinho nessa caminhada. Tenha contato direto via chat com o treinador Wandri para tirar dúvidas imediatas e mandar vídeos das execuções.',
      details: [
        'Respostas e orientações completas em poucas horas',
        'Análises e correções de movimentos enviadas por vídeo',
        'Alertas de metas diárias que sustentam sua consistência',
        'Trabalho de mentalidade para blindar seus hábitos no longo prazo'
      ]
    }
  ];

  return (
    <section 
      id="benefits_section" 
      className="relative py-14 sm:py-20 bg-neutral-950/40 border-y border-white/[0.03] overflow-hidden"
    >
      {/* Background soft lighting */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-neon-green/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
            <Zap className="w-3.5 h-3.5 text-neon-green" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-neon-green uppercase">ECOSSISTEMA COMPLETO DE TRANSFORMAÇÃO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            Tudo o Que Você Precisa <br className="hidden sm:inline" />
            <span className="text-gradient-neon font-black">Para Avançar</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Elimine as tentativas fracassadas. Esse método une fisiologia, musculação inteligente e responsabilidade diária para lapidar sua melhor versão.
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
                className={`group text-left p-6 md:p-8 rounded-2xl glass-panel relative cursor-pointer overflow-hidden transition-all duration-300 border ${
                  isExpanded 
                    ? 'border-neon-green bg-gradient-to-br from-neon-green/[0.04] to-transparent shadow-lg shadow-neon-green/5' 
                    : 'border-white/5 hover:border-white/10 hover:bg-white/[0.03] hover:shadow-xl'
                }`}
              >
                {/* Subtle spotlight glow effect on card hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-neon-green/10 blur-[40px] rounded-full transition-opacity group-hover:opacity-100 opacity-60 pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-start gap-4 md:gap-5">
                  <div className={`p-4 rounded-xl transition-all font-bold ${
                    isExpanded ? 'bg-neon-green text-black scale-105 shadow-md shadow-neon-green/25' : 'bg-white/5 text-neon-green'
                  }`}>
                    {benefit.id === 'training' && <Dumbbell className="w-6 h-6" />}
                    {benefit.id === 'nutrition' && <Apple className="w-6 h-6" />}
                    {benefit.id === 'reviews' && <LineChart className="w-6 h-6" />}
                    {benefit.id === 'support' && <MessageSquare className="w-6 h-6" />}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <span className="text-[10px] font-mono text-neon-green uppercase tracking-widest font-extrabold">
                      {benefit.metricHeadline}
                    </span>
                    <h3 className="font-display font-black text-white text-lg md:text-xl uppercase tracking-tight group-hover:text-neon-green transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                </div>

                {/* Short Paragraph Description */}
                <p className="mt-4 text-neutral-400 text-xs md:text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Deliverables accordion button indicators */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                    {isExpanded ? 'Ocultar detalhes técnicos' : 'Toque para ver a entrega detalhada'}
                  </span>
                  <div className={`p-1 rounded-full border border-white/10 transition-transform ${
                    isExpanded ? 'rotate-180 bg-neon-green/10 text-neon-green border-neon-green/20' : 'text-neutral-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Expanding subitems list */}
                {isExpanded && (
                  <div className="mt-4 space-y-2.5 bg-black/40 rounded-xl p-4 border border-white/5">
                    {benefit.details.map((subitem, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-neutral-300">
                        <div className="p-0.5 rounded-full bg-neon-green/10 text-neon-green shrink-0 mt-0.5">
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
