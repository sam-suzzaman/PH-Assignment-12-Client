import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { useForm } from "react-hook-form";

// For Authentication
import firebaseAuth from "../firebase.init";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import LoadingCom from "../Components/Loading/LoadingCom";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(firebaseAuth);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(firebaseAuth);

    // to hanlde error messages ===
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user || gUser) {
        navigate(from, { replace: true });
    }

    // =========== Rendering Part ===============
    if (gLoading || loading) {
        return <LoadingCom />;
    }
    let errorCom;
    if (gError || error) {
        errorCom = (
            <p className="text-center text-sm text-red-600 font-semibold">
                {error?.message || gError?.message}
            </p>
        );
    }

    return (
        <section className="form-wrapper my-10 sm:my-20 px-6">
            <h2 className="text-center text-2xl sm:text-4xl font-bold text-primary uppercase ">
                login now
            </h2>
            {/* form start */}
            <div className="form-container mt-8 sm:mt-14">
                <div className=" w-full max-w-xl mx-auto kit-shadow py-10 px-8 rounded-lg">
                    <div className="mb-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* daisy */}
                            {/* Email Field */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text capitalize">
                                        enter your email:
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="e.g: demo@gmail.com"
                                    className="input input-bordered w-full"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is required",
                                        },
                                        pattern: {
                                            value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                            message: "enter a valid email",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === "required" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.email.message}
                                        </span>
                                    )}
                                    {errors.email?.type === "pattern" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </label>
                            </div>

                            {/* Password Field */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text capitalize">
                                        enter your password:
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="your password"
                                    className="input input-bordered w-full"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required",
                                        },
                                        // pattern: {
                                        //     value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])$/,
                                        //     message:
                                        //         "password must contains one uppercase, lowercase and digit",
                                        // },
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Password must be equal or longer than 6 character",
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === "required" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.password?.message}
                                        </span>
                                    )}
                                    {/* {errors.password?.type === "pattern" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.password?.message}
                                        </span>
                                    )} */}
                                    {errors.password?.type === "minLength" && (
                                        <span className="label-text-alt text-red-600">
                                            {errors.password?.message}
                                        </span>
                                    )}
                                </label>
                            </div>

                            {/* error message */}
                            {errorCom}

                            {/* submit button */}
                            <input
                                className="btn btn-secondary text-xs sm:text-base font-medium uppercase text-neutral px-6 sm:px-16 cursor-pointer mt-6 mx-auto block"
                                type="submit"
                                value="login"
                            />

                            {/* Password reset and new user */}
                            <p className="text-center mt-4 text-sm font-light ">
                                <Link
                                    to="/register"
                                    className="text-secondary font-semibold hover:text-primary underline decoration-double"
                                >
                                    Register Now
                                </Link>{" "}
                                <span className="text-gray-500">
                                    {" "}
                                    to create an Account
                                </span>
                            </p>
                            <p className="mt-1 text-center">
                                <Link
                                    to="/resetPassword"
                                    className=" text-sm font-semibold text-secondary underline hover:decoration-wavy"
                                >
                                    Reset Password
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div className="divider">OR</div>
                    <div className=" mt-6 flex justify-center">
                        <button
                            className="btn btn-secondary text-xs sm:text-base font-medium uppercase text-neutral  sm:px-16"
                            onClick={() => signInWithGoogle()}
                        >
                            <FontAwesomeIcon
                                icon={faGoogle}
                                className="text-neutral font-bold w-4 mr-2"
                            />
                            login with google
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
