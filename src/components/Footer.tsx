import React, { useState } from 'react';
import { Dumbbell, Mail, MapPin, Phone, Shield, ArrowUp, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer_section" className="relative bg-neutral-950 border-t border-white/5 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand/Column 1 (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <div className="p-2 rounded-lg bg-neon-green/15 text-neon-green">
                <Dumbbell className="w-5 h-5 rotate-[-45deg]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight text-white leading-none">
                  WANDRI LOPES
                </span>
                <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold uppercase leading-none mt-0.5">SISTEMA ELITE</span>
              </div>
            </a>
            
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Metodologias científicas de alta performance e engenharia corporal aplicadas pelo coach Wandri Lopes. Conquiste disciplina absoluta, queime gordura e construa massa muscular com hábitos consolidados para sempre.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                id="social_ig"
                href="#insta" 
                className="p-2 rounded-full bg-white/5 text-neutral-400 hover:bg-neon-green hover:text-black transition-all border border-white/5 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                id="social_yt"
                href="#youtube" 
                className="p-2 rounded-full bg-white/5 text-neutral-400 hover:bg-neon-green hover:text-black transition-all border border-white/5 cursor-pointer"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                id="social_tw"
                href="#twitter" 
                className="p-2 rounded-full bg-white/5 text-neutral-400 hover:bg-neon-green hover:text-black transition-all border border-white/5 cursor-pointer"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links/Column 2 (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-neutral-400 tracking-wider uppercase">
              RECURSOS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#benefits_section" className="text-neutral-400 hover:text-neon-green transition-colors">Benefícios Completos</a>
              </li>
              <li>
                <a href="#results_section" className="text-neutral-400 hover:text-neon-green transition-colors">Resultados de Alunos</a>
              </li>
              <li>
                <a href="#programs_section" className="text-neutral-400 hover:text-neon-green transition-colors">Fichas Masculina & Feminina</a>
              </li>
              <li>
                <a href="#pricing_section" className="text-neutral-400 hover:text-neon-green transition-colors">Acompanhamento e Vagas</a>
              </li>
            </ul>
          </div>

          {/* Contact details/Column 3 (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-neutral-400 tracking-wider uppercase">
              INFORMAÇÕES DE CONTATO
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neon-green" />
                <span className="font-mono">suporte@wandrilopes.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-neon-green" />
                <span>Estúdio Elite Virtual • Brickell Ave, Miami, FL & Alunos pelo Brasil</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neon-green" />
                <span className="font-mono">+1 (800) 520-COMPLY</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 gap-4 text-[10px] font-mono text-neutral-500">
          
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span>© {currentYear} WANDRI LOPES ELITE SYSTEM. TODOS OS DIREITOS RESERVADOS.</span>
            <span className="hidden sm:inline">•</span>
            <button 
              id="privacy_policy_trigger"
              onClick={() => setActiveModal('privacy')} 
              className="hover:text-neon-green underline transition-colors cursor-pointer"
            >
              POLÍTICA DE PRIVACIDADE
            </button>
            <span>•</span>
            <button 
              id="terms_of_service_trigger"
              onClick={() => setActiveModal('terms')} 
              className="hover:text-neon-green underline transition-colors cursor-pointer"
            >
              TERMOS DE SERVIÇO
            </button>
          </div>

          <button
            id="scroll_top_btn"
            onClick={handleScrollTop}
            className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-neutral-400 hover:text-neon-green hover:bg-white/10 transition-all flex items-center gap-1.5 cursor-pointer uppercase text-[9px] font-extrabold tracking-widest shrink-0"
          >
            VOLTAR AO TOPO <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>

      {/* Interactive Modal Drawers */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg glass-panel-heavy rounded-2xl border border-white/10 p-6 md:p-8 space-y-4 max-h-[80vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs font-mono font-bold text-neon-green uppercase tracking-widest">
                {activeModal === 'privacy' ? 'Política de Privacidade Diagnóstica' : 'Termos de Serviço da Mentoria'}
              </span>
              <button 
                id="close_policy_modal"
                onClick={() => setActiveModal(null)}
                className="text-neutral-400 hover:text-white font-mono text-xs cursor-pointer"
              >
                [ FECHAR ]
              </button>
            </div>

            {activeModal === 'privacy' ? (
              <div className="space-y-3.5 text-xs text-neutral-300 leading-relaxed text-left">
                <p>
                  <strong>1. Coleta de Métricas Diagnósticas:</strong> Coletamos seu primeiro nome, endereço de e-mail cadastrado, gênero biológico, histórico de treinos e principais dificuldades de consolidação técnica durante a fase de diagnóstico interativo.
                </p>
                <p>
                  <strong>2. Destinação das Informações:</strong> Esses dados são processados exclusivamente pelo Coach Wandri Lopes para formular suas planilhas de macros, treinos e objetivos semanais de alta performance. Nunca vendemos ou divulgamos seus dados com terceiros.
                </p>
                <p>
                  <strong>3. Criptografia e Proteção:</strong> Empregamos criptografia SSL avançada de ponta a ponta. Fotos de evolução física e relatórios diagnósticos são mantidos de forma 100% confidencial no banco de dados seguro da mentoria.
                </p>
                <p>
                  <strong>4. Consentimento e Comunicação:</strong> Ao preencher a avaliação diagnóstica de perfil, você concorda com o envio de informativos de evolução gratuitos e materiais relevantes em formato PDF diretamente para seu e-mail de contato.
                </p>
              </div>
            ) : (
              <div className="space-y-3.5 text-xs text-neutral-300 leading-relaxed text-left">
                <p>
                  <strong>1. Aceitação do Aluno:</strong> O preenchimento da vaga é estritamente meritocrático e baseado no nível de comprometimento do interessado. O Coach se reserva o direito exclusivo de recusar candidatos sem consistência real nas etapas obrigatórias.
                </p>
                <p>
                  <strong>2. Garantia de Resultados e Estorno:</strong> Temos compromisso absoluto com metas. Caso o participante comprove o registro de peso semanal, cumpra as diretrizes de macronutrientes do planner, envie os vídeos de postura de exercícios e demonstre zero evolução em 4 semanas, faremos o reembolso integral do valor.
                </p>
                <p>
                  <strong>3. Isenção de Responsabilidade Física:</strong> Os planejamentos de musculação envolvem princípios de sobrecarga mecânica progressiva. O participante certifica que está em excelente estado físico e possui liberação médica para realizar levantamentos livres com sobrecarga de cargas.
                </p>
                <p>
                  <strong>4. Atributos Intelectuais:</strong> Cálculos de taxa metabólica, planilhas inteligentes de cozimento, fichas técnicas de hipertrofia muscular estrutural e vídeos exclusivos enviados em mentoria permanecem como patrimônio intelectual intransferível.
                </p>
              </div>
            )}

            <button
              id="confirm_policy_btn"
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 rounded-lg bg-neon-green text-black font-display font-extrabold text-xs tracking-wider uppercase hover:bg-neon-green/80 cursor-pointer"
            >
              Eu Compreendo & Concordo
            </button>

          </div>
        </div>
      )}

    </footer>
  );
}
