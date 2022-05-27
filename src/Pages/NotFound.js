import React from "react";
import ErrorBg from "../assets/error.jpg";

const NotFound = () => {
    return (
        <div
            className="w-full min-h-screen"
            style={{
                background: `url(${ErrorBg})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className=""></div>
        </div>
    );
};

export default NotFound;
