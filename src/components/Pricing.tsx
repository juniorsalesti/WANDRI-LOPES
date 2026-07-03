import React from 'react';
import { Check, Flame, Star, ShieldCheck, HelpCircle, ArrowRight, Zap, CreditCard, Calendar } from 'lucide-react';

interface PricingProps {
  onOpenAssessment: () => void;
}

export default function Pricing({ onOpenAssessment }: PricingProps) {
  const plans = [
    {
      id: 'trimestral',
      name: 'Plano Trimestral',
      duration: '90 dias',
      price: 'R$ 497,00',
      popular: false,
      tagline: 'Foco inicial e adaptação metabólica',
      badge: '90 DIAS • ATENDIMENTO ONLINE',
      features: [
        { text: 'Atendimento online', subText: 'Contato direto e prioritário via WhatsApp.' },
        { text: 'Status ativo', subText: 'Acompanhamento constante de métricas e evolução.' },
        { text: 'Treino personalizado', subText: 'Planos estruturados especificamente para seus objetivos biomecânicos.' },
        { text: 'Planejamento de Dieta', subText: 'Calibração precisa de calorias e macros de forma flexível.' }
      ],
      payments: [
        'PIX',
        'Cartão em até 3x'
      ],
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Trimestral%20de%2090%20dias%20%28R%24%20497%29%21'
    },
    {
      id: 'semestral',
      name: 'Plano Semestral',
      duration: '180 dias',
      price: 'R$ 897,00',
      popular: true,
      tagline: 'O tempo perfeito para consolidação e ganhos sólidos',
      badge: 'RECOMENDADO • 180 DIAS • POPULAR',
      features: [
        { text: 'Atendimento online', subText: 'Contato direto e prioritário via WhatsApp.' },
        { text: 'Status ativo', subText: 'Acompanhamento constante de métricas e evolução.' },
        { text: 'Treino personalizado', subText: 'Planos estruturados especificamente para seus objetivos biomecânicos.' },
        { text: 'Planejamento de Dieta', subText: 'Calibração precisa de calorias e macros de forma flexível.' }
      ],
      payments: [
        'PIX',
        'Cartão em até 6x'
      ],
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Semestral%20de%20180%20dias%20%28R%24%20897%29%21'
    },
    {
      id: 'hibrido',
      name: 'Plano Híbrido',
      duration: '180 dias (Semestral)',
      price: 'R$ 1.617,00',
      popular: false,
      tagline: 'Avançado com encontros e acompanhamento completo',
      badge: 'PROXIMIDADE MÁXIMA',
      features: [
        { text: 'Atendimento híbrido', subText: 'Mentoria online diária somada a suporte presencial consultivo.' },
        { text: 'Treino estruturado de elite', subText: 'Ajustes posturais avançados e precisão biomecânica refinada.' },
        { text: 'Planejamento de Dieta de Elite', subText: 'Orientação de alta performance e suporte suplementar completo.' }
      ],
      payments: [
        'PIX',
        'Cartão em até 2x'
      ],
      whatsappLink: 'https://wa.me/5511999999999?text=Ol%C3%A1%20Wandri%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20H%C3%ADbrido%20de%20180%20dias%20%28R%24%201.617%29%21'
    }
  ];

  return (
    <section 
      id="pricing_section" 
      className="relative py-16 sm:py-24 bg-white border-y border-neutral-200 overflow-hidden"
    >
      {/* Background soft ambient lights */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] bg-blue-400/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 shadow-sm">
            <Star className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">PLANOS EXCLUSIVOS DE EVOLUÇÃO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 uppercase">
            GARANTA SEU LUGAR NO <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-neutral-950 to-blue-600 bg-clip-text text-transparent font-black">GRUPO DE PERFORMANCE</span>
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            O coach Wandri Lopes trabalha apenas com vagas limitadas de alunos ativos simultâneos para manter o foco individualizado. Escolha o plano ideal abaixo:
          </p>
        </div>

        {/* Pricing Layout Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-2">
          {plans.map((plan) => {
            const isFeatured = plan.popular;
            return (
              <div 
                key={plan.id}
                id={`plan_card_${plan.id}`} 
                className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative text-left border ${
                  isFeatured 
                    ? 'border-2 border-blue-600 bg-blue-50/10 shadow-[0_15px_45px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]' 
                    : 'border-neutral-200 bg-white hover:border-blue-400/40 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)]'
                }`}
              >
                {/* Highlight Badge if Featured or Special Tag */}
                <div className="absolute top-4 right-4 flex items-center">
                  <span className={`font-display font-black text-[9px] uppercase tracking-widest py-1 px-2.5 rounded-full leading-none ${
                    isFeatured 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                      : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase font-bold flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-600" /> Duração: {plan.duration}
                    </span>
                    <h3 className="font-display text-2xl font-black text-neutral-900 uppercase tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-normal">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className={`py-4 border-y space-y-1 ${isFeatured ? 'border-blue-100 bg-blue-50/10 -mx-6 md:-mx-8 px-6 md:px-8' : 'border-neutral-150'}`}>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-extrabold font-mono select-none ${isFeatured ? 'text-blue-600' : 'text-neutral-900'}`}>
                        {plan.price}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono font-bold">/ TOTAL</span>
                    </div>
                    <span className="text-[10px] text-neutral-500 font-mono block uppercase tracking-wider">
                      Valor integral do acompanhamento
                    </span>
                  </div>

                  {/* Features list */}
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-black block">O que está incluso:</span>
                    <div className="space-y-3.5">
                      {plan.features.map((f, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start">
                          <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${isFeatured ? 'bg-blue-100 text-blue-600' : 'bg-neutral-100 text-neutral-700'}`}>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <div className="text-left">
                            <span className="text-xs text-neutral-900 block font-bold leading-tight">{f.text}</span>
                            <p className="text-[10px] text-neutral-500 mt-0.5 leading-normal">{f.subText}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Options list */}
                  <div className="space-y-3 pt-4 border-t border-neutral-100">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-black flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-blue-600" /> Formas de pagamento:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {plan.payments.map((p, idx) => (
                        <span 
                          key={idx} 
                          className="text-[10px] font-mono px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-neutral-700 rounded-md font-bold uppercase tracking-wider"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA action */}
                <div className="pt-8">
                  <a
                    id={`btn_pricing_${plan.id}`}
                    href={plan.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all cursor-pointer block text-center shadow-md ${
                      isFeatured 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-95' 
                        : 'border border-neutral-300 bg-white hover:border-neutral-400 text-neutral-800 hover:bg-neutral-50/50 hover:scale-[1.01] active:scale-95'
                    }`}
                  >
                    Candidatar-se à Vaga
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic assessment bridge at the bottom to convert cautious leads */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-600">
            Prefere fazer uma avaliação diagnóstica primeiro?{' '}
            <button 
              onClick={onOpenAssessment}
              className="text-blue-600 font-bold underline hover:text-blue-700 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              Fazer avaliação gratuita agora <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </p>
        </div>

        {/* Security & Risk Mitigation block */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-y-3 gap-x-8 text-neutral-500 text-xs font-mono">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-600" /> Ambiente de Pagamento SSL Seguro e Criptografado</span>
          <span className="flex items-center gap-1.5"><HelpCircle className="w-4 h-4 text-blue-600" /> Reembolso Total em até 4 Semanas sem Perguntas caso não veja mudanças</span>
        </div>

      </div>
    </section>
  );
}
