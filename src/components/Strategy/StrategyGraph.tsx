import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Hexagon } from 'lucide-react';

// Register the required components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const VisitStatistics = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "",
        data: [1, 2, 1.5, 3, 3.5, 4, 5,],
        backgroundColor: "transparent",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="border rounded-2xl p-5 mt-5 relative">
      <Line
        data={data}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: false,
              text: "Visit Statistics",
            },
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: false,
              grid: {
                display: false,
              },
              border: { display: false },
              display: false,
            },
            x: {
              beginAtZero: false,
              grid: {
                display: false,
              },
              border: { color: "transparent" },
            },
          },
        }}
      />
      <div className="absolute bg-[#fe4a22] rounded-2xl py-2 px-3 right-3 bottom-5 w-[35%] flex flex-col gap-y-3 text-white">
        <div className="flex justify-between items-center text-white">
          <h4 className="text-white text-xs font-light">Rate</h4>
          <Hexagon className="font-light text-[#ffece8]" size={20} />
        </div>
        <h4 className="font-light text-lg">+58%</h4>
      </div>
    </div>
  );
};

export default VisitStatistics;
