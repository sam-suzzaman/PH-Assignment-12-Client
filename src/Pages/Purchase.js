import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// === For Form
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import firebaseAuth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingCom from "../Components/Loading/LoadingCom";
import UpdateOrderQuantity from "../Components/UpdateOrderQuantity/UpdateOrderQuantity";

const Purchase = () => {
    const [user, loading] = useAuthState(firebaseAuth);
    const { orderId } = useParams();
    const [tool, setTool] = useState({});

    useEffect(() => {
        const url = `https://tranquil-bayou-59353.herokuapp.com/tools/${orderId}`;
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setTool(result);
            })
            .catch((err) => console.log(err.message));
    }, [orderId, tool]);

    // to hanlde error messages ===
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        toast("Thanks for Purchasing");
    };

    const {
        _id,
        des,
        title,
        availableQuantity,
        minOrderQuantity,
        photo,
        pricePerUnit,
    } = tool;

    // =========== Rendering Part ===============
    // if (user) {
    //     console.log(user);
    //     // const{displayName,email}=user;
    // }
    if (loading) {
        return <LoadingCom />;
    }
    return (
        <section className="purchase-container py-16">
            {/* Tool Information Row */}
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={photo}
                        className=" lg:mr-8 max-w-sm w-full rounded-lg shadow-2xl"
                        alt="tool"
                    />
                    <div>
                        <h1 className=" text-2xl md:text-4xl font-bold capitalize text-primary">
                            {title}
                        </h1>
                        <p className="py-3 md:py-5 text-base md:text-xl font-light ">
                            {des}
                        </p>
                        <p className="text-gray-600 text-base font-light ">
                            <span className="font-semibold capitalize">
                                Minimum Order quantity
                            </span>
                            :{" "}
                            <span className="text-primary font-bold text-lg">
                                {minOrderQuantity}
                            </span>{" "}
                            {minOrderQuantity > 2 ? "pieces" : "piece"}
                        </p>
                        <p className="text-gray-600 text-base font-light ">
                            <span className="font-semibold capitalize">
                                available quantity
                            </span>
                            :{" "}
                            <span className="text-primary font-bold text-lg">
                                {availableQuantity}
                            </span>{" "}
                            {availableQuantity > 2 ? "pieces" : "piece"}
                        </p>
                        <p className="text-gray-600 text-base font-light ">
                            <span className="font-semibold capitalize">
                                Price
                            </span>
                            :{" "}
                            <span className="text-primary font-bold text-lg">
                                {pricePerUnit}
                            </span>{" "}
                            (per Unit)
                        </p>
                        <UpdateOrderQuantity tool={tool} />
                    </div>
                </div>
            </div>

            {/* Order place / form Row */}
            <section className="form-wrapper my-10 sm:my-20 px-6">
                <h2 className="text-center text-2xl sm:text-4xl font-bold text-primary uppercase ">
                    To Place Order
                </h2>
                {/* form start */}
                <div className="form-container mt-8 sm:mt-14">
                    <div className=" w-full max-w-xl mx-auto kit-shadow py-10 px-8 rounded-lg">
                        <div className="mb-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Name Field */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text capitalize">
                                            Your Name:
                                        </span>
                                    </label>
                                    <input
                                        type="name"
                                        readOnly
                                        value={user?.displayName}
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text capitalize">
                                            your email:
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        value={user?.email}
                                        readOnly
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Address Field */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text capitalize">
                                            Your Address:
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="your address"
                                        className="input input-bordered w-full"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: "Address is required",
                                            },
                                            // pattern: {
                                            //     value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])$/,
                                            //     message:
                                            //         "password must contains one uppercase, lowercase and digit",
                                            // },
                                            minLength: {
                                                value: 3,
                                                message:
                                                    "Enter a valid Address",
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type ===
                                            "required" && (
                                            <span className="label-text-alt text-red-600">
                                                {errors.address?.message}
                                            </span>
                                        )}
                                        {/* {errors.password?.type === "pattern" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.password?.message}
                                        </span>
                                    )} */}
                                        {errors.address?.type ===
                                            "minLength" && (
                                            <span className="label-text-alt text-red-600">
                                                {errors.address?.message}
                                            </span>
                                        )}
                                    </label>
                                </div>

                                {/* Phone Number Field */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text capitalize">
                                            Phone Number:
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="input input-bordered w-full"
                                        {...register("phoneNumber", {
                                            required: {
                                                value: true,
                                                message:
                                                    "Phone Number is required",
                                            },
                                            pattern: {
                                                value: /^[0-9]*$/,
                                                message:
                                                    "Enter a valid Phone Number",
                                            },
                                            minLength: {
                                                value: 11,
                                                message:
                                                    "Phone Number must be 11 digits",
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.phoneNumber?.type ===
                                            "required" && (
                                            <span className="label-text-alt text-red-600">
                                                {errors.phoneNumber?.message}
                                            </span>
                                        )}
                                        {errors.phoneNumber?.type ===
                                            "pattern" && (
                                            <span className="label-text-alt text-red-600">
                                                {errors.phoneNumber?.message}
                                            </span>
                                        )}
                                        {errors.phoneNumber?.type ===
                                            "minLength" && (
                                            <span className="label-text-alt text-red-600">
                                                {errors.phoneNumber?.message}
                                            </span>
                                        )}
                                    </label>
                                </div>

                                {/* submit button */}
                                <input
                                    className="btn btn-secondary text-xs sm:text-base font-medium uppercase text-neutral px-6 sm:px-16 cursor-pointer mt-6 mx-auto block"
                                    type="submit"
                                    value="purchase"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Purchase;
