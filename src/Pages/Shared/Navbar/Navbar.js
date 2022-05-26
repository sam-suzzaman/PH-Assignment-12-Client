import React from "react";
import { Link, NavLink } from "react-router-dom";
import firebaseAuth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingCom from "../../../Components/Loading/LoadingCom";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const [user, loading, error] = useAuthState(firebaseAuth);

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
                    to="/order"
                    className="capitalize font-light text-neutral text-xl"
                >
                    purchase
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
            {!user && (
                <>
                    <li>
                        <NavLink
                            to="/login"
                            className="capitalize font-light text-neutral text-xl"
                        >
                            log in
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/register"
                            className="capitalize font-light text-neutral text-xl"
                        >
                            register
                        </NavLink>
                    </li>
                </>
            )}
            {user && (
                <li>
                    <button
                        className="btn btn-ghost capitalize font-light text-neutral text-xl"
                        onClick={() => signOut(firebaseAuth)}
                    >
                        {" "}
                        sign out
                    </button>
                </li>
            )}
        </>
    );

    // ======== Rendering Part ======
    if (loading) {
        return <LoadingCom />;
    }

    return (
        <div className="navbar bg-secondary lg:px-16 px-6">
            <div className="navbar-start">
                <Link
                    to="/"
                    className="uppercase text-xl sm:text-4xl text-neutral font-semibold tracking-wider "
                >
                    kit-shop
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
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-secondary"
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
