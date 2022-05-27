import React from "react";

const Blog = ({ blog, indexValue }) => {
    const { question, answer } = blog;
    return (
        <div className="card w-full shadow-xl mb-8">
            <div className="card-body">
                <h2 className="card-title text-secondary text-xl md:text-2xl font-semibold">
                    {indexValue + 1}. {question}
                </h2>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default Blog;
