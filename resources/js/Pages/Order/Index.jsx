import React from "react";
import { Head, usePage } from "@inertiajs/react";

const OrderIndex = () => {
    const { groupedOrders } = usePage().props;

    return (
        <div className="container mx-auto p-6">
            <Head title="Orders" />
            <h1 className="text-3xl font-bold mb-6">Orders</h1>

            {Object.entries(groupedOrders).map(([timestamp, data]) => (
                <div key={timestamp} className="mb-8 p-6 border rounded-lg shadow-lg bg-white">
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Customer: {data.customer_name}</h2>
                        <p className="text-sm text-gray-700">📍 Address: {data.customer_address}</p>
                        <p className="text-sm text-gray-700">📞 Phone: {data.customer_phone}</p>
                    </div>

                    <h3 className="text-lg font-semibold mb-4">🕒 Order Date: {timestamp}</h3>

                    <table className="min-w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Order ID</th>
                                <th className="border p-2">Product Name</th>
                                <th className="border p-2">Quantity</th>
                                <th className="border p-2">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.orders.map((order) => (
                                <tr key={order.id} className="border">
                                    <td className="border p-2">{order.id}</td>
                                    <td className="border p-2">
                                        {order.product ? order.product.product_name : "N/A"}
                                    </td>
                                    <td className="border p-2">{order.quantity}</td>
                                    <td className="border p-2">${order.total_price}</td>
                                </tr>
                            ))}
                            <tr className="font-bold bg-gray-100">
                                <td colSpan="3" className="border p-2 text-right">Total Order Price:</td>
                                <td className="border p-2">${data.total_order_price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default OrderIndex;