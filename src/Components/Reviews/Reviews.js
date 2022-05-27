import React from "react";
import Review from "../Review/Review";
import Slider from "react-slick";
import { useQuery } from "react-query";
import LoadingCom from "../Loading/LoadingCom";

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery("reviews", () =>
        fetch("http://localhost:5000/reviews").then((res) => res.json())
    );

    // for slider =====
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // cssEase: "linear",
        // pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 745,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    // ========= Rendering part ===========
    if (isLoading) {
        return <LoadingCom />;
    }
    return (
        <div className="my-16">
            <h2 className="text-center text-4xl sm:text-5xl text-primary  capitalize font-semibold">
                customer <span className="text-secondary">reviews</span>
            </h2>
            <div className=" px-8 lg:px-16 mt-10">
                <Slider {...settings}>
                    {reviews?.map((review) => {
                        return <Review key={review.id} review={review} />;
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;
