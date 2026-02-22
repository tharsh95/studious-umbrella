"use client";

import { motion } from "framer-motion";

interface WealthScoreGaugeProps {
  score: number;
  percentile: number;
}

export default function WealthScoreGauge({
  score,
  percentile,
}: WealthScoreGaugeProps) {
  const strokeWidth = 26;
  const arcRadius = 120;
  const bgRadius = 150;
  const centerX = 150;
  const centerY = 175;

  return (
    <div className="flex flex-col items-center p-6  ">
      <div className="relative w-[300px] h-[260px] overflow-hidden">
        <svg
          height="300"
          width="300"
          viewBox="0 0 300 300"
          className="absolute top-0 left-0"
        >
          <defs>
            <linearGradient
              id="wealthGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
            <filter
              id="subtleShadow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.08" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* White Semi-circular Background */}
          <path
            d={`
    M ${centerX - bgRadius} ${centerY}
    A ${bgRadius} ${bgRadius} 0 0 1 ${centerX + bgRadius} ${centerY}
    L ${centerX + bgRadius} ${centerY + 30}
    L ${centerX - bgRadius} ${centerY + 30}
    Z
  `}
            fill="white"
            filter="url(#subtleShadow)"
          />

          {/* Background Arc (Gray Track) */}
          <path
            d={`M ${centerX - arcRadius} ${centerY} A ${arcRadius} ${arcRadius} 0 0 1 ${centerX + arcRadius} ${centerY}`}
            fill="none"
            stroke="#F1F5F9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* Progress Arc (Animated) */}
          <motion.path
            d={`M ${centerX - arcRadius} ${centerY} A ${arcRadius} ${arcRadius} 0 0 1 ${centerX + arcRadius} ${centerY}`}
            fill="none"
            stroke="url(#wealthGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: score / 100 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          />
        </svg>

        {/* Score in Center */}
        <div className="absolute top-[100px] left-0 right-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-6xl font-black text-slate-800"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {score}
          </motion.span>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] mt-2">
            Wealth Score
          </p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-slate-500 font-medium text-sm">
          Better than{" "}
          <span className="font-bold text-blue-600"> {percentile}% </span> of
          similar profiles
        </p>
      </div>
    </div>
  );
}
