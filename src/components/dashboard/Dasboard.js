

function Dashboard() {

    return (

        // <div className=" flex-1 h-44 space-x-2">
        //     <div className="flex-1 bg-red-500">

        //     </div>
        //     <div className="flex-1 bg-blue-500">

        //     </div>
        //     <div className="flex-1 bg-green-500">

        //     </div>
        //     <div className="flex-1 bg-yellow-500">

        //     </div>
        // </div>
        <div className="w-full md:flex-3 flex h-44 space-x-2">
            <div className="flex-1 bg-red-500 min-h-44 flex items-center justify-center">
                <span className="text-white">Red</span>
            </div>
            <div className="flex-1 bg-blue-500 min-h-44 flex items-center justify-center">
                <span className="text-white">Blue</span>
            </div>
            <div className="flex-1 bg-green-500 min-h-44 flex items-center justify-center">
                <span className="text-white">Green</span>
            </div>
            <div className="flex-1 bg-yellow-500 min-h-44 flex items-center justify-center">
                <span className="text-white">Yellow</span>
            </div>
        </div>

    );
}

export default Dashboard;