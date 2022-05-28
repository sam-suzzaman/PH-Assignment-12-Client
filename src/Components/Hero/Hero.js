import React from "react";
import useFetch from "../../Hooks/useFetch";
import heroBG from "../../assets/heroBG.jpg";

const Hero = () => {
    // const data = useFetch("http://localhost:5000/hero");

    return (
        <div
            className="hero h-fit"
            style={{
                background: `url(${heroBG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="hero-overlay bg-base-200 bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content py-28">
                <div className="">
                    <h1 className="mb-5   stroke-primary text-4xl md:text-5xl lg:text-6xl  capitalize  font-extrabold text-neutral">
                        Welcome To Kit Shop
                    </h1>
                    <p className="mb-5 text-base-100 font-light text-base md:text-xl lg:text-2xl max-w-lg mx-auto">
                        The biggest Tool-kit Shop for your house. Just find your
                        ones and place the order
                    </p>
                    <button className="btn btn-accent text-base">
                        shop now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
