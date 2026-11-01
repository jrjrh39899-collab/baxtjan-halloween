"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-900/30 via-orange-600/20 to-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-purple-600/15 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Floating Halloween particles */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${(i * 19) % 95}%`,
              left: `${(i * 29) % 94}%`,
              width: `${(i % 3) * 3 + 3}px`,
              height: `${(i % 3) * 3 + 3}px`,
              backgroundColor: i % 2 === 0 ? "#FF6B2B" : "#F5C842",
              boxShadow: i % 2 === 0 ? "0 0 10px #FF6B2B" : "0 0 10px #F5C842",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 5) * 0.7,
            }}
          />
        ))}
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 text-orange-300 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_20px_rgba(255,107,43,0.25)]"
      >
        <span className="text-base">🎃</span>
        <span>Spooktacular Halloween Edition 2026</span>
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
        <span className="text-purple-300 font-semibold">C1 Advanced Vibe</span>
      </motion.div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-xs sm:text-sm tracking-[0.35em] text-purple-300 uppercase font-medium mb-3">
          Happy Halloween, Mr. Baxtjan!
        </h2>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight font-cinzel text-glow-orange text-transparent bg-clip-text bg-gradient-to-b from-[#FFF2DE] via-[#FF8A3D] to-[#FF4500] leading-[1.05] mb-4">
          MR. BAXTJAN
        </h1>
        <p className="font-cormorant italic text-2xl sm:text-3xl md:text-4xl text-amber-200/90 font-light mb-6">
          Have a Spooktacular & Legendary Night! 🎃✨
        </p>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-2xl mx-auto text-base sm:text-lg text-[#D8CEE8] leading-relaxed mb-10 font-normal px-2"
      >
        С Хеллоуином, Mr. Baxtjan! Пусть эта волшебная и мистическая ночь принесёт море отличного настроения,
        ярких эмоций и безумного фарта во всех делах! Вы по-настоящему клёвый и харизматичный человек,
        с которым всегда легко и приятно. Желаю огненного праздника, мощного кайфа и только приятных сюрпризов!
      </motion.p>

      {/* Stat Pills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl w-full"
      >
        <div className="glass p-4 rounded-2xl border border-purple-500/20 text-center hover:border-orange-500/40 transition-colors">
          <div className="flex items-center justify-center text-orange-400 mb-1 text-xl">
            🎃
          </div>
          <div className="text-xl sm:text-2xl font-bold font-cinzel text-white">100%</div>
          <div className="text-xs text-purple-200/80">Праздничный вайб</div>
        </div>

        <div className="glass p-4 rounded-2xl border border-purple-500/20 text-center hover:border-orange-500/40 transition-colors">
          <div className="flex items-center justify-center text-amber-400 mb-1 text-xl">
            🔥
          </div>
          <div className="text-xl sm:text-2xl font-bold font-cinzel text-white">C1 Level</div>
          <div className="text-xs text-purple-200/80">Advanced Mindset</div>
        </div>

        <div className="glass p-4 rounded-2xl border border-purple-500/20 text-center hover:border-orange-500/40 transition-colors">
          <div className="flex items-center justify-center text-purple-400 mb-1 text-xl">
            ⚡
          </div>
          <div className="text-xl sm:text-2xl font-bold font-cinzel text-white">24 / 7</div>
          <div className="text-xs text-purple-200/80">Неиссякаемая энергия</div>
        </div>

        <div className="glass p-4 rounded-2xl border border-purple-500/20 text-center hover:border-orange-500/40 transition-colors">
          <div className="flex items-center justify-center text-emerald-400 mb-1 text-xl">
            ⭐
          </div>
          <div className="text-xl sm:text-2xl font-bold font-cinzel text-white">Top 1</div>
          <div className="text-xs text-purple-200/80">Клёвый человек</div>
        </div>
      </motion.div>
    </section>
  );
}
