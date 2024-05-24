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
import { Bar } from "./Bar";

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

const bar = [
  {
    value: 80,
    height: 23,
    legend: "2021",
  },
  {
    value: 40,
    height: 50,
    legend: "2020",
  },
  {
    value: 70,
    height: 40,
    legend: "2019",
  },
  {
    color: "#ffd026",
    value: 100,
    height: 23,
    legend: "2018",
  },
  {
    value: 45,
    height: 70,
    legend: "2017",
  },
];

const IndicatorStatistics = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "",
        data: [1, 2, 1.5, 3, 3.5, 4, 5],
        backgroundColor: "transparent",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="relative w-full h-full">
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
              display: false,
            },
          },
        }}
      />
      <div className="absolute z-50 left-0 right-0">
        <div className="flex gap-x-2 px-8 ">
          {bar.map((_,) => {
            return <Bar value={_.value} color={_.color} legend={_.legend} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default IndicatorStatistics;
