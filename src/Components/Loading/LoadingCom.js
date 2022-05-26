import React from "react";
import "./LoadingCom.css";

const LoadingCom = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="tool-loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default LoadingCom;
