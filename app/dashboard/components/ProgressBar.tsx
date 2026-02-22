"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
}

export default function ProgressBar({ value, max, className }: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  // Color logic based on value:
  // 0-7 = red gradient
  // 8-14 = orange gradient
  // 15-20 = green gradient
  const getGradientClass = () => {
    if (value <= 7) return "from-danger-red to-warning-orange";
    if (value <= 14) return "from-warning-orange to-success-green";
    return "from-success-green to-success-green"; // Full green for high values
  };

  // Actually, the figma shows a smooth gradient for all bars.
  // In the screenshot, bars like Liquidity (11/20) have a red to orange gradient.
  // Health Insurance (20/20) has a red to orange to green gradient.
  // We can use a fixed gradient background if it fits the design.
  
  return (
    <div className={cn("h-2.5 w-full bg-border-light rounded-full overflow-hidden", className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "h-full rounded-full bg-gradient-to-r",
          getGradientClass()
        )}
      />
    </div>
  );
}
