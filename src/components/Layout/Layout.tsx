import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Layout: FC = () => {
    return (

        <div className='page-wrapper'>
            <Header />
            <main>
                <Outlet />
            </main>

        </div>

    )
}