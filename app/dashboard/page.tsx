"use client";

import Image from "next/image";
import WealthScoreGauge from "./components/WealthScoreGauge";
import ScoreBreakdown from "./components/ScoreBreakdown";
import Roadmap from "./components/Roadmap";
import { BadgeCheck } from "lucide-react";

const userData = {
  score: 43,
  percentile: 46,
  breakdown: {
    emergency: 0,
    liquidity: 11,
    investments: 20,
    healthInsurance: 20,
    lifeInsurance: 7,
    savings: 16,
  },
};

export default function DashboardPage() {
  const currentAge = 65;
  const potentialAge = 38;
  const difference = currentAge - potentialAge;

  return (
    <main className="min-h-screen bg-bg-light p-4 md:p-8 lg:p-12  font-inter">\
    <div className="flex justify-center">
        <Image
                  className="dark:invert"
                  src="/wealthup.svg"
                  alt="Next.js logo"
                  width={100}
                  height={20}
                  priority
                />
    </div>
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl text-text-dark">
              Good Morning,{" "}
              <span className="font-semibold text-primary-blue">
                Ankit!
              </span>
            </h1>
            <div>
                <p>At <span className="font-semibold text-primary-blue">28</span>, your income is strong, but your wealth efficiency is lagging. </p>
            </div>

          </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500 border border-border-light rounded-full w-fit">
              <BadgeCheck className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold text-white">
                Verified Analysis
              </span>
            </div>
        </div>

        {/* Wealth Score + Right Section */}
      {/* Top Unified Card */}
<div className="bg-gradient-to-r from-red-50 via-white to-white 
                border border-border-light 
                rounded-3xl p-2 
                shadow-[0_0_25px_rgba(59,130,246,0.45)]">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

    {/* LEFT - Gauge */}
    <div className="lg:col-span-4 flex flex-col justify-center">
      <WealthScoreGauge
        score={userData.score}
        percentile={userData.percentile}
      />
    </div>

    {/* RIGHT - Financial Independence */}
    <div className="lg:col-span-8">

      <h3 className="text-lg font-semibold text-text-dark mb-6">
        Financial independence age
      </h3>

      <div className="relative flex items-center ">

        {/* Left Card */}
        <div className="flex-1 bg-gray-50 rounded-xl p-6 text-center">
          <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
            Current Trajectory
          </p>

          <p className="text-4xl font-bold text-text-dark mt-3">
            {currentAge}
          </p>

          <p className="text-xs text-text-muted mt-2">
            Based on current savings you have
          </p>
        </div>

        {/* Right Card */}
        <div className="flex-1 bg-blue-50 border-2 border-primary-blue rounded-xl p-6 text-center">
          <p className="text-xs font-semibold text-primary-blue uppercase tracking-wider">
            Your Potential
          </p>

          <p className="text-4xl font-bold text-primary-blue mt-3">
            {potentialAge}
          </p>

          <p className="text-xs text-text-muted mt-2">
            Based on optimal savings & investments
          </p>
        </div>

        {/* Overlapping Arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10">
          <div
            className="bg-success-green text-white text-sm font-semibold 
                       px-6 py-2 shadow-md whitespace-nowrap"
            style={{
              clipPath:
                "polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%)",
              borderTopLeftRadius: "12px",
              borderBottomLeftRadius: "12px",
            }}
          >
            + {difference} years sooner!
          </div>
        </div>

      </div>
 <div className="bg-white border border-border-light rounded-2xl p-6 mt-4">
              <ScoreBreakdown breakdown={userData.breakdown} />
            </div>
    </div>
  </div>
</div>


        {/* Roadmap Section */}
        <Roadmap />

      </div>
    </main>
  );
}
