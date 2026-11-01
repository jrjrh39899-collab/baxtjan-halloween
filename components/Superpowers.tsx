"use client";

import { motion } from "framer-motion";

const superpowers = [
  {
    icon: "🪄",
    title: "Объяснение на пальцах",
    subtitle: "Complex Topics Simplified",
    description:
      "Будь то Conditionals, Gerund vs Infinitive или инверсия — на ваших уроках любая запутанная тема за 5 минут превращается в кристально понятную структуру.",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(255,107,43,0.35)]",
  },
  {
    icon: "🛡️",
    title: "Anti-Boredom Shield",
    subtitle: "Never a Dull Moment",
    description:
      "Уснуть или заскучать невозможно в принципе. Уроки проходят динамично, с юмором, жизненными примерами и идеальной атмосферой.",
    color: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(155,92,246,0.35)]",
  },
  {
    icon: "⚡",
    title: "Fluency Generator",
    subtitle: "Confidence Booster",
    description:
      "Снимаете любой страх заговорить на английском. Ошибаться не страшно — страшно не попробовать, и вы заряжаете именно этой смелостью.",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(245,200,66,0.35)]",
  },
  {
    icon: "🎯",
    title: "The Coolest Vibe",
    subtitle: "Teacher & Mentor",
    description:
      "Быть не просто преподавателем по учебнику, а наставником, которого уважают и к которому на занятия идёшь с искренней радостью.",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(52,211,153,0.35)]",
  },
];

export default function Superpowers() {
  return (
    <section className="py-20 px-4 relative max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs uppercase tracking-[0.3em] text-orange-400 font-semibold mb-2"
        >
          Teacher Superpowers
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-cinzel text-glow-gold text-white font-bold"
        >
          Магия преподавания Бахтжана
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-purple-200/80 max-w-xl mx-auto mt-4 text-sm sm:text-base"
        >
          Секретные ингредиенты, благодаря которым каждый урок английского ощущается на вес золота
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {superpowers.map((sp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className={`glass p-6 sm:p-8 rounded-3xl border ${sp.border} bg-gradient-to-br ${sp.color} transition-all duration-300 ${sp.glow}`}
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl p-3 rounded-2xl glass border border-white/10 shrink-0">
                {sp.icon}
              </span>
              <div>
                <div className="text-xs font-mono tracking-wider text-purple-300 uppercase mb-1">
                  {sp.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white mb-2">
                  {sp.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D4C8E8] leading-relaxed">
                  {sp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
