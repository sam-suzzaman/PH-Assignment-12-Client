import React from "react";
import Blog from "../Components/Blog/Blog";
import useFetch from "../Hooks/useFetch";

const Blogs = () => {
    const blogsData = useFetch("Blogs.json");
    return (
        <section className="blogs-wrapper">
            {/* hero section */}
            <div className="hero bg-secondary border-t-2 border-[#0ba89b] md:py-16 py-6">
                <div className="hero-content text-center px-4">
                    <h1 className=" text-2xl md:text-5xl uppercase text-neutral font-bold">
                        Blog Page
                    </h1>
                </div>
            </div>
            <div className="px-2 md:px-12 my-8 md:my-14">
                {blogsData.map((blog, indexValue) => (
                    <Blog key={blog._id} blog={blog} indexValue={indexValue} />
                ))}
                {/* for code */}
                <div className="card w-full shadow-xl mb-8">
                    <div className="card-body">
                        <h2 className="card-title text-secondary text-xl md:text-2xl font-semibold">
                            5. You have an array of products. Each product has a
                            name, price, description, etc. How will you
                            implement a search to find products by name?
                        </h2>
                        <div className="mockup-code bg-base-200 text-neutral">
                            <pre data-prefix="1">
                                <code>{`const products = [`}</code>
                            </pre>
                            <pre data-prefix="2">
                                <code>{`    { name: "mango", price: 10, des: "sweet" },`}</code>
                            </pre>
                            <pre data-prefix="3">
                                <code>{`    { name: "orange", price: 20, des: "sour" },`}</code>
                            </pre>
                            <pre data-prefix="4">
                                <code>{`    { name: "apple", price: 15, des: "steet" },`}</code>
                            </pre>
                            <pre data-prefix="5">
                                <code>{`];`}</code>
                            </pre>
                            <pre data-prefix="6">
                                <code>{`let searchKey = "g";`}</code>
                            </pre>
                            <pre data-prefix="7">
                                <code>{`const searchResult = products.filter((product) => {`}</code>
                            </pre>
                            <pre data-prefix="8">
                                <code>{`    if (product.name.includes(searchKey)) {`}</code>
                            </pre>
                            <pre data-prefix="9">
                                <code>{`        return product;`}</code>
                            </pre>
                            <pre data-prefix="10">
                                <code>{`    }`}</code>
                            </pre>
                            <pre data-prefix="11">
                                <code>{`});`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
