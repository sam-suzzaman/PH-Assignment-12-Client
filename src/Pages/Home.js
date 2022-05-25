import React from "react";
import BuisnessSummery from "../Components/BuisnessSummery/BuisnessSummery";
import Hero from "../Components/Hero/Hero";
import Reviews from "../Components/Reviews/Reviews";

const Home = () => {
    return (
        <>
            <Hero />
            <BuisnessSummery />
            <Reviews />
        </>
    );
};

export default Home;
