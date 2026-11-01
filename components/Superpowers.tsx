"use client";

import { motion } from "framer-motion";

const traits = [
  {
    icon: "🔥",
    title: "Мощная Харизма",
    subtitle: "Natural Leader",
    description:
      "Умение создавать вокруг себя лёгкую, уверенную и классную атмосферу. С Вами всегда комфортно, интересно и приятно общаться.",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(255,107,43,0.35)]",
  },
  {
    icon: "🧠",
    title: "Острый Ум & C1 Advanced",
    subtitle: "Top Tier Intellect",
    description:
      "Широкий кругозор, безупречный стиль мышления и способность находить простые и элегантные решения в любых жизненных ситуациях.",
    color: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(155,92,246,0.35)]",
  },
  {
    icon: "⚡",
    title: "Бешеный Драйв",
    subtitle: "High Energy Vibe",
    description:
      "Никакой осенней хандры и суеты. Только движение вперёд, уверенность в своих силах и позитивный заряд на максимум.",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(245,200,66,0.35)]",
  },
  {
    icon: "👑",
    title: "Свой в Доску & Респект",
    subtitle: "Pure Character",
    description:
      "Искренность, отличное чувство юмора и человечность, за которые Вас уважают, ценят и всегда рады видеть.",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(52,211,153,0.35)]",
  },
];

export default function Superpowers() {
  return (
    <section className="py-14 sm:py-20 px-4 relative max-w-6xl mx-auto">
      <div className="text-center mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-400 font-semibold mb-2"
        >
          Special Edition
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-cinzel text-glow-gold text-white font-bold"
        >
          Почему Mr. Baxtjan — Легенда 🪄
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-purple-200/80 max-w-xl mx-auto mt-3 sm:mt-4 text-xs sm:text-base px-2"
        >
          Качества, за которые Вас искренне уважают и ценят
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {traits.map((trait, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className={`glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl border ${trait.border} bg-gradient-to-br ${trait.color} transition-all duration-300 ${trait.glow}`}
          >
            <div className="flex items-start gap-3.5 sm:gap-4">
              <span className="text-3xl sm:text-4xl p-2.5 sm:p-3 rounded-xl sm:rounded-2xl glass border border-white/10 shrink-0">
                {trait.icon}
              </span>
              <div>
                <div className="text-[10px] sm:text-xs font-mono tracking-wider text-purple-300 uppercase mb-1">
                  {trait.subtitle}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold font-cinzel text-white mb-1.5 sm:mb-2">
                  {trait.title}
                </h3>
                <p className="text-xs sm:text-base text-[#D4C8E8] leading-relaxed">
                  {trait.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
