"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/lib/language";
import { LanguageToggle } from "@/components/language-toggle";
import {
  Dumbbell,
  Flame,
  Heart,
  Menu,
  Star,
  Target,
  Trophy,
  Users,
  X,
  Zap,
  Check,
  ArrowRight,
  Calendar,
  Clock,
  TrendingDown,
  Send,
  Play,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    goal: "",
    message: "",
  });
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const programs = [
    {
      title: "AL-ASHIDDA",
      subtitleKey: "features.program",
      price: "$97",
      period: "/mes",
      features: [
        "features.feature.1",
        "features.feature.2",
        "features.feature.3",
        "features.feature.4",
        "features.feature.5",
        "features.feature.6",
      ],
      popular: true,
      gradient: "from-green-500/20 to-emerald-500/10",
    },
    {
      title: "TRANSFORMACIÓN",
      subtitleKey: "programs.90days",
      price: "$247",
      period: "",
      features: [
        "programs.90days.feature.1",
        "programs.90days.feature.2",
        "programs.90days.feature.3",
        "programs.90days.feature.4",
        "programs.90days.feature.5",
        "programs.90days.feature.6",
      ],
      popular: false,
      gradient: "from-amber-500/20 to-orange-500/10",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed M.",
      age: 32,
      result: "-15kg grasa",
      time: "12 semanas",
      quote:
        "Después de años luchando solo, finalmente encontré un programa que respeta mis valores y me da resultados reales. Al Qaswara es diferente.",
      initials: "AM",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "Karim B.",
      age: 38,
      result: "+8kg músculo",
      time: "16 semanas",
      quote:
        "No solo te da ejercicios, te enseña a vivir fitness de forma sostenible según la Sunnah. Mi familia está orgullosa de mí.",
      initials: "KB",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      name: "Omar S.",
      age: 29,
      result: "-22kg total",
      time: "20 semanas",
      quote:
        "Mi esposa no me reconocía después de 3 meses. El programa AL-ASHIDDA cambió completamente mi vida.",
      initials: "OS",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const stats = [
    { value: "250+", labelKey: "stats.transformed", icon: Trophy, delay: 0 },
    { value: "97%", labelKey: "stats.satisfaction", icon: Heart, delay: 0.1 },
    { value: "6+", labelKey: "stats.experience", icon: Calendar, delay: 0.2 },
    { value: "25-45", labelKey: "stats.age", icon: Users, delay: 0.3 },
  ];

  const problems = [
    "problem.1",
    "problem.2",
    "problem.3",
    "problem.4",
    "problem.5",
  ];

  const features = [
    {
      icon: Dumbbell,
      titleKey: "features.1.title",
      descKey: "features.1.desc",
      gradient: "from-green-500/20 to-green-600/10",
    },
    {
      icon: Zap,
      titleKey: "features.2.title",
      descKey: "features.2.desc",
      gradient: "from-amber-500/20 to-amber-600/10",
    },
    {
      icon: Users,
      titleKey: "features.3.title",
      descKey: "features.3.desc",
      gradient: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: Target,
      titleKey: "features.4.title",
      descKey: "features.4.desc",
      gradient: "from-purple-500/20 to-purple-600/10",
    },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Image src="/logo.jpg" alt="Al Qaswara" width={40} height={40} className="rounded-full" />
              <span className="font-bold text-xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                AL-QASWARA
              </span>
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              <motion.a
                href="#programa"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-sm text-muted-foreground hover:text-green-400 transition-colors"
              >
                {t("nav.programa")}
              </motion.a>
              <motion.a
                href="#resultados"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-muted-foreground hover:text-green-400 transition-colors"
              >
                {t("nav.resultados")}
              </motion.a>
              <motion.a
                href="#sobre-mi"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-muted-foreground hover:text-green-400 transition-colors"
              >
                {t("nav.sobre-mi")}
              </motion.a>
              <LanguageToggle />
              <motion.a
                href="#apuntate"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-black font-medium transition-all hover:shadow-lg hover:shadow-green-500/25"
              >
                {t("nav.apuntate")}
              </motion.a>
            </div>
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card border-t border-border p-4"
            >
              <div className="flex flex-col gap-4">
                {["Programa", "Resultados", "Sobre Mí"].map((item) => (
                  <a
                    key={item}
                    href={item === "Programa" ? "#programa" : item === "Resultados" ? "#resultados" : "#sobre-mi"}
                    className="text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                  <Flame className="w-4 h-4" />
                  {t("hero.badge")}
                </span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {t("hero.title1")}
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {t("hero.title2")}
                </span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
              >
                {t("hero.subtitle")}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#apuntate"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-green-500/30 transition-all"
                >
                  {t("hero.cta1")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#programa"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-xl border border-border hover:border-green-500/50 text-lg flex items-center justify-center gap-2 transition-all hover:bg-green-500/5"
                >
                  <Play className="w-5 h-5" />
                  {t("hero.cta2")}
                </motion.a>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 border-2 border-background flex items-center justify-center text-sm font-bold text-black"
                    >
                      {String.fromCharCode(64 + i)}
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-1">
                    {t("hero.reviews")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-transparent rounded-3xl" />
                <div className="absolute inset-4 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl backdrop-blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-center p-8"
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="mb-4"
                    >
                      <Image src="/logo.jpg" alt="Al Qaswara" width={120} height={120} className="rounded-full" />
                    </motion.div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                      AL-QASWARA
                    </div>
                    <div className="text-muted-foreground">Muslim Fitness Coach</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-green-500/30 transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all"
                >
                  <stat.icon className="w-6 h-6 text-green-400" />
                </motion.div>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{t(stat.labelKey)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
<h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {t("problem.title")}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("problem.subtitle")}
              </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent border border-red-500/20 hover:border-red-500/40 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-sm">{t(problem)}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
<p className="text-lg font-medium bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {t("problem.solution")}
              </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {t("features.title")}
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  {t("features.title2")}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("features.subtitle")}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} border border-green-500/10 hover:border-green-500/30 transition-all`}
                  >
                    <item.icon className="w-6 h-6 text-green-400 mb-2" />
                    <h3 className="font-semibold mb-1">{t(item.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30 p-8 hover:shadow-xl hover:shadow-green-500/10 transition-all"
              >
                <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl rounded-tr-3xl bg-green-500 text-black text-sm font-medium">
                  {t("features.popular")}
                </div>
                <div className="pt-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                    {t("features.badge")}
                  </div>
                  <p className="text-muted-foreground mb-6">{t("features.program")}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">$97</span>
                    <span className="text-muted-foreground">/mes</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {[
                      "features.feature.1",
                      "features.feature.2",
                      "features.feature.3",
                      "features.feature.4",
                      "features.feature.5",
                      "features.feature.6",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-sm">{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="#apuntate"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold text-center hover:shadow-xl hover:shadow-green-500/30 transition-all"
                  >
                    {t("features.cta")}
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programa" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
<h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {t("programs.title")}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("programs.subtitle")}
              </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`relative rounded-3xl bg-gradient-to-br ${program.gradient} border ${
                    program.popular ? "border-green-500/50" : "border-border"
                  } p-8 hover:shadow-xl transition-all h-full`}
                >
                  {program.popular && (
                    <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl rounded-tr-3xl bg-green-500 text-black text-sm font-medium">
                      {t("programs.recommended")}
                    </div>
                  )}
                  <div className="pt-4">
                    <div className="text-2xl font-bold mb-2">{program.title}</div>
                    <p className="text-muted-foreground mb-6">{t(program.subtitleKey)}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{program.price}</span>
                      <span className="text-muted-foreground">{program.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {program.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-sm">{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href="#apuntate"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${
                        program.popular
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-black hover:shadow-lg hover:shadow-green-500/30"
                          : "border border-border hover:border-green-500/50"
                      }`}
                    >
                      {t("programs.choose")}
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="resultados" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
<h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {t("testimonials.title")}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("testimonials.subtitle")}
              </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border p-6 hover:border-green-500/30 transition-all"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm mb-6 italic text-muted-foreground">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-lg font-bold text-black`}
                      >
                        {testimonial.initials}
                      </motion.div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.age} años
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4 border-t border-border">
                      <div className="text-center flex-1">
                        <TrendingDown className="w-5 h-5 mx-auto mb-1 text-green-400" />
                        <p className="text-sm font-semibold">{testimonial.result}</p>
                      </div>
                      <div className="text-center flex-1">
                        <Clock className="w-5 h-5 mx-auto mb-1 text-green-400" />
                        <p className="text-sm font-semibold">{testimonial.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Coach Section */}
      <section id="sobre-mi" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="aspect-square max-w-md mx-auto bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-3xl flex items-center justify-center relative"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="mb-4"
                  >
                    <Image src="/logo.jpg" alt="Al Qaswara" width={120} height={120} className="rounded-full" />
                  </motion.div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Al Qaswara
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {t("about.title")}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("about.1")}
              </p>
              <p className="text-muted-foreground mb-6">
                {t("about.2")}
              </p>
              <p className="text-muted-foreground mb-8">
                {t("about.3")}
              </p>
              <motion.a
                href="https://instagram.com/al_qaswara"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-green-500/50 transition-all"
              >
                <Send className="w-5 h-5" />
                {t("about.follow")}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apuntate" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30 p-8 hover:shadow-xl hover:shadow-green-500/10 transition-all"
            >
              <div className="text-center pt-4">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-2"
                >
                  {t("cta.title")}
                </motion.h3>
                <p className="text-muted-foreground mb-8">
                  {t("cta.subtitle")}
                </p>
              </div>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <Check className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{t("success.title")}</h3>
                  <p className="text-muted-foreground">
                    {t("success.message")}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm text-muted-foreground">
                        {t("cta.name")}
                      </Label>
                      <Input
                        id="name"
                        placeholder={t("cta.name.placeholder")}
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-card border-border rounded-xl focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm text-muted-foreground">
                        {t("cta.email")}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("cta.email.placeholder")}
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-card border-border rounded-xl focus:border-green-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-sm text-muted-foreground">
                      {t("cta.whatsapp")}
                    </Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder={t("cta.whatsapp.placeholder")}
                      required
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="bg-card border-border rounded-xl focus:border-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goal" className="text-sm text-muted-foreground">
                      {t("cta.goal")}
                    </Label>
                    <Textarea
                      id="goal"
                      placeholder={t("cta.goal.placeholder")}
                      required
                      value={formData.goal}
                      onChange={(e) =>
                        setFormData({ ...formData, goal: e.target.value })
                      }
                      className="bg-card border-border rounded-xl focus:border-green-500 min-h-[100px]"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-black font-semibold text-lg hover:shadow-xl hover:shadow-green-500/30 transition-all"
                  >
                    {t("cta.submit")}
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </motion.button>
                  <p className="text-xs text-center text-muted-foreground">
                    {t("cta.disclaimer")}
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.jpg" alt="Al Qaswara" width={40} height={40} className="rounded-full" />
                <span className="font-bold text-xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  AL-QASWARA
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("footer.copyright")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  { key: "footer.programa", href: "#programa" },
                  { key: "footer.results", href: "#resultados" },
                  { key: "footer.about", href: "#sobre-mi" },
                  { key: "footer.signup", href: "#apuntate" },
                ].map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className="hover:text-green-400 transition-colors"
                    >
                      {t(item.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t("footer.follow")}</h4>
              <motion.a
                href="https://instagram.com/al_qaswara"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-border hover:border-green-500/50 transition-all"
              >
                <Send className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 Al Qaswara. {t("footer.rights")}</p>
            <p className="mt-2 text-xs">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}