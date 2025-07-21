import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SalesChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales ($)",
        data: [5000, 8000, 6000, 10000, 7000, 9000],
        backgroundColor: "#4F46E5",
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="bg-[#1D2237] p-5 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-white mb-3">Monthly Revenue</h3>
      <Bar data={data} />
    </div>
  );
};

export default SalesChart;
