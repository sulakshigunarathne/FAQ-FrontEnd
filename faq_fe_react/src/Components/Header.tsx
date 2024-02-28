import React from 'react';
import MyProfileComponent from './UserProfile';
import logo from "../Assets/logo_main.png";
const Header = () => {
    return(
        <header className="bg-white sticky top-0 mx-auto !z-40 flex w-full items-center justify-between border-b border-gray-500 p-8 ">
            <img src = {logo} alt="logo" className="w-20 h-12 mr-2"/>
            <h1 className="text-4xl font-bold ">QuePax</h1>
            <MyProfileComponent/>
            
        </header>
        
    );
}

export default Header;
