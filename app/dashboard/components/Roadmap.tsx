import RoadmapStepCard from "./RoadmapStepCard";
import SavingsSelector from "./SavingsSelector";
import FundCard from "./FundCard";
import { Building2, Landmark } from "lucide-react";

export default function Roadmap() {
  return (
<div className="bg-white 
                border border-border-light 
                rounded-3xl p-6 md:p-10 mt-10
                shadow-[0_0_25px_rgba(59,130,246,0.6)]">
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl md:text-4xl font-semibold text-primary-blue leading-tight">
              Your personalized roadmap to <span className="text-text-dark">70+ WealthUp</span> score
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <RoadmapStepCard
            stepNumber={1}
            title="Build your safety net (Emergency fund)"
            description="Ankit, avoid a potential 2-year setback. Build your emergency fund to be risk-free within the next 6 months."
            active
          >
            <div className="space-y-6">
              <SavingsSelector />

              <div className="space-y-3">
                <p className="text-sm font-semibold text-text-dark">
                  Recommended Funds (Top performers)
                </p>
                <div className="space-y-2">
                  <FundCard
                    name="HDFC Mid-Cap Fund"
                    return3Y="26.6%"
                    logo={<Building2 className="w-6 h-6 text-red-600" />}
                  />
                  <FundCard
                    name="Bandhan Small Cap"
                    return3Y="32%"
                    logo={<Landmark className="w-6 h-6 text-orange-600" />}
                  />
                </div>
              </div>
            </div>
          </RoadmapStepCard>

          {/* Step 2 */}
          <RoadmapStepCard
            stepNumber={2}
            title="Optimize investments"
            description="Invest regularly to build long-term wealth. Explore diversified mutual funds and asset allocation strategies."
            locked
          />

          {/* Step 3 */}
          <RoadmapStepCard
            stepNumber={3}
            title="Maximize growth"
            description="Accelerate your financial future by reviewing advanced growth options, retirement planning, and tax-efficient vehicles."
            locked
          />
        </div>
      </div>
    </div>
  );
}
