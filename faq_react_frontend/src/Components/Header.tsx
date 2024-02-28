import React from 'react';
import MyProfileComponent from './UserProfile.tsx';
const Header = () => {
    return(
        <header className="bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8 ">
            <img src = "./Assets/Images/logo_main.png" alt="logo"className="w-20 h-12 mr-2"/>
            <h1 className="text-4xl font-bold ">QuePax</h1>
            <MyProfileComponent/>
            
        </header>
        
    );
}

export default Header;
