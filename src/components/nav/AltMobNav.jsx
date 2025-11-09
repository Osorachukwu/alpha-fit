import { Link, Menu } from 'lucide-react';
import React from 'react'
import logo from "../../assets/logo-main.png"

export default function AltMobNav() {
    const closeDrawer = () => {
    const el = document.getElementById('my-drawer-1')
    if (el) el.checked = false;
  };
    return (
        <div className="md:hidden drawer">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="navbar bg-base-300">
                    <button className="btn btn-ghost text-xl">
                        <img src={logo} alt="Logo" width={50} />
                    </button>
                    <div className="flex-1"></div>
                    <label htmlFor="my-drawer-1" className="btn drawer-button"><Menu /></label>
                </div>
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu min-h-full w-80 p-4 bg-base-200 text-white">
                    {/* Sidebar content here */}
                    <li><Link to="/contact" style={{color: "white"}} onClick={closeDrawer}>Contact</Link></li>
                    <li><Link to="/contact" onClick={closeDrawer}>Market</Link></li>
                    <li><Link to="/contact" onClick={closeDrawer}>Plans</Link></li>
                    <li><Link to="/contact" onClick={closeDrawer}>Our Service</Link></li>
                    <li><Link to="/contact" onClick={closeDrawer}>Buy/Sell</Link></li>
                    <li><Link to="/contact" onClick={closeDrawer}>Legal</Link></li>
                </ul>
            </div>
        </div>
    )
}
