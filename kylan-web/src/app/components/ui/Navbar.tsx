import React from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export const NavBar = () => {
   
    return (
        <div className="flex items-center justify-between h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="text-3xl font-bold mr-50 text-[#D3AF37]">KYLAN</h1>
            <ul className="flex gap-20">
                <li className=""><a href="#">Home</a></li>
                <li className=""><a href="/aboutus">About Us</a></li>
                <li className=""><a href="/projects">Projects</a></li>
                <li className=""><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );
}
