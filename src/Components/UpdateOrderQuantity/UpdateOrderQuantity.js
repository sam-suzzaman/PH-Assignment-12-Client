import React from "react";
import { useForm } from "react-hook-form";

const UpdateOrderQuantity = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        //toast("Thanks for Purchasing");
        console.log(data);
    };

    return (
        <div className="w-full bg-accent p-4 mt-10 rounded-lg">
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col sm:flex-row"
                >
                    <button
                        className="btn btn-primary text-neutral mx-8 sm:mx-0"
                        type="submit"
                    >
                        Increase
                    </button>
                    <input
                        type="number"
                        placeholder="quantity"
                        className="input input-bordered w-full my-4 sm:my-0 sm:mx-4 text-center"
                        {...register("quantityValue")}
                    />
                    <button
                        className="btn btn-primary text-neutral mx-8 sm:mx-0"
                        type="submit"
                    >
                        Decrease
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateOrderQuantity;
