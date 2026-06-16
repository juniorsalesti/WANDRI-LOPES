import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Award, Sparkles, TrendingUp, Compass, Cpu, Sliders, Headset } from 'lucide-react';
import { TimelineItem } from '../types';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: TimelineItem[] = [
    {
      step: '01',
      title: 'Avaliação Inicial Completa',
      subtitle: 'ANÁLISE BIOMECÂNICA, POSTURAL & METABÓLICA',
      description: 'Iniciamos com uma varredura completa da sua rotina e biologia. Você responderá nossa anamnese e nos enviará suas medidas corporais, restrições alimentares, histórico de dores e vídeos de mobilidade/execução para conhecermos perfeitamente sua estrutura.'
    },
    {
      step: '02',
      title: 'Criação do Plano de Elite',
      subtitle: 'SEU DIRENCIONAMENTO BIOLÓGICO DE EVOLUÇÃO',
      description: 'O Wandri planeja seu método personalizado para as próximas 12 semanas. Isso inclui as divisões musculares exatas, seleção de exercícios mapeados para suas articulações, contagem exata e dinâmica de carboidratos, proteínas, gorduras e planejador alimentar.'
    },
    {
      step: '03',
      title: 'Ajustes e Auditorias Semanais',
      subtitle: 'CALIBRAÇÃO DINÂMICA DE PROGRAMAÇÃO',
      description: 'Semanalmente, você preenche seu formulário de evolução relatando peso, treinos cumpridos, cansaço acumulado e fotos. O Wandri avalia tudo e grava um vídeo exclusivo ajustando seus treinos ou alimentação para garantir foco absoluto e zero estagnação.'
    },
    {
      step: '04',
      title: 'Suporte Diário Ativo',
      subtitle: 'CONEXÃO DIRETA COM SEU TREINADOR',
      description: 'Converse de forma rápida e sem restrições com o Wandri nos canais internos da mentoria. Envie seus vídeos de exercícios pesados diretamente do salão de musculação e receba correções imediatas de técnica e segurança biomecânica.'
    }
  ];

  return (
    <section 
      id="timeline_section" 
      className="relative py-14 sm:py-20 md:py-24 bg-neutral-950/70 border-y border-white/10 overflow-hidden"
    >
      {/* Background radial spotlights */}
      <div className="absolute top-[50%] right-[-10%] w-[350px] h-[350px] bg-neon-green/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-neon-green/3 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
            <Compass className="w-3.5 h-3.5 text-neon-green" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-neon-green uppercase">DETERMINADO MATEMATICAMENTE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            Como o Sistema <br className="hidden sm:inline" />
            <span className="text-gradient-neon font-black">Funciona Na Prática</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Quatro fases coordenadas de forma inteligente para unir segurança mecânica, picos hormonais naturais e resultados definitivos à prova de desculpas.
          </p>
        </div>

        {/* Timelines modern design layout */}
        <div className="relative pt-6 max-w-5xl mx-auto">
          
          {/* Central vertical line for desktop */}
          <div className="absolute left-[50%] -translate-x-1/2 top-4 bottom-12 w-[2px] bg-white/[0.05] hidden lg:block">
            {/* Active glowing timeline bar filler */}
            <div 
              className="w-full bg-neon-green shadow-[0_0_12px_#38F2A3] transition-all duration-500 rounded-full" 
              style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="space-y-12 lg:space-y-8 relative">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isActive = activeStep === idx;
              
              return (
                <div 
                  id={`timeline_segment_${idx}`}
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`flex flex-col lg:flex-row items-center relative ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central glowing target node */}
                  <div className="absolute left-[50%] -translate-x-1/2 top-10 w-8 h-8 rounded-full border border-white/10 bg-[#080808] z-20 hidden lg:flex items-center justify-center transition-all duration-300">
                    <div className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-neon-green shadow-[0_0_10px_#38F2A3] scale-110' : 'bg-neutral-800'
                    }`} />
                  </div>

                  {/* Left Column (Card Panel) */}
                  <div className="w-full lg:w-[45%] text-left relative z-10">
                    <div 
                      className={`p-6 md:p-8 rounded-2xl glass-panel text-left relative transition-all duration-300 border ${
                        isActive 
                          ? 'border-neon-green/45 bg-gradient-to-br from-neon-green/[3%] to-transparent shadow-xl' 
                          : 'border-white/5 hover:border-white/10'
                      }`}
                    >
                      {/* Top floating phase identification */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-3xl font-black text-neon-green leading-none">
                          {item.step}
                        </span>
                        <div className="p-2 bg-white/5 rounded-lg text-neon-green">
                          {idx === 0 && <Cpu className="w-5 h-5 text-neon-green" />}
                          {idx === 1 && <Sparkles className="w-5 h-5 text-neon-green" />}
                          {idx === 2 && <Sliders className="w-5 h-5 text-neon-green" />}
                          {idx === 3 && <Headset className="w-5 h-5 text-neon-green" />}
                        </div>
                      </div>

                      <span className="text-[10px] md:text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider block">
                        {item.subtitle}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight mt-1 group-hover:text-neon-green transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mt-3">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty divider block for balancing on large screens */}
                  <div className="hidden lg:block lg:w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
