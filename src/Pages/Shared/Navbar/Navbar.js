import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div class="navbar bg-secondary lg:px-16 px-6">
            <div class="navbar-start">
                <a class="uppercase text-4xl text-neutral font-semibold tracking-wider">
                    hello
                </a>
            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end block lg:hidden">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-secondary"
                    >
                        <li>
                            <a className="capitalize font-light text-neutral text-xl">
                                Item 1
                            </a>
                        </li>
                        <li>
                            <a className="capitalize font-light text-neutral text-xl">
                                Item 2
                            </a>
                        </li>
                        <li>
                            <a className="capitalize font-light text-neutral text-xl">
                                Item 3
                            </a>
                        </li>
                    </ul>
                </div>
                {/* large menu */}
                <ul class="menu menu-horizontal p-0 hidden lg:flex">
                    <li>
                        <a className="capitalize font-light text-neutral text-xl">
                            Item 1
                        </a>
                    </li>
                    <li>
                        <a className="capitalize font-light text-neutral text-xl">
                            Item 2
                        </a>
                    </li>
                    <li>
                        <a className="capitalize font-light text-neutral text-xl">
                            Item 3
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
