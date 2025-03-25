import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


export const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    // Состояния для управления рендером страницы и затемнением
    const [isPageVisible, setIsPageVisible] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);

    useEffect(() => {
        // Запуск анимации затемнения
        setIsPageVisible(false);  // Скрываем страницу при переходе
        setIsOverlayVisible(true); // Появляется затемнение

        // Через 500мс, когда анимация завершится, показываем страницу
        const timeout = setTimeout(() => {
            setIsPageVisible(true); // Показываем страницу
            setIsOverlayVisible(false); // Прячем затемнение
        }, 500); // Длительность затемнения

        return () => clearTimeout(timeout); // Очистка таймера при размонтировании
    }, [location]);

    return (
        <AnimatePresence mode="wait">
            {/* Затемнение экрана */}
            {isOverlayVisible && (
                <motion.div
                    key="overlay"
                    className="fixed inset-0 bg-black z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />
            )}

            {/* Страница */}
            {isPageVisible && (
                <motion.div
                    key={location.pathname} // Используем путь для правильной анимации
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
