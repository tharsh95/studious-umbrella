"use client";

import { cn } from "@/app/lib/utils";
import { Lock, Zap } from "lucide-react";

interface RoadmapStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  active?: boolean;
  locked?: boolean;
  children?: React.ReactNode;
}

export default function RoadmapStepCard({
  stepNumber,
  title,
  description,
  active,
  locked,
  children,
}: RoadmapStepCardProps) {
  return (
    <div
      className={cn(
        "relative p-4 rounded-2xl border transition-all duration-300 min-h-[400px] flex flex-col",
        active
          ? "bg-white border-primary-blue/20 shadow-card border-l-4 border-l-primary-blue"
          : "bg-gray-100 border-border-light",
        locked && "opacity-70 cursor-not-allowed grayscale-[0.2]",
      )}
    >
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-start">
          <span className="text-xs font-bold text-danger-red uppercase tracking-wider">
            Step {stepNumber}{" "}
            {active && <span className="text-danger-red ml-2">: Critical</span>}
          </span>
          {locked && <Lock className="w-4 h-4 text-text-muted" />}
        </div>
        <h3 className="text-xl font-bold text-text-dark leading-tight">
          {title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>

      <div className="flex-grow">{active && children}</div>

      {active && (
  <div className="flex flex-col items-center">
    
    <button
      className="mt-6 w-full py-4 rounded-xl 
                 bg-gradient-to-r from-blue-400 to-blue-600 
                 text-white font-bold shadow-lg 
                 hover:shadow-primary-blue/30 
                 transition-all hover:-translate-y-0.5 
                 flex items-center justify-center gap-2"
    >
      <span>Start Investing Today</span>

      <span className="py-0.5 px-2 bg-success-green/20 text-success-green rounded text-xs">
        +20 pts
      </span>
    </button>

    <div className="flex items-center justify-center gap-2 mt-3 text-xs text-text-muted">
      <Zap className="w-4 h-4" />
      <span>Express setup: Complete in under 3 minutes</span>
    </div>

  </div>
)}

     
      {stepNumber === 2 && (
  <div>
    <button className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-[#4890E2] to-[#294F7C] text-white font-bold shadow-lg flex items-center justify-center gap-2">
      Begin Investing
      <span className="py-0.5 px-2 bg-success-green/20 text-success-green rounded text-xs">
        +12 pts
      </span>
    </button>

    <div className="flex items-center justify-center gap-2 mt-3 text-xs text-text-muted">
      <Lock className="w-4 h-4" />
      <span>Complete step 1 (critical) to unlock</span>
    </div>
  </div>
)}

      {stepNumber === 3 && (
  <div>
    <button className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-[#4890E2] to-[#294F7C] text-white font-bold shadow-lg flex items-center justify-center gap-2">
      Analyze Mutual Funds
      <span className="py-0.5 px-2 bg-success-green/20 text-success-green rounded text-xs">
        +8 pts
      </span>
    </button>

    <div className="flex items-center justify-center gap-2 mt-3 text-xs text-text-muted">
      <Lock className="w-4 h-4" />
      <span>Complete step 1 (critical) to unlock</span>
    </div>
  </div>
)}

    </div>
  );
}
