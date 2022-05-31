import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

const UpdateOrderQuantity = ({ tool }) => {
    const [disableIncrease, setDisableIncrease] = useState(false);
    const [disableDiscrese, setDisableDiscrese] = useState(false);

    const {
        _id,
        availableQuantity,
        minOrderQuantity,
        pricePerUnit,
        orderQuantity,
    } = tool;

    // input filed value ===
    // const [updateQuantity, setUpdateQuantity] = useState(orderQuantity);

    // === Increase button handler
    const handleIncreaseBtn = () => {
        const { orderQuantity, ...restTool } = tool;
        if (orderQuantity) {
            const newQuantity = orderQuantity + 1;
            const newTool = { orderQuantity: newQuantity, ...restTool };
            const url = `http://localhost:5000/order/${_id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newTool),
            })
                .then((res) => res.json())
                .then((result) => {
                    toast("Item Deliverd successfully");
                });
        } else {
            setDisableIncrease(true);
        }
    };
    const handleDecreaseBtn = () => {
        console.log("decrease");
    };
    return (
        <div className="w-full kit-shadow  p-4 mt-10 rounded-lg flex justify-center">
            <div className="flex flex-col sm:flex-row ">
                <button
                    className={
                        "btn btn-sm bg-secondary hover:bg-secondary hover:text-neutral border-none text-base-100 font-light"
                    }
                    onClick={handleIncreaseBtn}
                    disabled={orderQuantity >= availableQuantity}
                >
                    increase
                </button>
                <input
                    type="text"
                    value={orderQuantity}
                    readOnly
                    className="input input-sm input-bordered w-28 sm:mx-2 mx-0 my-2 sm:my-0 text-center text-sm"
                />
                <button
                    className="btn btn-sm bg-secondary hover:bg-secondary hover:text-neutral border-none text-base-100 font-light"
                    onClick={handleDecreaseBtn}
                >
                    decrease
                </button>
            </div>
        </div>
    );
};

export default UpdateOrderQuantity;
