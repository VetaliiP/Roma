import { FC, useState, useEffect, useRef } from 'react';
import styled from './Sidebar.module.css'; // Здесь можно использовать ваш файл с CSS, или использовать Tailwind CSS.

interface SidebarProps {
    description: string;
}

export const Sidebar: FC<SidebarProps> = ({ description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null); // Ссылка на боковое меню

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    // Обработчик кликов вне бокового меню
    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setIsOpen(false); // Закрываем меню, если клик был вне его
        }
    };

    // Добавляем и удаляем обработчик кликов на документе
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Очистка обработчиков при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            <button onClick={toggleSidebar} className={`${styled.menu_button} cursor-pointer`}>
                Details
            </button>
            <div
                ref={sidebarRef}
                className={`${styled.sidebar} ${isOpen ? `${styled.open}` : ''}`}
            >
                <button onClick={toggleSidebar} className={`${styled.close_button}`}>
                    ✖
                </button>
                <ul>
                    <li>This is {description}</li>
                </ul>
            </div>
        </div>
    );
};


