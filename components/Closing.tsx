"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Closing() {
  const [lit, setLit] = useState(true);

  return (
    <footer className="py-24 px-4 text-center relative overflow-hidden border-t border-purple-500/10">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Candle with flame */}
        <div className="relative mb-6 cursor-pointer" onClick={() => setLit(!lit)}>
          {/* Flame */}
          {lit && (
            <div className="candle-flame mx-auto mb-1 relative">
              <div className="w-4 h-7 bg-gradient-to-t from-orange-500 via-amber-300 to-white rounded-full mx-auto animate-pulse filter blur-[0.6px] shadow-[0_0_20px_#FFA726,0_0_40px_#FF6B2B]" />
            </div>
          )}
          {/* Candle Body */}
          <div className="w-8 h-20 bg-gradient-to-b from-purple-200 to-purple-400 rounded-t-sm mx-auto shadow-inner relative border border-white/20">
            <div className="absolute top-0 inset-x-0 h-1 bg-purple-300 rounded-t-sm" />
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-neutral-800" />
          </div>
          {/* Candle Stand */}
          <div className="w-20 h-3 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 rounded-full mx-auto -mt-1 shadow-md" />
        </div>

        <button
          onClick={() => setLit(!lit)}
          className="text-xs uppercase tracking-widest text-amber-300/80 hover:text-amber-200 transition-colors mb-6 cursor-pointer"
        >
          {lit ? "🕯️ Нажми на свечу, чтобы задуть" : "✨ Нажми, чтобы зажечь свечу"}
        </button>

        <h3 className="text-3xl sm:text-4xl font-cinzel text-glow-orange text-white font-bold mb-4">
          Happy Halloween, Mr. Baxtjan! 🎃
        </h3>
        <p className="text-sm sm:text-base text-purple-200/80 font-cormorant italic max-w-md mx-auto mb-8">
          «Stay legendary, keep shining, and enjoy every single moment!»
        </p>

        <div className="text-xs text-purple-400/60 font-mono tracking-wider">
          Made with respect & warm vibes • Halloween 2026
        </div>
      </div>
    </footer>
  );
}
