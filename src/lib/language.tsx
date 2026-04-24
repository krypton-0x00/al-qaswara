"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    setLanguage(localStorage.getItem("language") as Language || "es");
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    loadTranslations(language);
  }, [language]);

  const loadTranslations = async (lang: Language) => {
    const es = {
      // Navigation
      "nav.programa": "Programa",
      "nav.resultados": "Resultados",
      "nav.sobre-mi": "Sobre Mí",
      "nav.apuntate": "Apúntate",
      
      // Hero
      "hero.badge": "Programa AL-ASHIDDA",
      "hero.title1": "Cuerpo Fuerte.",
      "hero.title2": "Fe Firme.",
      "hero.subtitle": "Transforma tu cuerpo y tu Iman. Pierde barriga, gana músculo y construye disciplina — sin comprometer tus valores.",
      "hero.cta1": "Empieza Tu Transformación",
      "hero.cta2": "Ver Programa",
      "hero.reviews": "250+ hombres transformados",
      
      // Stats
      "stats.transformed": "Transformados",
      "stats.satisfaction": "Satisfacción",
      "stats.experience": "Años experiencia",
      "stats.age": "Edad promedio",
      
      // Problem
      "problem.title": "¿Te Identificas?",
      "problem.subtitle": "Como hombre musulmán de 25-45 años, quizás hayas intentado de todo pero nada funciona...",
      "problem.1": "No sabes por dónde empezar sin conocimiento de gimnasio",
      "problem.2": "Dietas que no funcionan con comida halal",
      "problem.3": "Falta de motivación y constancia",
      "problem.4": "Sientes que el fitness es solo para ciertos tipos",
      "problem.5": "No encajas en gyms convencionales",
      "problem.solution": "Existe una mejor manera...",
      
      // Features
      "features.title": "El Programa ",
      "features.title2": "AL-ASHIDDA",
      "features.subtitle": "Un sistema probado diseñado específicamente para hombres muslims que quieren transformar su cuerpo sin sacrificar su fe.",
      "features.1.title": "Entrenamiento Efectivo",
      "features.1.desc": "Ejercicios adaptados que puedes hacer en casa o gym",
      "features.2.title": "Nutrición Halal",
      "features.2.desc": "Planes de comida que respetan tu dieta islámica",
      "features.3.title": "Comunidad de Apoyo",
      "features.3.desc": "Grupo privado de WhatsApp con hombres como tú",
      "features.4.title": "Seguimiento Personal",
      "features.4.desc": "Check-ins semanales para mantenerte accountable",
      "features.cta": "Comenzar Ahora",
      "features.popular": "Más Popular",
      "features.badge": "AL-ASHIDDA",
      "features.program": "Programa Completo",
      "features.feature.1": "Plan de entrenamiento personalizado",
      "features.feature.2": "Plan nutricional halal",
      "features.feature.3": "Seguimiento semanal",
      "features.feature.4": "Grupo de apoyo WhatsApp",
      "features.feature.5": "Videos de ejercicios",
      "features.feature.6": "Soporte directo 24/7",
      
      // Programs
      "programs.title": "Elige Tu Camino",
      "programs.subtitle": "Dos programas diseñados para diferentes niveles de compromiso. Todos incluyen acceso a la comunidad AL-ASHIDDA.",
      "programs.recommended": "Recomendado",
      "programs.90days": "90 Días Intensivo",
      "programs.90days.feature.1": "Todo lo del programa AL-ASHIDDA",
      "programs.90days.feature.2": "Transformación completa en 90 días",
      "programs.90days.feature.3": "3 sesiones de videollamada",
      "programs.90days.feature.4": "Plan de suplementos halal",
      "programs.90days.feature.5": "Acceso a comunidad VIP",
      "programs.90days.feature.6": "Garantía de resultados",
      "programs.choose": "Elegir Este Plan",
      
      // Testimonials
      "testimonials.title": "Resultados Reales",
      "testimonials.subtitle": "Hombres como tú que decidieron transformar sus vidas con el programa AL-ASHIDDA.",
      
      // About
      "about.title": "Sobre Mí",
      "about.1": "Soy Coach Al Qaswara — entrenador de fitness especializado en ayudar a hombres muslims a alcanzar su mejor versión física y espiritual.",
      "about.2": "Después de años de experiencia en gyms convencionales y años de estudiar el Quran y la Sunnah, desarrollé el método AL-ASHIDDA — un programa que combina entrenamiento efectivo con principios islámicos.",
      "about.3": "Mi misión es simple: ayudarte a construir un cuerpo fuerte que honre a Allah, te haga merecedor del respeto de tu familia y comunidad, y te prepare para las responsabilidades de la vida.",
      "about.follow": "@al_qaswara",
      
      // CTA
      "cta.title": "¿Listo Para Transformarte?",
      "cta.subtitle": "Completa el formulario y me pondré en contacto contigo en menos de 24 horas para discutir tu plan de transformación.",
      "cta.name": "Nombre Completo",
      "cta.name.placeholder": "Tu nombre",
      "cta.email": "Email",
      "cta.email.placeholder": "tu@email.com",
      "cta.whatsapp": "WhatsApp",
      "cta.whatsapp.placeholder": "+34 600 000 000",
      "cta.goal": "¿Cuál es tu objetivo principal?",
      "cta.goal.placeholder": "Ej: Quiero perder 15kg de grasa y ganar masa muscular para ser un mejor ejemplo para mis hijos...",
      "cta.submit": "Enviar Solicitud",
      "cta.disclaimer": "Al enviar este formulario, aceptas que me contacte contigo por WhatsApp o email para discutir tu programa de transformación.",
      "cta.success.title": "¡Solicitud Enviada!",
      "cta.success.message": "Te contactaré por WhatsApp lo antes posible. İnşallah, juntos lograremos tu transformación.",
      
      // Footer
      "footer.programa": "Programa AL-ASHIDDA",
      "footer.results": "Resultados",
      "footer.about": "Sobre Mí",
      "footer.signup": "Apúntate",
      "footer.follow": "Sígueme",
      "footer.copyright": "Cuerpo fuerte y una fe firme. 🕌",
      "footer.rights": "Todos los derechos reservados.",
      
      // Form success
      "success.title": "¡Solicitud Enviada!",
      "success.message": "Te contactaré por WhatsApp lo antes posible. İnşallah, juntos lograremos tu transformación.",
    };

    const en = {
      // Navigation
      "nav.programa": "Program",
      "nav.resultados": "Results",
      "nav.sobre-mi": "About Me",
      "nav.apuntate": "Sign Up",
      
      // Hero
      "hero.badge": "AL-ASHIDDA Program",
      "hero.title1": "Strong Body.",
      "hero.title2": "Firm Faith.",
      "hero.subtitle": "Transform your body and your Iman. Lose belly fat, gain muscle and build discipline — without compromising your values.",
      "hero.cta1": "Start Your Transformation",
      "hero.cta2": "View Program",
      "hero.reviews": "250+ men transformed",
      
      // Stats
      "stats.transformed": "Transformed",
      "stats.satisfaction": "Satisfaction",
      "stats.experience": "Years experience",
      "stats.age": "Average age",
      
      // Problem
      "problem.title": "Does This Sound Familiar?",
      "problem.subtitle": "As a Muslim man aged 25-45, maybe you've tried everything but nothing works...",
      "problem.1": "Don't know where to start without gym knowledge",
      "problem.2": "Diets that don't work with halal food",
      "problem.3": "Lack of motivation and consistency",
      "problem.4": "Feel like fitness is only for certain types",
      "problem.5": "Don't fit in conventional gyms",
      "problem.solution": "There's a better way...",
      
      // Features
      "features.title": "The ",
      "features.title2": "AL-ASHIDDA",
      "features.subtitle": "A proven system designed specifically for Muslim men who want to transform their body without sacrificing their faith.",
      "features.1.title": "Effective Training",
      "features.1.desc": "Exercises adapted that you can do at home or gym",
      "features.2.title": "Halal Nutrition",
      "features.2.desc": "Meal plans that respect your Islamic diet",
      "features.3.title": "Support Community",
      "features.3.desc": "Private WhatsApp group with men like you",
      "features.4.title": "Personal Tracking",
      "features.4.desc": "Weekly check-ins to keep you accountable",
      "features.cta": "Start Now",
      "features.popular": "Most Popular",
      "features.badge": "AL-ASHIDDA",
      "features.program": "Complete Program",
      "features.feature.1": "Personalized training plan",
      "features.feature.2": "Halal nutrition plan",
      "features.feature.3": "Weekly follow-up",
      "features.feature.4": "WhatsApp support group",
      "features.feature.5": "Exercise videos",
      "features.feature.6": "24/7 direct support",
      
      // Programs
      "programs.title": "Choose Your Path",
      "programs.subtitle": "Two programs designed for different commitment levels. All include access to the AL-ASHIDDA community.",
      "programs.recommended": "Recommended",
      "programs.90days": "90 Days Intensive",
      "programs.90days.feature.1": "Everything in AL-ASHIDDA program",
      "programs.90days.feature.2": "Complete transformation in 90 days",
      "programs.90days.feature.3": "3 video call sessions",
      "programs.90days.feature.4": "Halal supplements plan",
      "programs.90days.feature.5": "VIP community access",
      "programs.90days.feature.6": "Results guarantee",
      "programs.choose": "Choose This Plan",
      
      // Testimonials
      "testimonials.title": "Real Results",
      "testimonials.subtitle": "Men like you who decided to transform their lives with the AL-ASHIDDA program.",
      
      // About
      "about.title": "About Me",
      "about.1": "I'm Coach Al Qaswara — a fitness trainer specialized in helping Muslim men reach their best physical and spiritual version.",
      "about.2": "After years of experience in conventional gyms and years of studying the Quran and Sunnah, I developed the AL-ASHIDDA method — a program that combines effective training with Islamic principles.",
      "about.3": "My mission is simple: help you build a strong body that honors Allah, makes you worthy of your family and community's respect, and prepares you for life's responsibilities.",
      "about.follow": "@al_qaswara",
      
      // CTA
      "cta.title": "Ready To Transform?",
      "cta.subtitle": "Fill out the form and I'll contact you within 24 hours to discuss your transformation plan.",
      "cta.name": "Full Name",
      "cta.name.placeholder": "Your name",
      "cta.email": "Email",
      "cta.email.placeholder": "your@email.com",
      "cta.whatsapp": "WhatsApp",
      "cta.whatsapp.placeholder": "+34 600 000 000",
      "cta.goal": "What is your main goal?",
      "cta.goal.placeholder": "Ex: I want to lose 15kg of fat and gain muscle to be a better example for my kids...",
      "cta.submit": "Submit Request",
      "cta.disclaimer": "By submitting this form, you agree to be contacted by WhatsApp or email to discuss your transformation program.",
      "cta.success.title": "Request Sent!",
      "cta.success.message": "I'll contact you by WhatsApp as soon as possible. İnşallah, together we'll achieve your transformation.",
      
      // Footer
      "footer.programa": "AL-ASHIDDA Program",
      "footer.results": "Results",
      "footer.about": "About Me",
      "footer.signup": "Sign Up",
      "footer.follow": "Follow Me",
      "footer.copyright": "Strong body and firm faith. 🕌",
      "footer.rights": "All rights reserved.",
      
      // Form success
      "success.title": "Request Sent!",
      "success.message": "I'll contact you by WhatsApp as soon as possible. İnşallah, together we'll achieve your transformation.",
    };

    setTranslations(lang === "es" ? es : en);
  };

  const t = (key: string) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}