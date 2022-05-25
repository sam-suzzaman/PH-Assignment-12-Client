import React from "react";
import BuisnessSummery from "../Components/BuisnessSummery/BuisnessSummery";
import Hero from "../Components/Hero/Hero";
import Reviews from "../Components/Reviews/Reviews";
import ToolsGallery from "../Components/ToolsGallery/ToolsGallery";

const Home = () => {
    return (
        <>
            <Hero />
            <BuisnessSummery />
            <ToolsGallery />
            <Reviews />
        </>
    );
};

export default Home;
