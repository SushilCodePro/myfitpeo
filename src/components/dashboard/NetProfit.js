import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function NetProfit() {
    const percentage = 70;
    return (

        <div className=" flex w-full md:flex-1 h-40 bg-gray-700 md:ml-2 items-center rounded">
            <div className=' flex-1 flex flex-col justify-around space-y-6'>
                <p className='text-white font-bold text-sm'>Net Profit</p>
                <p className='text-white font-bold text-3xl'>$ 6759.74</p>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-green-500">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clip-rule="evenodd" />
                    </svg>
                    <p className="text-green-500 font-bold">3%</p>
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className="w-32 h-32 flex flex-col items-center ">
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            pathColor: '#3B82F6', // Tailwind blue-500
                            textColor: '#FFFFFF',
                            trailColor: '#1F2937', // Tailwind gray-800
                            backgroundColor: '#111827', // Tailwind gray-900
                        })}
                    />
                    {/* <p className="text-white text-sm mt-2">Goal Completed</p> */}
                    <p className="text-gray-400 text-xs text-center">The values here have been rounded off.</p>
                </div>
            </div>
        </div>

    );
}

export default NetProfit;