"use client";

import { motion } from "framer-motion";

const wishes = [
  {
    icon: "🚀",
    title: "Больших Достижений",
    text: "Пусть любые задуманные цели покоряются легко и непринуждённо, а каждый новый шаг открывает ещё более крутые перспективы!",
  },
  {
    icon: "🔥",
    title: "Огненного Вайба и Драйва",
    text: "Крепкого здоровья, неиссякаемого оптимизма, отличных людей вокруг и энергии, чтобы брать от этой жизни всё самое лучшее!",
  },
  {
    icon: "✨",
    title: "Кайфа и Удовольствия",
    text: "Пусть каждый день приносит радость, интересные события, душевные посиделки и поводы гордиться собой!",
  },
];

export default function WishesSection() {
  return (
    <section className="py-20 px-4 relative max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs uppercase font-mono tracking-[0.3em] text-purple-400 font-semibold">
          From the heart
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel text-glow-purple text-white font-bold mt-2">
          Тёплые Пожелания в Ночь Хеллоуина 🕯️
        </h2>
        <p className="text-purple-200/80 max-w-xl mx-auto mt-3 text-sm sm:text-base">
          Бахтжану — человеку с большим сердцем, острым умом и крутой энергетикой
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wishes.map((w, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="glass p-6 sm:p-8 rounded-3xl border border-purple-500/30 hover:border-amber-400/50 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="text-4xl mb-4 p-3 w-fit rounded-2xl glass border border-purple-400/20 group-hover:scale-110 transition-transform">
              {w.icon}
            </div>
            <h3 className="text-xl font-bold font-cinzel text-amber-200 mb-2">
              {w.title}
            </h3>
            <p className="text-sm text-purple-200/90 leading-relaxed">
              {w.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
