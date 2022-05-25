import React from "react";
import "./Review.css";

import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ review }) => {
    const { title, reviewText, photo, rating } = review;

    return (
        <div className="card card-compact w-80 review-card py-8 mx-auto">
            <img
                src={photo}
                alt="Shoes"
                className="w-20 h-20 mx-auto rounded-full"
            />
            <div className="card-body">
                <h4 className="text-center font-semibold text-xl capitalize text-secondary">
                    {title}
                </h4>
                <p className="text-center px-4 text-base">{reviewText}</p>
                <p className="text-center mt-4">
                    <Rating
                        className="text-base"
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={
                            <FontAwesomeIcon
                                className="text-secondary"
                                icon={faStar}
                            />
                        }
                        readonly
                    ></Rating>
                </p>
            </div>
        </div>
    );
};

export default Review;
