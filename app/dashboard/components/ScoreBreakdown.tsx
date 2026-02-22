import ProgressBar from "./ProgressBar";

interface ScoreBreakdownProps {
  breakdown: {
    emergency: number;
    liquidity: number;
    investments: number;
    healthInsurance: number;
    lifeInsurance: number;
    savings: number;
  };
}

export default function ScoreBreakdown({ breakdown }: ScoreBreakdownProps) {
  const items = [
    { label: "Emergency Funds", value: breakdown.emergency, max: 20 },
    { label: "Liquidity", value: breakdown.liquidity, max: 20 },
    { label: "Investments", value: breakdown.investments, max: 20 },
    { label: "Health Insurance", value: breakdown.healthInsurance, max: 20 },
    { label: "Life Insurance", value: breakdown.lifeInsurance, max: 20 },
    { label: "Savings", value: breakdown.savings, max: 20 },
  ];

  return (
    <div className="bg-card-bg rounded-2xl p-6 shadow-subtle border border-border-light">
      <h3 className="text-xl font-semibold mb-6 flex justify-between">
        Your score breakdown
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-x-12 gap-y-6">
        {items.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-text-dark font-medium">{item.label}</span>
              <span className="text-text-muted font-medium">
                {item.value} / {item.max}
              </span>
            </div>
            <ProgressBar value={item.value} max={item.max} />
          </div>
        ))}
      </div>
    </div>
  );
}
