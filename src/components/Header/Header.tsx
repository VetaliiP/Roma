import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from './Header.module.css'


export const Header: FC = () => {


    const text = 'Manifesto';

    return (
        <header className='flex flex-row items-center px-4 font-bold'>
            <nav className='flex flex-row w-full p-4 '>
                <NavLink to="/catalogue/12">
                    <p className='tracking-[2px]'>R O <i>M</i> A</p>
                </NavLink>
                <div className='flex flex-row  max-w-lg w-full mx-auto'>
                    <Link to="/" className={`${styled.animated_link} px-4`}
                    >
                        {text.split('').map((letter, index) => (
                            <span key={index}>{letter}</span>
                        ))}
                    </Link>
                    <Link to="/catalogue"
                        className={`${styled.animated_link}`}
                    >
                        <span>Catal</span>
                        <span>ogue</span>
                    </Link>
                    <NavLink to="/store"
                        className={({ isActive }) => isActive ? `${styled.active_link}` : `${styled.animated_link_rotate}`}
                    >
                        Store
                    </NavLink>
                    <NavLink to="/newsletter"
                        className={`${styled.animated_link_spacing}`}
                    >
                        Newsletter
                    </NavLink>
                    <NavLink to="/contact"
                        className={({ isActive }) => isActive ? `${styled.active_link_italic}` : `${styled.animated_link_italic}`}
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>

        </header>
    )
}