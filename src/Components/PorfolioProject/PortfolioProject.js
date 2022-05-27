import React from "react";

const PortfolioProject = ({ project }) => {
    const { name, des, siteLink, photo } = project;
    return (
        <div className="card kit-shadow">
            <figure className="px-10 pt-10">
                <img src={photo} alt="project pic" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{des}</p>
                <div className="card-actions">
                    <a
                        href={siteLink}
                        target="_blank"
                        rel="noreferrer"
                        className=" mt-2 btn btn-active btn-primary px-8"
                    >
                        live site
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioProject;
