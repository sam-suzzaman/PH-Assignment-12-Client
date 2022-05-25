import React from "react";

const SingleTool = ({ tool }) => {
    const { photo, title, des, minOrderQuantity, availableQuantity } = tool;
    return (
        <div class="card w-full shadow-xl">
            <figure>
                <img src={photo} alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>{des}</p>
                <p>Minimum Order quantity: {minOrderQuantity} pieces</p>
                <p>available quantity: {availableQuantity} pieces</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTool;
