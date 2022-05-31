import React, { useEffect, useState } from "react";
import MyOrderList from "../Components/MyOrderList/MyOrderList";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseAuth from "../firebase.init";
import Loading from "../Components/Loading/LoadingCom";

const MyOrder = () => {
    const [user, loading] = useAuthState(firebaseAuth);
    const [orders, setOrders] = useState([]);

    // for Orders
    useEffect(() => {
        const userEmail = user?.email;
        const url = `http://localhost:5000/myorders?email=${userEmail}`;
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setOrders(result);
            })
            .catch((err) => console.log(err));
    }, [user]);

    // ==== Rendering ======
    if (loading) {
        <Loading />;
    }
    return (
        <div className="px-6">
            <h2 className="text-xl text-center md:text-4xl text-secondary capitalize font-semibold">
                Your Orders:
            </h2>

            {/* order Table */}
            <div className=" mt-10">
                <div className="overflow-x-auto w-full ">
                    <table className="table table-compact w-full">
                        <thead className="bg-primary">
                            <tr className="text-base-100">
                                <th className="text-center">No</th>
                                <th className="text-center">Order Info</th>
                                <th className="text-center">location</th>
                                <th className="text-center">quantity</th>
                                <th className="text-center">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => {
                                return (
                                    <MyOrderList
                                        order={order}
                                        key={order._id}
                                        indexValue={index}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
