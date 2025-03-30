import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from './Header.module.css'


export const Header: FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const OpenMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <header className='flex flex-col  p-4 font-bold sticky top-0 bg-[#fefefe] z-10'>
            <div className='flex flex-row items-center '>
                <nav className='flex flex-row w-full  sm:justify-center justify-between px-6 '>
                    <NavLink to="/catalogue">
                        <p className='tracking-[2px]'>R O <i>M</i> A</p>
                    </NavLink>
                    <div className='hidden sm:flex flex-row justify-center max-w-lg w-full mx-auto gap-8'>

                        <NavLink to="/catalogue"
                            className={({ isActive }) => isActive ? `${styled.active_link}` : `${styled.not_active_link}`}
                        >
                            <span>Catalogue</span>
                        </NavLink>
                        <NavLink to="/contact"
                            className={({ isActive }) => isActive ? `${styled.active_link}` : `${styled.not_active_link}`}
                        >
                            <span>Contact</span>
                        </NavLink>
                    </div>
                    <div className='hidden sm:flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart-fill cursor-pointer" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                    </div>
                    <div className='sm:hidden flex justify-center items-center cursor-pointer' onClick={OpenMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </div>
                </nav>
            </div>
            <div className={`${isOpen ? 'h-0 text-xs' : 'h-16 text-base'} transition-all duration-300 sm:hidden flex flex-col justify-end`}>
                <p>
                    {isOpen ? 'navigation mobile menu' : ''}
                </p>
            </div>

        </header>
    )
}