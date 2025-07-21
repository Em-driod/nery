// components/StatsCard.tsx
interface StatsCardProps {
    title: string;
    value: string;
    percentage: number;
  }
  
  const StatsCard: React.FC<StatsCardProps> = ({ title, value, percentage }) => {
    return (
      <div className="bg-[#1D2237] p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-sm ${percentage > 0 ? "text-green-500" : "text-red-500"}`}>
          {percentage > 0 ? `↑ ${percentage}%` : `↓ ${percentage}%`} from last month
        </p>
      </div>
    );
  };
  
  export default StatsCard;
  