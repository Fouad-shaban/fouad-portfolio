// import React, { useState } from 'react'

const Navbar = () => {
// const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className=' absolute w-full z-10'>
                <div className="container  flex  items-end justify-between flex-wrap bg-inherit p-6">
                    <a className="logo playwrite text-3xl" href="#">Fouad Portfolio</a>
                    <ul className="nav flex hidden md:flex gap-6 big-shoulders ">
                        <li className="item mr-5">
                            <a className="link" href="#home">Home</a>
                        </li>
                        <li className="item mr-5">
                            <a className="link" href="#about">About</a>
                        </li>
                        <li className="item mr-5">
                            <a className="link" href="#service">Service</a>
                        </li>
                        <li className="item mr-5">
                            <a className="link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="item mr-5">
                            <a className="link" href="#projects">Projects</a>
                        </li>
                        <li className="item mr-5">
                            <a className="link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}
export default Navbar;