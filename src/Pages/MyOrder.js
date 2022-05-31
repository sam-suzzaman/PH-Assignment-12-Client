import React, { useEffect, useState } from "react";
import MyOrderList from "../Components/MyOrderList/MyOrderList";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseAuth from "../firebase.init";
import Loading from "../Components/Loading/LoadingCom";
import { toast } from "react-toastify";
import ConfirmModal from "../Components/ConfirmModal/ConfirmModal";

const MyOrder = () => {
    const [user, loading] = useAuthState(firebaseAuth);
    const [orders, setOrders] = useState([]);

    // for loading Orders
    useEffect(() => {
        const userEmail = user?.email;
        const url = `http://localhost:5000/myorders?email=${userEmail}`;
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setOrders(result);
            })
            .catch((err) => console.log(err));
    }, [user, orders]);

    // === cancel button handler ===
    const hanldeOrderCancel = (ID) => {
        const url = `http://localhost:5000/myorders/${ID}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                // const remaining = orders.filter(
                //     (order) => order.orderID !== ID
                // );
                // setOrders(remaining);
                // toast("Item Deleted Successfully");
                console.log(data);
            })
            .catch((err) => console.log(err));
    };

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
                                        hanldeOrderCancel={hanldeOrderCancel}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* modal */}
        </div>
    );
};

export default MyOrder;
