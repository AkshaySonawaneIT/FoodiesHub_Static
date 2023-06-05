import {
    Link, useLocation
} from 'react-router-dom';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons";

function Navbar() {

    const [showSidebar, setshowSidebar] = useState(false);
    const location = useLocation();
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    var closeSideBar = () => {
        setshowSidebar(false);
    }

    return (
        <>
            <div className='navbar container'>
                <Link to="/" className='logo'>F<span>oo</span>diesHub</Link>
                <div className="nav-links">
                    {links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    ))}
                    {/* <a href="#!">Home</a>
                    <a href="#!">Recipes</a>
                    <a href="#!">Settings</a> */}
                </div>
                <div onClick={() => setshowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar links={links} closeSideBar = {closeSideBar} />}
        </>
    )
}

export default Navbar
