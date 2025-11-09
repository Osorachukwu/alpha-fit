import React, { use } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logo-main.png"
export default function DesktopNav() {
    // let currentPath = window.location.pathname;
    // let currentPath = use.location?.pathname || "/";
    let currentPath = useLocation()?.pathname || "/";
    console.log("Current Path:", currentPath);
    return (
        <div className="navbar text-neutral-content hidden md:flex justify-between absolute">
            <Link to="/" className="px-3 py-1">
                <img src={logo} alt="Logo" width={80} />
            </Link>

            <ul className="menu menu-horizontal bg-gray-900 text-gray-500 rounded-box">
                {[
                    { title: "Home", path: "/" },
                    { title: "Transformations", path: "/transformations" },
                    { title: "1-1 Vip coaching", path: "vip-coaching" },
                    { title: "FAQ", path: "faq" },
                    { title: "Contact", path: "contact" },
                ].map((link, index) => (
                    <li key={index} className={`${currentPath === link.path ? "text-secondary-accent" : ""}`}>
                        <Link to={link.path} className="">
                            {link.title}
                        </Link>
                    </li>
                ))}

            </ul>

            <button className="btn btn-ghost text-lg">Members area</button>
        </div>


    )
}