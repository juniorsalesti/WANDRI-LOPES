export interface Program {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  duration: string;
  target: string;
  benefits: string[];
  pricingWeekly: number;
  featured: boolean;
}

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  details: string[];
  metricHeadline: string;
}

export interface TransformationItem {
  id: string;
  name: string;
  age: number;
  duration: string;
  metric: string;
  beforeImg: string;
  afterImg: string;
  beforeValue: string;
  afterValue: string;
  quote: string;
  gender: 'men' | 'women';
}

export interface TimelineItem {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface QuizAnswers {
  gender: 'male' | 'female' | '';
  goal: 'fat-loss' | 'muscle-building' | 'recomp' | '';
  experience: 'beginner' | 'intermediate' | 'advanced' | '';
  weeklyWorkouts: number;
  mainStruggle: string;
  name: string;
  email: string;
}

export interface PremiumCoachData {
  name: string;
  title: string;
  experienceYears: number;
  philosophy: string;
  credentials: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}
