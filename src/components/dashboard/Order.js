

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
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 bg-gray-400 rounded-full text-black p-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <p className="text-white">{item.name}</p>
                                </div>
                            </td>
                            <td className="py-1 px-2 md:py-2 md:px-4 border-b text-start">{item.id}</td>
                            <td className="py-1 px-2 md:py-2 md:px-4 border-b text-start">${item.amount}</td>
                            <td
                                className={`py-1  md:py-2  border-b rounded-full text-center ${item.status==='Delivered' ?'bg-green-400 text-green-700': 'bg-red-400 text-red-700'}`}
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