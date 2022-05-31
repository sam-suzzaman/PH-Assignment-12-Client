import React from "react";
import { useForm } from "react-hook-form";
import firebaseAuth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingCom from "../Components/Loading/LoadingCom";
import { toast } from "react-toastify";

const AddReviews = () => {
    const [user, loading] = useAuthState(firebaseAuth);
    // to hanlde error messages ===
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        const { comment, rating } = data;
        const { displayName } = user;
        const ratingNumber = parseFloat(rating);
        const review = {
            title: displayName,
            reviewText: comment,
            photo: "https://i.ibb.co/4WpRTwF/avater.jpg",
            rating: ratingNumber,
        };

        // sending ===
        fetch("http://localhost:5000/addReview", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((result) => {
                toast("Thanks for the Review");
            });
    };

    // ===== Render =======
    if (loading) {
        return <LoadingCom />;
    }
    return (
        <div className="px-3">
            <h2 className="text-xl text-center md:text-4xl text-secondary capitalize font-semibold">
                give your review:
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

                            {/* comment Field */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text capitalize">
                                        your comment:
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="your comment"
                                    className="input input-bordered w-full"
                                    {...register("comment", {
                                        required: {
                                            value: true,
                                            message: "Comment is required",
                                        },
                                        // pattern: {
                                        //     value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])$/,
                                        //     message:
                                        //         "password must contains one uppercase, lowercase and digit",
                                        // },
                                        minLength: {
                                            value: 3,
                                            message: "Enter a valid comment",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.comment?.type === "required" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.comment?.message}
                                        </span>
                                    )}
                                    {/* {errors.password?.type === "pattern" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.password?.message}
                                        </span>
                                    )} */}
                                    {errors.comment?.type === "minLength" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.comment?.message}
                                        </span>
                                    )}
                                </label>
                            </div>

                            {/* Rating Number Field */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text capitalize">
                                        Your Rating:
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Rating"
                                    className="input input-bordered w-full"
                                    {...register("rating", {
                                        required: {
                                            value: true,
                                            message: "Rating is required",
                                        },
                                        // pattern: {
                                        //     value: /^[0-9]*$/,
                                        //     message:
                                        //         "Enter a valid Phone Number",
                                        // },
                                        minLength: {
                                            value: 3,
                                            message: "Enter a valid rating",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.rating?.type === "required" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.rating?.message}
                                        </span>
                                    )}
                                    {/* {errors.phoneNumber?.type === "pattern" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.phoneNumber?.message}
                                        </span>
                                    )} */}
                                    {errors.rating?.type === "minLength" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.rating?.message}
                                        </span>
                                    )}
                                </label>
                            </div>

                            {/* submit button */}
                            <input
                                className="btn btn-secondary text-xs sm:text-base font-medium uppercase text-neutral px-6 sm:px-16 cursor-pointer mt-6 mx-auto block"
                                type="submit"
                                value="add review"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;
