import React from "react";
import userPhoto from "../../assets/avater.jpg";
import Review from "../Review/Review";
import Slider from "react-slick";
import { useQuery } from "react-query";
import LoadingCom from "../Loading/LoadingCom";

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery("reviews", () =>
        fetch("http://localhost:5000/reviews").then((res) => res.json())
    );
    // const reviews = [
    //     {
    //         id: 1,
    //         title: "customer name 1",
    //         reviewText:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid aliquam delectus dolorem error officiis saepe dignissimos, esse odit facere asperiores",
    //         photo: userPhoto,
    //         rating: 4.5,
    //     },
    //     {
    //         id: 2,
    //         title: "customer name 2",
    //         reviewText:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid aliquam delectus dolorem error officiis saepe dignissimos, esse odit facere asperiores",
    //         photo: userPhoto,
    //         rating: 4,
    //     },
    //     {
    //         id: 3,
    //         title: "customer name 3",
    //         reviewText:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid aliquam delectus dolorem error officiis saepe dignissimos, esse odit facere asperiores",
    //         photo: userPhoto,
    //         rating: 5,
    //     },
    //     {
    //         id: 4,
    //         title: "customer name 4",
    //         reviewText:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid aliquam delectus dolorem error officiis saepe dignissimos, esse odit facere asperiores",
    //         photo: userPhoto,
    //         rating: 5,
    //     },
    //     {
    //         id: 5,
    //         title: "customer name 5",
    //         reviewText:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid aliquam delectus dolorem error officiis saepe dignissimos, esse odit facere asperiores",
    //         photo: userPhoto,
    //         rating: 5,
    //     },
    //     {
    //         id: 6,
    //         title: "customer name 6",
    //         reviewText:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid aliquam delectus dolorem error officiis saepe dignissimos, esse odit facere asperiores",
    //         photo: userPhoto,
    //         rating: 5,
    //     },
    //     {
    //         id: 7,
    //         title: "customer name 7",
    //         reviewText:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid aliquam delectus dolorem error officiis saepe dignissimos, esse odit facere asperiores",
    //         photo: userPhoto,
    //         rating: 5,
    //     },
    //     {
    //         id: 8,
    //         title: "customer name 8",
    //         reviewText:
    //             "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid aliquam delectus dolorem error officiis saepe dignissimos, esse odit facere asperiores",
    //         photo: userPhoto,
    //         rating: 5,
    //     },
    // ];
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
