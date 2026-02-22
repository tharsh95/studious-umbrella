"use client";

import { useState } from "react";
import { cn } from "@/app/lib/utils";

const SAVINGS_OPTIONS = ["₹500", "₹1,000", "₹5,000", "₹6,000"];

export default function SavingsSelector() {
    const [selected, setSelected] = useState("₹500");

    return (
        <div className="space-y-4">
            <p className="text-sm text-text-dark font-medium">
               I can commit to saving <span className="text-primary-blue font-bold">{selected}</span> monthly
            </p>
            <div className="flex flex-wrap gap-2">
                {SAVINGS_OPTIONS.map((option) => (
                    <button
                        key={option}
                        onClick={() => setSelected(option)}
                        className={cn(
                            "px-4 py-2 rounded-lg text-sm font-semibold transition-all border",
                            selected === option
                                ? "bg-primary-blue text-black border-primary-blue shadow-lg scale-105"
                                : "bg-white text-text-muted border-border-light hover:border-primary-blue/30"
                        )}
                    >
                        {option}
                    </button>
                ))}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="₹ Enter amount"
                        className="px-4 py-2 rounded-lg text-sm font-semibold border border-border-light focus:outline-none focus:border-primary-blue w-32 bg-white"
                    />
                </div>
            </div>
        </div>
    );
}
