import React, { useEffect, useState } from "react";

const UpdateOrderQuantity = ({ availableQuantity, minOrderQuantity }) => {
    return (
        <div className="w-full kit-shadow  p-4 mt-10 rounded-lg flex justify-center">
            <div className="flex flex-col sm:flex-row ">
                <button className="btn btn-sm bg-secondary hover:bg-secondary hover:text-neutral border-none text-base-100 font-light">
                    increase
                </button>
                <input
                    type="text"
                    className="input input-sm input-bordered w-28 sm:mx-2 mx-0 my-2 sm:my-0 text-center text-sm"
                />
                <button className="btn btn-sm bg-secondary hover:bg-secondary hover:text-neutral border-none text-base-100 font-light">
                    decrease
                </button>
            </div>
        </div>
    );
};

export default UpdateOrderQuantity;
