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
      className="relative py-16 sm:py-24 bg-[#F9FAFB] border-y border-neutral-200 overflow-hidden"
    >
      {/* Background soft ambient glows */}
      <div className="absolute top-[50%] right-[-10%] w-[350px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-blue-400/5 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">DETERMINADO MATEMATICAMENTE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
            Como o Sistema <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-neutral-950 to-blue-600 bg-clip-text text-transparent font-black">Funciona Na Prática</span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Quatro fases coordenadas de forma inteligente para unir segurança mecânica, picos hormonais naturais e resultados definitivos à prova de desculpas.
          </p>
        </div>

        {/* Timelines modern design layout */}
        <div className="relative pt-6 max-w-5xl mx-auto">
          
          {/* Central vertical line for desktop */}
          <div className="absolute left-[50%] -translate-x-1/2 top-4 bottom-12 w-[2px] bg-neutral-200 hidden lg:block">
            {/* Active glowing timeline bar filler */}
            <div 
              className="w-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.2)] transition-all duration-500 rounded-full" 
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
                  <div className="absolute left-[50%] -translate-x-1/2 top-10 w-8 h-8 rounded-full border border-neutral-200 bg-white z-20 hidden lg:flex items-center justify-center transition-all duration-300">
                    <div className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.3)] scale-110' : 'bg-neutral-300'
                    }`} />
                  </div>

                  {/* Left Column (Card Panel) */}
                  <div className="w-full lg:w-[45%] text-left relative z-10">
                    <div 
                      className={`p-6 md:p-8 rounded-2xl text-left relative transition-all duration-300 border ${
                        isActive 
                          ? 'border-[#2563eb] bg-white shadow-xl shadow-blue-500/5' 
                          : 'border-neutral-200/80 bg-white hover:border-blue-300/60 shadow-[0_4px_25px_rgba(0,0,0,0.02)]'
                      }`}
                    >
                      {/* Top floating phase identification */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-3.5xl font-black text-blue-600 leading-none">
                          {item.step}
                        </span>
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                          {idx === 0 && <Cpu className="w-5 h-5 text-blue-600" />}
                          {idx === 1 && <Sparkles className="w-5 h-5 text-blue-600" />}
                          {idx === 2 && <Sliders className="w-5 h-5 text-blue-600" />}
                          {idx === 3 && <Headset className="w-5 h-5 text-blue-600" />}
                        </div>
                      </div>

                      <span className="text-[10px] md:text-xs font-mono text-neutral-500 font-bold uppercase tracking-wider block">
                        {item.subtitle}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-neutral-900 uppercase tracking-tight mt-1 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mt-3">
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
