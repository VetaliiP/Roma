import { FC } from 'react';
import { useState, useEffect } from "react";

export const Manifesto: FC = () => {

    const [gradientPos, setGradientPos] = useState({ x: "50%", y: "50%" });
    const [isMouseInside, setIsMouseInside] = useState(false);

    const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - left) / width) * 100;
        const y = ((event.clientY - top) / height) * 100;

        setGradientPos({ x: `${x}%`, y: `${y}%` });
        setIsMouseInside(true);
    };
    const handleMouseLeave = () => {
        setIsMouseInside(false);
    };

    // Плавный возврат в центр
    useEffect(() => {
        if (!isMouseInside) {
            const interval = setInterval(() => {
                setGradientPos((prev) => ({
                    x: `${parseFloat(prev.x) + (50 - parseFloat(prev.x)) * 0.1}%`,
                    y: `${parseFloat(prev.y) + (50 - parseFloat(prev.y)) * 0.1}%`,
                }));
            }, 32);

            return () => clearInterval(interval);
        }
    }, [isMouseInside]);
    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='text-xl'> <strong>My manifesto</strong></div>
                <div className='py-12 font-bold text-2xl'> "I am the Misha & Roma" </div>
                <div className='text-4xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="url(#dynamicGradient)" className="bi bi-joystick" viewBox="0 0 16 16" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <defs>
                            <radialGradient id="dynamicGradient" cx={gradientPos.x} cy={gradientPos.y} r="70%">
                                <stop offset="0%" stopColor=" #FFFFFF" />
                                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.4)" />
                            </radialGradient>
                        </defs>
                        <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2" />
                        <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23" />
                    </svg>
                </div>
            </div>
        </div>
    )
}