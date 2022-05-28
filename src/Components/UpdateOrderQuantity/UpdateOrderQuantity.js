import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateOrderQuantity = ({ availableQuantity, minOrderQuantity }) => {
    const [quantity, setQuantity] = useState(minOrderQuantity);
    // const {
    //     register,
    //     formState: { errors },
    //     handleSubmit,
    // } = useForm();

    // const onSubmit = async (data) => {
    //     //toast("Thanks for Purchasing");
    //     console.log(data);
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    };

    const handleIncreaseQuantity = () => {
        let increasedQuantity = quantity + 1;
        setQuantity(increasedQuantity);
    };
    const handleDecreaseQuantity = () => {
        let decreasedQuantity = quantity - 1;
        setQuantity(decreasedQuantity);
    };

    return (
        <div className="w-full bg-accent p-4 mt-10 rounded-lg">
            <div className="flex flex-col sm:flex-row">
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        className="input input-bordered w-full my-4 sm:my-0 sm:mx-4 text-center"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                        className="btn btn-primary text-neutral mx-8 sm:mx-0 mt-4 sm:mt-0 sm:ml-3"
                        type="submit"
                    >
                        submit
                    </button>
                </form>
                <button
                    onClick={handleIncreaseQuantity}
                    className="btn btn-primary text-neutral mx-8 sm:mx-0"
                >
                    Increase
                </button>

                <button
                    onClick={handleDecreaseQuantity}
                    className="btn btn-primary text-neutral mx-8 sm:mx-0"
                >
                    Decrease
                </button>
            </div>
        </div>
    );
};

export default UpdateOrderQuantity;
