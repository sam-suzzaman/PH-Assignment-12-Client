import React from "react";
import tooPic from "../../assets/tool.jpg";
import SingleTool from "../SingleTool/SingleTool";
const ToolsGallery = () => {
    const tools = [
        {
            id: 1,
            photo: tooPic,
            title: "hammer kit",
            des: "the strongest hammer for your job done",
            minOrderQuantity: 100,
            availableQuantity: 5000,
            pricePerUnit: 40,
        },
        {
            id: 2,
            photo: tooPic,
            title: "hammer kit 2",
            des: "the strongest hammer for your job done",
            minOrderQuantity: 10,
            availableQuantity: 600,
            pricePerUnit: 60,
        },
        {
            id: 3,
            photo: tooPic,
            title: "hammer kit 3",
            des: "the strongest hammer for your job done",
            minOrderQuantity: 50,
            availableQuantity: 550,
            pricePerUnit: 20,
        },
        {
            id: 4,
            photo: tooPic,
            title: "hammer kit 4",
            des: "the strongest hammer for your job done",
            minOrderQuantity: 30,
            availableQuantity: 8800,
            pricePerUnit: 13,
        },
        {
            id: 5,
            photo: tooPic,
            title: "hammer kit 5",
            des: "the strongest hammer for your job done",
            minOrderQuantity: 50,
            availableQuantity: 2000,
            pricePerUnit: 38,
        },
    ];

    return (
        <section className="tools-gallery-container py-8 px-8 lg:px-16">
            <h2 className="text-center text-4xl sm:text-5xl text-primary  capitalize font-semibold">
                Tools <span className="text-secondary">gallery</span>
            </h2>
            <div className="tools-row mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {tools.map((tool) => {
                        return <SingleTool key={tool.id} tool={tool} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default ToolsGallery;
