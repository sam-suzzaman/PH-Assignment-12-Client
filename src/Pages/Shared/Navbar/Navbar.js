import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const menuItems = (
        <>
            <li>
                <NavLink
                    to="/"
                    className="capitalize font-light text-neutral text-xl"
                >
                    home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className="capitalize font-light text-neutral text-xl"
                >
                    about
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className="capitalize font-light text-neutral text-xl"
                >
                    contact
                </NavLink>
            </li>
        </>
    );
    return (
        <div className="navbar bg-secondary lg:px-16 px-6">
            <div className="navbar-start">
                <Link
                    to="/"
                    className="uppercase text-4xl text-neutral font-semibold tracking-wider"
                >
                    hello
                </Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end block lg:hidden">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-secondary"
                    >
                        {menuItems}
                    </ul>
                </div>
                {/* large menu */}
                <ul className="menu menu-horizontal p-0 hidden lg:flex">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
