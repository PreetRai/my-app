import React from 'react';

import News from './news/news';
import {AiOutlineHome} from "react-icons/ai";
function Navbar() {
    return (<nav className="navbar">
        <ul className="navbar-links">
            <li>
                <a href="/home">
                    <i>
                        <AiOutlineHome/ ></i>Home</a>
                </li>
            </ul>
                < News/>
        </nav>
        );
}

export default Navbar;