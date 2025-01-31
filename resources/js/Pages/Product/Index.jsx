import { Inertia } from '@inertiajs/inertia'; 
import { useState } from 'react';
import "./index.css"


export default function Index({ orders, query }) {
    const [search, setSearch] = useState(query || '');

    // ฟังก์ชันค้นหา
    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            Inertia.get(route('products.index'), { search });
        }
    };

    // ฟังก์ชันรีเฟรช
    const handleRefresh = () => {
        setSearch('');
        Inertia.get(route('products.index'), { search: '' });
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="mb-6 text-4xl font-bold text-gray-800">Order Details</h1>

            {/* ฟอร์มค้นหา */}
            <div className="mb-6 flex flex-col sm:flex-row items-center gap-4 bg-white p-4 shadow rounded-lg">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search "
                    className="flex-1 border rounded-lg px-4 py-2 focus:ring focus:ring-gray-500"
                />
                <button
                    onClick={handleSearch}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                    Search
                </button>
                <button 
    onClick={handleRefresh}
    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
>
    Refresh
    </button>

</div>

{/* การ์ดแสดงข้อมูลคำสั่งซื้อ */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {orders.data.map((order) => (
        <div key={order.OrderID} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Order #{order.OrderID}</h2>
            <p className="text-gray-600 mt-2">Product ID: {order.ProductID}</p>
            <p className="text-gray-600">Product Name: {order.Productname}</p>
            <p className="text-gray-600">Customer: {order.CustomerName}</p>
            <p className="text-gray-600">Total Amount: ${order.TotalAmount}</p>
            <p className="text-gray-600">Order Date: {order.OrderDate}</p>
        </div>
    ))}
</div>

{/* Pagination */}
<div className="mt-6 flex justify-center">
    {orders.links.map((link) => (
        <button
            key={link.label}
            onClick={() => Inertia.get(link.url)}
            className={`mx-2 px-4 py-2 rounded-lg font-medium ${link.active ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-500 transition`}
            dangerouslySetInnerHTML={{ __html: link.label }}
        />
    ))}
</div>
</div>
);
}