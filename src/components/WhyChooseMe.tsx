import React, { useState } from 'react';
import { ShieldAlert, Check, Sparkles, Smile, ShieldCheck, Heart, UserCheck } from 'lucide-react';

export default function WhyChooseMe() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pillars = [
    {
      title: 'Planos 100% personalizados',
      desc: 'Sem geradores automáticos ou planilhas prontas. O Coach Wandri planeja cada vetor de carga mecânica e alteração nutricional com base no seu percentual de gordura e limitações físicas reais.'
    },
    {
      title: 'Acompanhamento semanal de metas',
      desc: 'Nós controlamos cada detalhe. Pesagem, postura na execução, volume do treino, qualidade do repouso e hidratação são auditados semanalmente com ajustes precisos de planejamento.'
    },
    {
      title: 'Comunicação direta sem intermediários',
      desc: 'Nada de assistentes, estagiários ou robôs. Sua conversa é um a um diretamente com o Wandri. Ele analisa criticamente seus vídeos de treino e orienta sua alimentação diária.'
    },
    {
      title: 'Resultados duradouros e sustentáveis',
      desc: 'Rompa barreiras de perda de gordura sem restrição extrema, estafa e fraqueza constante. Desenhamos o planejamento de acordo com sua vida para que manter o corpo seja natural.'
    },
    {
      title: 'Coaching baseado em evidência científica',
      desc: 'Resultados amparados exclusivamente por cinesiologia, física e fisiologia do exercício comprovadas. Sem dietas milagrosas, modismos de internet ou mitos da musculação.'
    },
    {
      title: 'Plataforma integrada de progresso',
      desc: 'Acompanhe de forma descomplicada a evolução da sua composição corporal, gráficos de cargas e progressão de força nos compostos e histórico de metas alcançadas.'
    }
  ];

  return (
    <section 
      id="why_choose_me_section" 
      className="relative py-20 md:py-24 bg-[#080808] border-b border-white/[0.03]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content & Bullet Points */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20">
                <ShieldCheck className="w-3.5 h-3.5 text-neon-green" />
                <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-neon-green uppercase">PADRÃO DE COMPROMISSO WANDRI LOPES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase">
                O Que Torna Nossa <br className="hidden sm:inline" />
                <span className="text-gradient-neon font-black font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">Mentoria Diferente</span>
              </h2>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                A maioria das pessoas falha porque recebe apenas treinos impressos. Nós construímos um ecossistema completo de evolução física, ajustando parâmetros biomecânicos e biológicos constantemente.
              </p>
            </div>

            {/* Bullet points list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((p, idx) => (
                <div
                  id={`why_item_${idx}`}
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`p-4 rounded-xl transition-all duration-300 border text-left cursor-help ${
                    hoveredIndex === idx
                      ? 'border-neon-green/30 bg-gradient-to-br from-neon-green/[5%] to-transparent shadow-md'
                      : 'border-white/5 bg-white/[0.01]'
                  }`}
                >
                  <div className="flex gap-3 items-start">
                    <div className={`p-1 rounded-md shrink-0 mt-0.5 transition-colors ${
                      hoveredIndex === idx ? 'bg-neon-green text-black' : 'bg-neon-green/10 text-neon-green'
                    }`}>
                      <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-display font-bold text-white text-sm block group-hover:text-neon-green transition-colors">
                        {p.title}
                      </span>
                      <p className="text-[11px] text-neutral-400 leading-normal">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side Visual Group Media Frame */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Background glow layer */}
            <div className="absolute inset-0 bg-neon-green/5 blur-[80px] rounded-full pointer-events-none z-0" />

            <div className="relative w-full max-w-[360px] md:max-w-[420px] aspect-[4/5] z-10">
              
              {/* Premium client lifestyle image frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl relative">
                <img 
                  id="clients_group_img"
                  src="/src/assets/images/fitness_clients_group_1781558091776.jpg" 
                  alt="Wandri Lopes Clientes Transformações" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-700 object-center filter saturate-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              </div>

              {/* Float Badge 1 */}
              <div 
                className="absolute -right-4 top-[15%] glass-panel rounded-xl py-2.5 px-4 border border-white/10 shadow-xl flex items-center gap-2 max-w-[170px]"
                style={{ animation: 'float 5.5s ease-in-out infinite' }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-neon-green animate-pulse" />
                <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider leading-none">
                  98.7% DE RETENÇÃO
                </span>
              </div>

              {/* Float Badge 2 */}
              <div 
                className="absolute -left-4 bottom-[15%] glass-panel rounded-xl py-3 px-4 border border-white/10 shadow-xl flex items-center gap-3 max-w-[200px]"
                style={{ animation: 'float 6.5s ease-in-out infinite reverse 0.5s' }}
              >
                <div className="p-1.5 bg-neon-green/10 text-neon-green rounded-lg shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-white font-display font-extrabold text-xs block leading-none">SESSÕES DIRETAS</span>
                  <span className="text-[9px] text-neutral-400 font-mono block mt-1 leading-tight">FEEDBACKS DE EVOLUÇÃO</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
