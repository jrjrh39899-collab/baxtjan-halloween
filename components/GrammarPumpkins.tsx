"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pumpkins = [
  {
    id: 1,
    title: "Большой Успех",
    badge: "Big Ambitions",
    joke: "«Пусть все Ваши планы и идеи выстреливают на 1000%!»",
    translation: "Хеллоуинские духи сулят мощный прорыв во всех начинаниях и проектах.",
    glowColor: "#FF6B2B",
  },
  {
    id: 2,
    title: "Финансовый Поток",
    badge: "Wealth & Growth",
    joke: "«Пусть кошелёк ломится от приятных сумм, а доходы растут сами собой!»",
    translation: "Лёгких денег, выгодных предложений и жизни в полном кайфе и достатке.",
    glowColor: "#F5C842",
  },
  {
    id: 3,
    title: "Крепкое Здоровье",
    badge: "Peak Energy",
    joke: "«Железного здоровья, вечной бодрости и бесконечного запаса сил!»",
    translation: "Чтобы каждый день начинался с улыбки, а усталость обходила стороной.",
    glowColor: "#9B5CF6",
  },
  {
    id: 4,
    title: "Верные Люди",
    badge: "Inner Circle",
    joke: "«Пусть рядом всегда будут только надёжные, преданные и крутые люди!»",
    translation: "Окружение, с которым можно разделить любой триумф и любую победу.",
    glowColor: "#34D399",
  },
];

export default function GrammarPumpkins() {
  const [activePumpkin, setActivePumpkin] = useState<number>(1);

  return (
    <section className="py-20 px-4 relative max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-amber-400 font-semibold">
          Interactive Pumpkins
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel text-glow-orange text-white font-bold mt-2">
          Тыквы Хеллоуинских Пожеланий 🎃✨
        </h2>
        <p className="text-purple-200/80 max-w-lg mx-auto mt-3 text-sm sm:text-base">
          Нажми на тыкву, чтобы зажечь её и открыть праздничное пожелание для Mr. Baxtjan-а
        </p>
      </div>

      {/* Pumpkins selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
        {pumpkins.map((p) => {
          const isSelected = activePumpkin === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActivePumpkin(p.id)}
              className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl glass transition-all duration-300 text-center relative overflow-hidden flex flex-col items-center cursor-pointer border ${
                isSelected
                  ? "border-orange-500 shadow-[0_0_30px_rgba(255,107,43,0.4)] scale-102 sm:scale-105"
                  : "border-purple-500/20 hover:border-purple-400/40"
              }`}
            >
              {isSelected && (
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{ backgroundColor: p.glowColor }}
                />
              )}
              {/* SVG Glowing Pumpkin */}
              <div className="w-12 h-12 sm:w-20 sm:h-20 mb-2 sm:mb-3 relative">
                <svg
                  viewBox="0 0 100 100"
                  className={`w-full h-full transition-all duration-300 ${
                    isSelected ? "filter drop-shadow-[0_0_12px_#FF6B2B]" : "opacity-75"
                  }`}
                >
                  <path d="M 47 18 Q 48 6 58 10 Q 54 18 50 20 Z" fill="#4E8752" />
                  <ellipse cx="50" cy="58" rx="38" ry="32" fill={isSelected ? "#E65100" : "#7C320A"} />
                  <ellipse cx="36" cy="58" rx="26" ry="30" fill={isSelected ? "#F57C00" : "#8D3B0E"} />
                  <ellipse cx="64" cy="58" rx="26" ry="30" fill={isSelected ? "#F57C00" : "#8D3B0E"} />
                  <ellipse cx="50" cy="58" rx="18" ry="29" fill={isSelected ? "#FFA726" : "#A04512"} />

                  <polygon
                    points="34,48 42,48 38,40"
                    fill={isSelected ? "#FFF3B0" : "#240E04"}
                    className={isSelected ? "animate-pulse" : ""}
                  />
                  <polygon
                    points="66,48 58,48 62,40"
                    fill={isSelected ? "#FFF3B0" : "#240E04"}
                    className={isSelected ? "animate-pulse" : ""}
                  />
                  <polygon
                    points="48,56 52,56 50,51"
                    fill={isSelected ? "#FFF3B0" : "#240E04"}
                  />
                  <path
                    d="M 32 68 Q 40 76 50 74 Q 60 76 68 68 Q 60 71 50 70 Q 40 71 32 68 Z"
                    fill={isSelected ? "#FFF3B0" : "#240E04"}
                  />
                </svg>
              </div>

              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-purple-300 line-clamp-1">
                {p.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Pumpkin Display Card */}
      <AnimatePresence mode="wait">
        {pumpkins
          .filter((p) => p.id === activePumpkin)
          .map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-orange-500/40 text-center relative overflow-hidden shadow-[0_0_40px_rgba(255,107,43,0.2)]"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-orange-300 bg-orange-500/20 border border-orange-500/30 mb-3 sm:mb-4">
                {p.badge}
              </span>
              <p className="text-xl sm:text-3xl font-cormorant italic text-amber-200 font-semibold mb-2 sm:mb-3">
                {p.joke}
              </p>
              <p className="text-xs sm:text-base text-purple-200/90 max-w-xl mx-auto leading-relaxed">
                {p.translation}
              </p>
            </motion.div>
          ))}
      </AnimatePresence>
    </section>
  );
}
