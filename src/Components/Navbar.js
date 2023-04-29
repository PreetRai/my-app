import React from 'react';

import News from './news/news';
import {AiOutlineHome} from "react-icons/ai";
function Navbar() {
    return (<nav className="navbar">
        <a href="/home" className='navbtn'>
            <i>
                <AiOutlineHome/ ></i>Home</a>
                <News/>
                <div id="tweet-container"></div>
        </nav>
        );
}

export default Navbar;