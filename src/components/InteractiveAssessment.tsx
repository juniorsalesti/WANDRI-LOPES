import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Flame, 
  Target, 
  TrendingUp, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  X, 
  Calendar, 
  Apple, 
  Clock, 
  User, 
  Mail, 
  ChevronRight,
  Shield,
  Zap
} from 'lucide-react';
import { QuizAnswers } from '../types';

interface InteractiveAssessmentProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: 'fat-loss' | 'muscle-building' | 'recomp' | '';
}

export default function InteractiveAssessment({ isOpen, onClose, initialGoal = '' }: InteractiveAssessmentProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    gender: '',
    goal: initialGoal,
    experience: '',
    weeklyWorkouts: 4,
    mainStruggle: '',
    name: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({ name: '', email: '' });

  // Quiz progression handlers
  const selectGender = (gender: 'male' | 'female') => {
    setAnswers(prev => ({ ...prev, gender }));
    setTimeout(() => setStep(2), 200);
  };

  const selectGoal = (goal: 'fat-loss' | 'muscle-building' | 'recomp') => {
    setAnswers(prev => ({ ...prev, goal }));
    setTimeout(() => setStep(3), 200);
  };

  const selectExperience = (experience: 'beginner' | 'intermediate' | 'advanced') => {
    setAnswers(prev => ({ ...prev, experience }));
    setTimeout(() => setStep(4), 200);
  };

  const handleWorkoutChange = (val: number) => {
    setAnswers(prev => ({ ...prev, weeklyWorkouts: val }));
  };

  const selectStruggle = (struggle: string) => {
    setAnswers(prev => ({ ...prev, mainStruggle: struggle }));
    setTimeout(() => setStep(5), 200);
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: '', email: '' };

    if (!answers.name.trim()) {
      errors.name = 'Por favor, insira seu nome para personalizarmos o diagnóstico';
      valid = false;
    }
    if (!answers.email.trim()) {
      errors.email = 'Precisamos do seu e-mail para darmos início ao envio do planejamento';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(answers.email)) {
      errors.email = 'Por favor, digite um e-mail com formato válido';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(6);
    }
  };

  if (!isOpen) return null;

  // Custom macro calculations based on responses
  const calculateMetrics = () => {
    const isMale = answers.gender === 'male';
    const goal = answers.goal;
    const experience = answers.experience;
    
    let baseCalories = isMale ? 2600 : 1900;
    let proteinMultiplier = 1; // proportion modifier
    
    if (goal === 'fat-loss') {
      baseCalories -= 450;
      proteinMultiplier = 1.3; // high protein in deficit
    } else if (goal === 'muscle-building') {
      baseCalories += 350;
      proteinMultiplier = 1.1; // steady protein in surplus
    } else {
      baseCalories -= 100;
      proteinMultiplier = 1.25; // recomposition
    }

    // experience compensation
    if (experience === 'advanced') {
      baseCalories += 150;
    } else if (experience === 'beginner') {
      baseCalories -= 50;
    }

    const calculatedCalories = Math.round(baseCalories);
    const proteinFactor = isMale ? 2.1 : 1.8;
    // Converting lbs standard default to kg metrics context, e.g. 180 lbs is 82 kg. We multiply accordingly.
    const estimatedWeightKg = isMale ? 82 : 61;
    const calculatedProtein = Math.round(estimatedWeightKg * 2.2 * proteinFactor * proteinMultiplier);
    const calculatedCarbs = Math.round((calculatedCalories * 0.45) / 4);
    const calculatedFats = Math.round((calculatedCalories * 0.25) / 9);

    return {
      calories: calculatedCalories,
      protein: calculatedProtein,
      carbs: calculatedCarbs,
      fats: calculatedFats,
    };
  };

  const finalMetrics = calculateMetrics();

  // Custom blueprint timeline phases based on goals
  const getPlanPhases = () => {
    switch(answers.goal) {
      case 'fat-loss':
        return [
          { phase: 'Semanas 1-4', title: 'Preparação Metabólica', desc: 'Elimine os estoques de glicogênio excedentes, estimule a lipólise local das células de gordura e adapte as articulações.' },
          { phase: 'Semanas 5-8', title: 'Oxidação Ativa Lipídica', desc: 'Foco na oxidação celular com treinos de superséries e um déficit calórico planejado e consistente.' },
          { phase: 'Semanas 9-12', title: 'Lapidação Corporal Total', desc: 'Preserve toda a sua massa magra ativa e lapide os últimos focos de gordura localizada teimosa.' }
        ];
      case 'muscle-building':
        return [
          { phase: 'Semanas 1-4', title: 'Hipertrofia Neuromecânica', desc: 'Consolide a tensão mecânica necessária e prepare suas bases articulares para cargas progressivas.' },
          { phase: 'Semanas 5-8', title: 'Densidade de Fibras Ativas', desc: 'Aumente o volume total de trabalho muscular utilizando técnicas avançadas de drop-sets e rests controlados.' },
          { phase: 'Semanas 9-12', title: 'Volume Miofibrilar Máximo', desc: 'Estresse metabólico planejado para expandir o volume das fibras esqueléticas de forma rápida, com alto suporte regenerador.' }
        ];
      case 'recomp':
      default:
        return [
          { phase: 'Semanas 1-4', title: 'Reequilíbrio Estrutural', desc: 'Corrija pontos fracos posturais, eleve sua capacidade cardio basal e inicie a reprogramação celular.' },
          { phase: 'Semanas 5-8', title: 'Queima Dinâmica Ativa', desc: 'Alimentação inteligente focada no particionamento calórico ideal para alimentar novos músculos com gordura estocada.' },
          { phase: 'Semanas 9-12', title: 'Lapidação Corporal Premium', desc: 'Refinamento estético, aumento de vascularização localizada e consolidação da nova arquitetura física.' }
        ];
    }
  };

  const planPhases = getPlanPhases();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/90 backdrop-blur-md overflow-y-auto">
      {/* Container */}
      <div 
        id="diagnostic_modal" 
        className="relative w-full max-w-2xl glass-panel-heavy rounded-2xl border border-white/10 shadow-2xl shadow-neon-green/5 overflow-hidden my-8"
      >
        
        {/* Header/Banner bar */}
        <div className="relative bg-gradient-to-r from-neutral-900 via-black to-neutral-900 border-b border-white/5 py-5 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1 px-2 rounded bg-neon-green/10 border border-neon-green/30 text-neon-green text-[10px] font-mono font-bold uppercase tracking-wider">
              Modo Diagnóstico
            </div>
            <span className="text-xs text-neutral-400 font-mono">PASSO {step} DE 6</span>
          </div>
          <button 
            id="close_quiz"
            onClick={onClose} 
            className="p-1.5 rounded-full hover:bg-white/5 text-neutral-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-neutral-900">
          <div 
            className="h-full bg-neon-green transition-all duration-300 shadow-[0_0_8px_#38F2A3]" 
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>

        {/* Body content */}
        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">

            {/* STEP 1: GENDER */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="text-center space-y-2">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                    Vamos desenhar seu plano biológico personalizado.
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto">
                    Selecione seu perfil fisiológico. A estrutura de treinamento é adaptada especificamente de acordo com suas respostas hormonais e objetivos físicos.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <button
                    id="select_gender_male"
                    onClick={() => selectGender('male')}
                    className={`group relative p-6 text-left rounded-xl transition-all cursor-pointer border ${
                      answers.gender === 'male' 
                        ? 'border-neon-green bg-gradient-to-br from-neon-green/5 to-transparent' 
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-lg bg-neon-green/10 text-neon-green transition-transform group-hover:scale-110">
                        <Dumbbell className="w-6 h-6" />
                      </div>
                      {answers.gender === 'male' && (
                        <div className="p-1 rounded-full bg-neon-green text-black">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <span className="font-display text-lg font-bold text-white block">SISTEMA MASCULINO</span>
                    <span className="text-xs text-neutral-400 block mt-1 leading-relaxed">
                      Projetado para ganho de massa magra densa, força progressiva e queima rápida de gordura.
                    </span>
                  </button>

                  <button
                    id="select_gender_female"
                    onClick={() => selectGender('female')}
                    className={`group relative p-6 text-left rounded-xl transition-all cursor-pointer border ${
                      answers.gender === 'female' 
                        ? 'border-neon-green bg-gradient-to-br from-neon-green/5 to-transparent' 
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 rounded-lg bg-neon-green/10 text-neon-green transition-transform group-hover:scale-110">
                        <Zap className="w-6 h-6" />
                      </div>
                      {answers.gender === 'female' && (
                        <div className="p-1 rounded-full bg-neon-green text-black">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}
                    </div>
                    <span className="font-display text-lg font-bold text-white block">SISTEMA FEMININO</span>
                    <span className="text-xs text-neutral-400 block mt-1 leading-relaxed">
                      Desenhado para lapidar a definição de todo o corpo, recuperar a autoestima e ter resultados sem passar fome.
                    </span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: PRIMARY GOAL */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex justify-start">
                  <button 
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white font-mono cursor-pointer transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                  </button>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                    Qual é o seu objetivo físico principal?
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-sm mx-auto">
                    Escolha o vetor de transformação para calibrarmos suas calorias, macronutrientes alvos e periodização.
                  </p>
                </div>

                <div className="space-y-3 pt-3">
                  {[
                    { id: 'fat-loss', label: 'Secar / Emagrecer Máximo & Abdômen Definido', desc: 'Foco total na queima acelerada de gordura corporal profunda, preservando sua massa muscular ativa.', icon: Flame },
                    { id: 'muscle-building', label: 'Ganho de Massa Muscular Limpa & Força', desc: 'Ajuste de superávit calórico controlado para construir músculos densos e de qualidade.', icon: TrendingUp },
                    { id: 'recomp', label: 'Recomposição Corporal: Perder Gordura e Ganhar Músculo', desc: 'Melhoria de definição, vascularização e rigidez muscular ativa ao mesmo tempo.', icon: Target }
                  ].map((g) => {
                    const IconComp = g.icon;
                    return (
                      <button
                        id={`goal_${g.id}`}
                        key={g.id}
                        onClick={() => selectGoal(g.id as any)}
                        className={`w-full group relative p-4 flex items-center justify-between text-left rounded-xl transition-all cursor-pointer border ${
                          answers.goal === g.id 
                            ? 'border-neon-green bg-gradient-to-r from-neon-green/5 to-transparent' 
                            : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-lg text-white transition-colors ${
                            answers.goal === g.id ? 'bg-neon-green text-black' : 'bg-white/5'
                          }`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-display font-semibold text-white block text-sm leading-tight group-hover:text-neon-green transition-colors">{g.label}</span>
                            <span className="text-xs text-neutral-400 max-w-md block mt-0.5">{g.desc}</span>
                          </div>
                        </div>
                        {answers.goal === g.id ? (
                          <div className="p-1 rounded-full bg-neon-green text-black flex-shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-300 transition-colors flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 3: EXPERIENCE LEVEL */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex justify-start">
                  <button 
                    onClick={() => setStep(2)}
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white font-mono cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                  </button>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                    Qual é a sua experiência real de treino na academia?
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-sm mx-auto">
                    Isso ajusta seu volume ideal de estímulos para não sobrecarregar suas articulações ou o seu sistema nervoso.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-3">
                  {[
                    { id: 'beginner', title: 'Iniciante (0 a 12 Meses)', level: 'Foco técnico em aprender padrões de movimentos corretos e criar hábitos motores.' },
                    { id: 'intermediate', title: 'Intermediário (1 a 3 Anos)', level: 'Prática recorrente com treinos tradicionais de musculação, cargas e divisões ABC.' },
                    { id: 'advanced', title: 'Avançado (Mais de 3 Anos)', level: 'Físico adaptado. Requer refinamento técnico profundo, técnicas de intensidade e periodizações estritas.' }
                  ].map((x) => (
                    <button
                      id={`exp_${x.id}`}
                      key={x.id}
                      onClick={() => selectExperience(x.id as any)}
                      className={`group relative p-4 flex items-center justify-between text-left rounded-xl transition-all cursor-pointer border ${
                        answers.experience === x.id 
                          ? 'border-neon-green bg-gradient-to-r from-neon-green/5 to-transparent' 
                          : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
                      }`}
                    >
                      <div>
                        <span className="font-display font-semibold text-white block text-sm group-hover:text-neon-green transition-colors">{x.title}</span>
                        <span className="text-xs text-neutral-400 block mt-1 leading-relaxed">{x.level}</span>
                      </div>
                      {answers.experience === x.id ? (
                        <div className="p-1 rounded-full bg-neon-green text-black flex-shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-300 transition-colors flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4: ROUTINE & COMPLAINT */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex justify-start">
                  <button 
                    onClick={() => setStep(3)}
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white font-mono cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                  </button>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                    Qual é o seu maior obstáculo hoje?
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-sm mx-auto">
                    Nós removemos esses gargalos de forma cirúrgica com o andamento do suporte diário 1-on-1.
                  </p>
                </div>

                <div className="space-y-3 pt-3">
                  {[
                    { original: 'Time starvation & busy professional schedule', visual: 'Falta de tempo e rotina profissional extremamente corrida' },
                    { original: 'Lack of structural progress structure / hitting plateaus', visual: 'Estagnação física / treino e como as mesmas coisas sem ver resultados' },
                    { original: 'Impaired nutrition habits / constant sweet cravings / eating out', visual: 'Erros na alimentação, impulsividade por doces ou comer muito fora' },
                    { original: 'Low compliance / no real accountability system', visual: 'Falta de constância e de alguém cobrando minha evolução' }
                  ].map((st) => (
                    <button
                      id={`struggle_${st.original.slice(0,10).replace(/ /g, '_')}`}
                      key={st.original}
                      onClick={() => selectStruggle(st.original)}
                      className={`w-full group p-4 flex items-center justify-between text-left rounded-xl transition-all cursor-pointer border ${
                        answers.mainStruggle === st.original 
                          ? 'border-neon-green bg-gradient-to-r from-neon-green/5 to-transparent' 
                          : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
                      }`}
                    >
                      <span className="text-sm text-neutral-200 group-hover:text-neon-green transition-colors">{st.visual}</span>
                      {answers.mainStruggle === st.original ? (
                        <div className="p-1 rounded-full bg-neon-green text-black flex-shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-300 transition-colors flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-mono text-neutral-400">Comprometimento de Treino Semanal:</span>
                    <span className="text-sm font-bold font-mono text-neon-green">{answers.weeklyWorkouts} Dias / Semana</span>
                  </div>
                  <input
                    id="workout_range_slider"
                    type="range"
                    min="2"
                    max="6"
                    value={answers.weeklyWorkouts}
                    onChange={(e) => handleWorkoutChange(parseInt(e.target.value))}
                    className="w-full accent-neon-green h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
                    <span>2 dias</span>
                    <span>3 dias</span>
                    <span>4 dias</span>
                    <span>5 dias</span>
                    <span>6 dias</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: CONTACT INFORMATION */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex justify-start">
                  <button 
                    onClick={() => setStep(4)}
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white font-mono cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                  </button>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                    Para onde devemos enviar seu planejamento básico?
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-sm mx-auto">
                    Nós calcularemos os seus gráficos dinâmicos na tela seguinte, e enviaremos um guia em PDF detalhado por e-mail.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 pt-3 max-w-md mx-auto">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">Seu Primeiro Nome</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        id="leads_input_name"
                        type="text"
                        placeholder="Ex: Mateus"
                        value={answers.name}
                        onChange={(e) => setAnswers(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl font-sans text-white focus:outline-none focus:border-neon-green transition-all"
                      />
                    </div>
                    {formErrors.name && (
                      <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">Endereço de E-mail</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                      <input
                        id="leads_input_email"
                        type="email"
                        placeholder="seuemail@exemplo.com"
                        value={answers.email}
                        onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl font-sans text-white focus:outline-none focus:border-neon-green transition-all"
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div className="pt-3 flex gap-3 text-[10px] text-neutral-400 leading-relaxed">
                    <Shield className="w-5 h-5 text-neon-green shrink-0 mt-0.5" />
                    <span>
                      Sua privacidade é inegociável. Seus dados diagnósticos estão totalmente seguros. Garantimos zero spam: você receberá apenas o material de avaliação direta do coach.
                    </span>
                  </div>

                  <button
                    id="submit_lead_form"
                    type="submit"
                    className="w-full relative mt-4 py-4 px-6 rounded-xl bg-neon-green text-black font-display font-extrabold tracking-wide uppercase transition-all shadow-lg hover:shadow-neon-green/20 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Gerar Meu Diagnóstico de Performance <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 6: ASSESSMENT RESULTS */}
            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center space-y-1">
                  <div className="inline-flex p-2.5 rounded-full bg-neon-green/10 text-neon-green mb-2 animate-bounce">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                    Diagnóstico Criado com Sucesso!
                  </h3>
                  <p className="text-xs text-neon-green font-mono uppercase tracking-widest">
                    Formulado para {answers.name.trim()} • Guia de Nutrição & Periodização
                  </p>
                </div>

                {/* Dashboard grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Caloric breakdown card */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                      <Apple className="w-4 h-4 text-neon-green" /> DIVISÃO METABÓLICA BASAL
                    </span>
                    
                    <div className="text-center py-2">
                      <span className="text-4xl font-extrabold font-mono text-white tracking-tight">{finalMetrics.calories}</span>
                      <span className="text-xs text-neutral-500 font-mono block mt-1">CALORIAS DIÁRIAS RECOMENDADAS</span>
                    </div>

                    {/* Macro splits custom visual progress bars */}
                    <div className="space-y-2.5 pt-2">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-neutral-300">Proteína (Meta)</span>
                          <span className="text-neon-green font-bold">{finalMetrics.protein}g</span>
                        </div>
                        <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden">
                          <div className="h-full bg-neon-green rounded-full" style={{ width: '38%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-neutral-300">Carboidratos</span>
                          <span className="text-white">{finalMetrics.carbs}g</span>
                        </div>
                        <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden">
                          <div className="h-full bg-white/40 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-neutral-300">Gorduras Saudáveis</span>
                          <span className="text-neutral-400">{finalMetrics.fats}g</span>
                        </div>
                        <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden">
                          <div className="h-full bg-white/10 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Plan blueprint timeline preview */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-4">
                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-neon-green" /> ESTRUTURA METODOLÓGICA (12 SEMANAS)
                    </span>

                    <div className="space-y-3">
                      {planPhases.map((phase, idx) => (
                        <div key={idx} className="flex gap-3 text-left">
                          <div className="font-mono text-xs text-neon-green font-extrabold flex-shrink-0 mt-0.5 bg-neon-green/5 border border-neon-green/20 px-2 py-0.5 rounded">
                            F{idx+1}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block leading-tight">{phase.title} ({phase.phase})</span>
                            <p className="text-[11px] text-neutral-400 mt-0.5 leading-normal">{phase.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Next Steps callout */}
                <div className="p-4 rounded-xl bg-neon-green/5 border border-neon-green/15 flex flex-col sm:flex-row items-center gap-4">
                  <div className="p-3 bg-neon-green/10 rounded-lg text-neon-green flex-shrink-0">
                    <Clock className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <span className="font-display font-semibold text-white block text-sm">BÔNUS EXCLUSIVO: Sessão de Alinhamento Estratégico Reservada</span>
                    <p className="text-[11px] text-neutral-300 leading-normal">
                      Enviamos as fórmulas detalhadas de macronutrientes do seu biotipo para <span className="text-neon-green font-mono font-bold">{answers.email}</span>. Clique abaixo para agendar a sua validação direta de consistência com o Coach e começar sem erros.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    id="cta_result_apply"
                    onClick={() => {
                      onClose();
                      // Smooth scroll to Pricing or bottom
                      document.getElementById('pricing_section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 py-3 px-6 rounded-xl bg-neon-green text-black font-display font-bold text-sm uppercase tracking-wider hover:bg-neon-green/80 hover:shadow-lg hover:shadow-neon-green/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Garantir Vaga na Mentoria <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </button>
                  <button
                    id="cta_result_close"
                    onClick={onClose}
                    className="py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-sm font-mono border border-white/5 transition-all cursor-pointer"
                  >
                    Voltar para a Página
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
