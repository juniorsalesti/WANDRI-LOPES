import React, { useState } from 'react';
import { Check, Flame, Star, ShieldCheck, Mail, HelpCircle, ArrowRight, Zap } from 'lucide-react';

interface PricingProps {
  onOpenAssessment: () => void;
}

export default function Pricing({ onOpenAssessment }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('quarterly');

  const premiumFeatures = [
    { text: 'PROGRAMAS DE TREINO TOTALMENTE INDIVIDUAIS', highlight: true, subText: 'Desenhados biomecanicamente do zero e atualizados na hora de acordo com sua evolução.' },
    { text: 'MACRONUTRIENTES E PLANILHA DE ALIMENTAÇÃO FLEXÍVEL', highlight: true, subText: 'Protocolo metabólico adaptado especificamente para sua rotina real de jantares ou viagens.' },
    { text: 'ANÁLISES SEMANAIS COMPLETAS EM VÍDEO', highlight: true, subText: 'Fidelidade absoluta de metas em vídeos de 10 minutos gravados pessoalmente pelo coach Wandri Lopes.' },
    { text: 'SUPORTE SUPREMO CHAT COM CONTATO DIRETO CONTÍNUO', highlight: false, subText: 'Tire dúvidas e envie vídeos de postura diretamente do salão de musculação no WhatsApp.' },
    { text: 'CENTRO INTEGRADO DE EVOLUÇÃO BIOMETRICS', highlight: false, subText: 'Gráficos internos de histórico de peso corporal, cargas de trabalho e ajustes estruturais.' },
    { text: 'MATRIZ DE SUPLEMENTAÇÃO & SONO REGENERATIVO', highlight: false, subText: 'Vitaminas, dosagens, frentes de descanso e estratégias práticas para eventos sociais.' }
  ];

  const standardFeatures = [
    { text: 'PROGRAMA DE TREINO CUSTOMIZADO', highlight: false, subText: 'Fichas focadas nas articulações montadas para um ciclo de 12 semanas.' },
    { text: 'DIVISÃO DE METAS DE MACRONUTRIENTES', highlight: false, subText: 'Ajuste inicial de calorias calculadas personalizadas no seu onboarding.' },
    { text: 'ACOMPANHAMENTO MENSAL DE PLANOS', highlight: false, subText: 'Revisão e ajuste básico de dados e volume via formulário de e-mail.' },
    { text: 'SUPORTE SIMPLIFICADO POR E-MAIL', highlight: false, subText: 'Canal individual para tirar dúvidas com tempo de resposta de 48 horas úteis.' }
  ];

  // Pricing values (Premium is high-end, standard is regular)
  const premiumPrice = billingCycle === 'monthly' ? 199 : 149; 
  const premiumMonthlyEquivalent = billingCycle === 'monthly' ? 'R$ 1.199' : 'R$ 949';
  const standardMonthlyEquivalent = billingCycle === 'monthly' ? 'R$ 599' : 'R$ 479';

  const premiumBilledText = billingCycle === 'monthly' ? 'Cobrança mensal de R$ 1.199/mês' : 'Cobrança trimestral de R$ 2.847 (20% de Desconto incluído)';
  const standardBilledText = billingCycle === 'monthly' ? 'Cobrança mensal de R$ 599/mês' : 'Cobrança trimestral de R$ 1.437 (20% de Desconto incluído)';

  return (
    <section 
      id="pricing_section" 
      className="relative py-24 bg-neutral-950/40 border-y border-white/[0.03] overflow-hidden"
    >
      {/* Background spotlights */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-neon-green/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] bg-neon-green/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
            <Star className="w-3.5 h-3.5 text-neon-green" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-neon-green uppercase">PLANOS EXCLUSIVOS DE EVOLUÇÃO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            GARANTA SEU LUGAR NO <br className="hidden sm:inline" />
            <span className="text-gradient-neon font-black font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">GRUPO DE PERFORMANCE</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            O coach Wandri Lopes trabalha apenas com turmas limitadas de alunos ativos simultâneos para manter o foco individualizado. Escolha o plano ideal abaixo:
          </p>
        </div>

        {/* Binary Toggler Block (Monthly vs 90-Day Package) */}
        <div className="flex flex-col items-center justify-center gap-3 mb-16">
          <div className="glass-panel p-1 rounded-xl border border-white/5 inline-flex items-center">
            <button
              id="pricing_toggle_monthly"
              onClick={() => setBillingCycle('monthly')}
              className={`py-2 px-5 rounded-lg font-display font-bold text-xs tracking-widest uppercase cursor-pointer transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-neutral-800 text-white' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Ciclo Mensal
            </button>
            <button
              id="pricing_toggle_quarterly"
              onClick={() => setBillingCycle('quarterly')}
              className={`py-2 px-5 rounded-lg font-display font-bold text-xs tracking-widest uppercase cursor-pointer transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly' 
                  ? 'bg-neon-green text-black' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Ciclo Trimestral <span className="text-[9px] bg-black/10 text-black px-1.5 py-0.5 rounded uppercase font-black font-mono">Economize 20%</span>
            </button>
          </div>
          <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            *O plano de 90 dias é expressamente recomendado para estabilização metabólica e muscular completa
          </p>
        </div>

        {/* Pricing Layout Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto pt-2">
          
          {/* Card 2: STANDARD COACHING (left, simpler) */}
          <div 
            id="plan_card_standard" 
            className="lg:col-span-5 rounded-2xl glass-panel border border-white/5 p-6 md:p-8 flex flex-col justify-between hover:border-white/10 transition-all duration-300 relative text-left"
          >
            <div className="space-y-6">
              
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase font-bold block">
                  ACOMPANHAMENTO BÁSICO
                </span>
                <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                  Plano Standard
                </h3>
                <p className="text-xs text-neutral-400 leading-normal">
                  Ideal para iniciantes ou intermediários disciplinados que precisam de uma direção profissional clara e avaliações pontuais de progresso.
                </p>
              </div>

              {/* Price */}
              <div className="py-4 border-y border-white/5 space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold font-mono text-white select-none">{standardMonthlyEquivalent}</span>
                  <span className="text-xs text-neutral-400 font-mono">/ MÊS</span>
                </div>
                <span className="text-[11px] text-neutral-500 font-sans block font-medium">
                  {standardBilledText}
                </span>
              </div>

              {/* Features list */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-black block">O que está incluso:</span>
                <div className="space-y-3">
                  {standardFeatures.map((f, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <div className="p-0.5 rounded-full bg-white/10 text-white shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs text-neutral-200 block font-medium leading-tight">{f.text}</span>
                        <p className="text-[10px] text-neutral-500 mt-0.5 leading-normal">{f.subText}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* CTA action */}
            <div className="pt-8">
              <a
                id="btn_pricing_standard"
                href="https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Standard%21"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl border border-white/15 hover:border-white/30 text-white font-display font-extrabold text-sm uppercase tracking-wider transition-all hover:bg-white/[0.02] cursor-pointer block text-center"
              >
                Candidatar-se à Vaga Standard
              </a>
            </div>

          </div>

          {/* Card 1: PREMIUM COACHING (right, highly glowing, featured) */}
          <div 
            id="plan_card_premium" 
            className="lg:col-span-7 rounded-3xl glass-panel-heavy border border-neon-green/40 p-6 md:p-10 flex flex-col justify-between hover:border-neon-green/60 hover:shadow-2xl hover:shadow-neon-green/[5%] transition-all duration-300 relative text-left"
          >
            {/* Absolute badge */}
            <div className="absolute top-4 right-4 bg-neon-green text-black font-display font-black text-[9px] uppercase tracking-widest py-1 px-2.5 rounded-full shadow-md shadow-neon-green/20 leading-none">
              RECOMENDADO • APENAS 4 VAGAS RESTANTES
            </div>

            <div className="space-y-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-neon-green tracking-wider uppercase font-extrabold block">
                    SISTEMA DE PERFORMANCE ELITE
                  </span>
                  <div className="p-1 rounded bg-neon-green/10 text-neon-green shrink-0">
                    <Flame className="w-3.5 h-3.5 animate-pulse" />
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                  Plano Elite Premium (Completo)
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
                  Nosso acompanhamento topo de linha. O Coach Wandri projeta, acompanha e gerencia de forma 100% científica sua rotina de treino e biofeedback com contato direito, ilimitado e individualizado.
                </p>
              </div>

              {/* Price */}
              <div className="py-4 border-y border-white/10 space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black font-mono text-neon-green select-none">{premiumMonthlyEquivalent}</span>
                  <span className="text-xs text-neutral-400 font-mono">/ MONTH</span>
                </div>
                <span className="text-[11px] text-neon-green font-mono block font-black">
                  {premiumBilledText}
                </span>
              </div>

              {/* Features list */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-black block">O que está incluso:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {premiumFeatures.map((f, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <div className="p-0.5 rounded-full bg-neon-green/15 text-neon-green shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs text-white block font-bold leading-tight">{f.text}</span>
                        <p className="text-[10px] text-neutral-400 mt-0.5 leading-normal">{f.subText}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* CTA action */}
            <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="btn_pricing_premium"
                href="https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Elite%20Premium%21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4.5 px-8 rounded-xl bg-neon-green text-black font-display font-black text-sm uppercase tracking-wider transition-all hover:bg-neon-green/80 hover:shadow-xl hover:shadow-neon-green/20 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                Candidatar-se ao Plano Premium <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>

          </div>

        </div>

        {/* Security & Risk Mitigation block */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-y-3 gap-x-8 text-neutral-500 text-xs font-mono">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-neon-green" /> Ambiente de Pagamento SSL Seguro e Criptografado</span>
          <span className="flex items-center gap-1.5"><HelpCircle className="w-4 h-4 text-neon-green" /> Reembolso Total em até 4 Semanas sem Perguntas caso não veja mudanças</span>
        </div>

      </div>
    </section>
  );
}
