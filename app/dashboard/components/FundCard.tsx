import { ChevronRight } from "lucide-react";

interface FundCardProps {
    name: string;
    return3Y: string;
    logo: React.ReactNode;
}

export default function FundCard({ name, return3Y, logo }: FundCardProps) {
    return (
        <div className="flex items-center justify-between p-4 bg-white border border-border-light rounded-xl hover:shadow-card transition-all cursor-pointer group hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-bg-light flex items-center justify-center overflow-hidden">
                    {logo}
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-text-dark">{name}</h4>
                    <p className="text-xs font-bold text-success-green mt-0.5">{return3Y} (3Y)</p>
                </div>
            </div>
            <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-primary-blue transition-colors" />
        </div>
    );
}
