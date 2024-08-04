

function Order() {

    const data = [
        { name: 'Fitpeo ', id: 1, amount: 284, status: 'Delivered' },
        { name: 'Sunder Pichai', id: 2, amount: 341, status: 'Delivered' },
        { name: 'Virat Kohli', id: 3, amount: 450, status: 'Cancelled' },
        { name: 'Sataya Nadela', id: 4, amount: 286, status: 'Pending' },
        { name: 'Kamla Harris', id: 5, amount: 348, status: 'Delivered' },
        { name: 'Manu Bhakar', id: 6, amount: 454, status: 'Delivered' },
    ];
    return (

        <div className="w-full md:flex-2 bg-gray-700 rounded">
            <h1 className="text-xl font-bold mb-2 text-white">Recent Orders</h1>
            <table className="min-w-full text-white text-sm md:text-base">
                <thead>
                    <tr>
                        <th className="py-2 px-2 md:px-4 border-b text-start">Name</th>
                        <th className="py-2 px-2 md:px-4 border-b text-start">Order No</th>
                        <th className="py-2 px-2 md:px-4 border-b text-start">Amount</th>
                        <th className="py-2 px-2 md:px-4 border-b text-start">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="py-1 px-2 md:py-2 md:px-4 border-b text-start">
                                <div className="flex space-x-3">
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 bg-gray-400 rounded-full p-1 text-black">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                                    </div>
                                    <p className="text-white">{item.name}</p>
                                </div>
                            </td>
                            <td className="py-1 px-2 md:py-2 md:px-4 border-b text-start">{item.id}</td>
                            <td className="py-1 px-2 md:py-2 md:px-4 border-b text-start">${item.amount}</td>
                            <td
                                className={`h-1 w-2 py-1  md:py-2  border-b rounded-full text-center ${item.status==='Delivered' ?'bg-green-400 text-green-700': 'bg-red-400 text-red-700'}`}
                            >{item.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    );
}

export default Order;