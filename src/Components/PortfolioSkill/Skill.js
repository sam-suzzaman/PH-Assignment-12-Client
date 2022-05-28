import React from "react";

const Skill = ({ skill }) => {
    const { title, skillValue } = skill;
    return (
        <div className="w-full px-8 mt-4">
            <div className="flex justify-between mb-1">
                <span className="text-secondary font-medium uppercase ">
                    {title}
                </span>
                <span className="text-sm font-medium text-primary">
                    {skillValue}
                </span>
            </div>
            <div className="w-full  rounded-full h-2.5 bg-gray-700">
                <div
                    className="bg-secondary h-2.5 rounded-full"
                    style={{ width: skillValue }}
                ></div>
            </div>
        </div>
    );
};

export default Skill;
