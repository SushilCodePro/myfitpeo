import { Bar } from 'react-chartjs-2';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Activity() {
    const data = {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
        datasets: [
            {
                label: 'Activity',
                data: [5000, 6000, 4000, 10000, 12000, 7000, 15000, 14000, 10000, 8000, 7000],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                borderRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return ` ${context.parsed.y}`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
        },
    };
    return (

        <div className="w-full md:flex-2  border border-red-100 h-64 rounded flex flex-col space-y-14">
            <div className="flex justify-between items-center">
                <h1 className="text-xl text-white font-bold">Activity</h1>
                <button className="flex items-center bg-gray-700 text-white px-2 rounded">
                    Weekly
                    <ChevronDownIcon className="w-4  ml-1" />
                </button>
            </div>
            <div className="">
                <Bar data={data} options={options} />
            </div>
            {/* <Bar data={data} options={options} /> */}
        </div>

    );
}

export default Activity;