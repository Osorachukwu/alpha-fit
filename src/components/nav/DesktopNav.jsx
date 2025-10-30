import React, { use } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function DesktopNav() {
    // let currentPath = window.location.pathname;
    // let currentPath = use.location?.pathname || "/";
    let currentPath = useLocation()?.pathname || "/";
    console.log("Current Path:", currentPath);
    return (
        <div className="navbar bg-gradient-to-b from-gray-950 via-gray-600 to-gray-500 text-neutral-content  hidden md:flex justify-between ">
            <button className="btn btn-ghost text-xl">Alpha fit</button>

            <ul className="menu menu-horizontal rounded-box">
                {[
                    { title: "Home", path: "/" },
                    { title: "Transformations", path: "/transformations" },
                    { title: "1-1 Vip coaching", path: "vip" },
                    { title: "FAQ", path: "faq" },
                    { title: "Contact", path: "contact" },
                ].map((link, index) => (
                    <li key={index} className={`${currentPath === link.path ? "text-yellow-300" : ""}`}>
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