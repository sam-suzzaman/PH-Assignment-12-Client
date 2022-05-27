import React from "react";
import profilePic from "../assets/profile.png";
import PortfolioProject from "../Components/PorfolioProject/PortfolioProject";
// import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../Hooks/useFetch";

const Portfolio = () => {
    const projectsData = useFetch("Projects.json");

    return (
        <section className="portfolio-container">
            {/* hero section */}
            <div className=" bg-secondary border-t-2 border-[#0ba89b] md:py-16 py-6">
                <div className=" text-center px-4">
                    <h1 className="text-2xl md:text-5xl uppercase text-neutral font-bold">
                        Portfolio
                    </h1>
                    <p className="text-center px-5 text-sm sm:text-base text-base-100 font-thin  md:font-base mt-3 capitalize">
                        this is my short description as a junior front-end web
                        developer.
                    </p>
                </div>
            </div>

            {/* content seciton */}
            <div className=" py-14 sm:py-20">
                <div className="hero px-3 sm:px-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="avatar border-double border-4 border-secondary rounded-md">
                            <div className="max-w-xs w-full rounded">
                                <img src={profilePic} alt="profile" />
                            </div>
                        </div>
                        <div className="text-center lg:text-left ml-0 lg:ml-10">
                            <h1 className="text-2xl sm:text-4xl text-secondary capitalize font-bold">
                                About me
                            </h1>
                            <div className="py-3 sm:py-6 ">
                                <p className="mb-2 text-sm sm:text-lg capitalize font-medium">
                                    {/* <span className="">
                                    <FontAwesomeIcon
                                        className="text-primary mr-1"
                                        icon={faHandPointRight}
                                    />
                                </span> */}
                                    <span className="">name</span>:{" "}
                                    <span className="text-primary">
                                        samsuzzaman
                                    </span>
                                </p>
                                <p className="mb-2 text-sm sm:text-lg capitalize font-medium">
                                    <span className="">email</span>:{" "}
                                    <span className="text-primary">
                                        dksamsuzzaman@gmail.com
                                    </span>
                                </p>
                                <p className="mb-2 text-sm sm:text-lg capitalize font-medium">
                                    <span className="">education</span>:{" "}
                                    <span className="text-primary">
                                        B.Sc in EEE (Studying)
                                    </span>
                                </p>
                            </div>
                            <button className="btn btn-primary">hire me</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skill section */}
            <div className=" py-12 sm:py-20">
                <h1 className="text-2xl md:text-4xl text-center capitalize text-secondary font-bold">
                    My skills
                </h1>

                {/* all skills */}
                <div className="mt-4 sm:mt-8 flex flex-col  items-center ">
                    <div className="flex flex-col w-full max-w-xl justify-center items-center ">
                        {/* Item-1 */}
                        <div className="w-full px-8 mt-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-secondary font-medium uppercase ">
                                    html
                                </span>
                                <span className="text-sm font-medium text-primary">
                                    95%
                                </span>
                            </div>
                            <div className="w-full  rounded-full h-2.5 bg-gray-700">
                                <div
                                    className="bg-secondary h-2.5 rounded-full"
                                    style={{ width: "95%" }}
                                ></div>
                            </div>
                        </div>

                        {/* Item-2 */}
                        <div className="w-full px-8 mt-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-secondary font-medium uppercase ">
                                    css
                                </span>
                                <span className="text-sm font-medium text-primary">
                                    85%
                                </span>
                            </div>
                            <div className="w-full  rounded-full h-2.5 bg-gray-700">
                                <div
                                    className="bg-secondary h-2.5 rounded-full"
                                    style={{ width: "85%" }}
                                ></div>
                            </div>
                        </div>

                        {/* Item-3 */}
                        <div className="w-full px-8 mt-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-secondary font-medium uppercase ">
                                    javascript
                                </span>
                                <span className="text-sm font-medium text-primary">
                                    80%
                                </span>
                            </div>
                            <div className="w-full  rounded-full h-2.5 bg-gray-700">
                                <div
                                    className="bg-secondary h-2.5 rounded-full"
                                    style={{ width: "80%" }}
                                ></div>
                            </div>
                        </div>

                        {/* Item-4 */}
                        <div className="w-full px-8 mt-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-secondary font-medium uppercase ">
                                    Bootstrap
                                </span>
                                <span className="text-sm font-medium text-primary">
                                    90%
                                </span>
                            </div>
                            <div className="w-full  rounded-full h-2.5 bg-gray-700">
                                <div
                                    className="bg-secondary h-2.5 rounded-full"
                                    style={{ width: "90%" }}
                                ></div>
                            </div>
                        </div>

                        {/* Item-5 */}
                        <div className="w-full px-8 mt-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-secondary font-medium uppercase ">
                                    React
                                </span>
                                <span className="text-sm font-medium text-primary">
                                    80%
                                </span>
                            </div>
                            <div className="w-full  rounded-full h-2.5 bg-gray-700">
                                <div
                                    className="bg-secondary h-2.5 rounded-full"
                                    style={{ width: "80%" }}
                                ></div>
                            </div>
                        </div>

                        {/* Item-6 */}
                        <div className="w-full px-8 mt-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-secondary font-medium uppercase ">
                                    Express
                                </span>
                                <span className="text-sm font-medium text-primary">
                                    20%
                                </span>
                            </div>
                            <div className="w-full  rounded-full h-2.5 bg-gray-700">
                                <div
                                    className="bg-secondary h-2.5 rounded-full"
                                    style={{ width: "20%" }}
                                ></div>
                            </div>
                        </div>

                        {/* Item-7 */}
                        <div className="w-full px-8 mt-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-secondary font-medium uppercase ">
                                    mongd DB
                                </span>
                                <span className="text-sm font-medium text-primary">
                                    30%
                                </span>
                            </div>
                            <div className="w-full  rounded-full h-2.5 bg-gray-700">
                                <div
                                    className="bg-secondary h-2.5 rounded-full"
                                    style={{ width: "30%" }}
                                ></div>
                            </div>
                        </div>

                        {/* Item-8 */}
                        <div className="w-full px-8 mt-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-secondary font-medium uppercase ">
                                    github
                                </span>
                                <span className="text-sm font-medium text-primary">
                                    70%
                                </span>
                            </div>
                            <div className="w-full  rounded-full h-2.5 bg-gray-700">
                                <div
                                    className="bg-secondary h-2.5 rounded-full"
                                    style={{ width: "70%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Project */}
            <div className=" py-12 sm:py-20 px-3 lg:px-10">
                <h1 className="text-2xl md:text-4xl text-center capitalize text-secondary font-bold">
                    Projects
                </h1>

                <div className="mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <PortfolioProject key={project._id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
