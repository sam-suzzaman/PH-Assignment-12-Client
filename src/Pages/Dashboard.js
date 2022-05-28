import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <section className="px-0 lg:px-10 mb-14">
            {/* title part - Dashboard */}
            <div className="flex flex-col sm:flex-row items-center  sm:justify-between px-6 pt-8 pb-8">
                <h2 className="text-secondary font-semibold uppercase text-xl md:text-3xl">
                    dashboard
                </h2>
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary w-40 btn-sm mt-3 sm:mt-0 drawer-button  lg:hidden"
                >
                    show dashboard
                </label>
            </div>

            {/* content row */}
            <div className="drawer drawer-mobile">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-accent text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link
                                className="text-primary font-medium capitalize text-base"
                                to="/dashboard"
                            >
                                My order
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-primary font-medium capitalize text-base"
                                to="/dashboard/addReview"
                            >
                                add review
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-primary font-medium capitalize text-base"
                                to="/dashboard/myProfile"
                            >
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
