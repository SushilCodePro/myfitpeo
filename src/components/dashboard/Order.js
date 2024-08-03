

function Order() {

    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
        { id: 3, name: 'Mike Johnson', email: 'mike@example.com', age: 45 },
        { id: 4, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 5, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
        { id: 6, name: 'Mike Johnson', email: 'mike@example.com', age: 45 },
    ];
    return (

        <div className="w-full md:flex-2 h-72 bg-gray-700 rounded">
            <table className="min-w-full text-white text-sm md:text-base">
                <thead>
                    <tr>
                        <th className="py-2 px-2 md:px-4 border-b">ID</th>
                        <th className="py-2 px-2 md:px-4 border-b">Name</th>
                        <th className="py-2 px-2 md:px-4 border-b">Email</th>
                        <th className="py-2 px-2 md:px-4 border-b">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="py-1 px-2 md:py-2 md:px-4 border-b text-center">{item.id}</td>
                            <td className="py-1 px-2 md:py-2 md:px-4 border-b text-center">{item.name}</td>
                            <td className="py-1 px-2 md:py-2 md:px-4 border-b text-center">{item.email}</td>
                            <td className="py-1 px-2 md:py-2 md:px-4 border-b text-center">{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    );
}

export default Order;