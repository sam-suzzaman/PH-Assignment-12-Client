import React from "react";

const BuisnessSummery = () => {
    return (
        <section className="py-8 my-16 w-full ">
            <h2 className="text-center text-4xl sm:text-5xl text-primary  capitalize font-semibold">
                buisness <span className="text-secondary">summery</span>
            </h2>
            <div className="px-8 lg:px-16 mt-12">
                <div className="stats w-full stats-vertical sm:stats-horizontal shadow ">
                    <div className="stat text-center">
                        <div className="stat-title text-primary font-semibold">
                            Downloads
                        </div>
                        <div className="stat-value text-primary">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat text-center">
                        <div className="stat-title text-primary font-semibold">
                            New Users
                        </div>
                        <div className="stat-value text-primary">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat text-center">
                        <div className="stat-title text-primary font-semibold">
                            New Registers
                        </div>
                        <div className="stat-value text-primary">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuisnessSummery;
