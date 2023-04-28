import React from 'react';

import News from './news/news';
import {AiOutlineHome} from "react-icons/ai";
function Navbar() {
    return (<nav className="navbar">
        <a href="/home" className='navbtn'>
            <i>
                <AiOutlineHome/ ></i>Home</a>
        </nav>
        );
}

export default Navbar;