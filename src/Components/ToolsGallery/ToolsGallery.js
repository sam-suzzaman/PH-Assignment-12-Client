import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import SingleTool from "../SingleTool/SingleTool";
const ToolsGallery = () => {
    const tools = useFetch("http://localhost:5000/toolsLimit");

    return (
        <section className="tools-gallery-container py-8 px-8 lg:px-16">
            <h2 className="text-center text-4xl sm:text-5xl text-primary  capitalize font-semibold">
                Tools <span className="text-secondary">gallery</span>
            </h2>
            <div className="tools-row mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {tools.map((tool) => {
                        return <SingleTool key={tool._id} tool={tool} />;
                    })}
                </div>
            </div>
            <div className="w-full flex justify-center mt-10">
                <Link to="/allTools" className="btn btn-primary px-8 sm:px-16">
                    Show all tools
                </Link>
            </div>
        </section>
    );
};

export default ToolsGallery;
