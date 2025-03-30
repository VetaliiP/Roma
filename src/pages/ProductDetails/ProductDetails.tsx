import { FC } from 'react';
import { useLocation } from "react-router-dom";

export const ProductDetail: FC = () => {

    const location = useLocation();
    const product = location.state;

    return (
        <section className='flex-1 flex flex-col p-4'>
            <div className='w-full flex flex-row justify-center items-center px-4 '>
                <span>{product.name}</span>
            </div>
            <div className='flex-1 flex flex-col'>
                <div className='flex-1 flex md:flex-row flex-col items-center'>
                    <div className={`w-[60%] relative flex justify-center items-center`}>
                        <img src={product.image} className='min-w-[200px] max-w-[400px] contain-content'></img>
                    </div>
                    <div className='w-[40%] flex flex-col'>
                        <span>Тип бумаги</span>
                        <span>Количество на листе</span>
                        <span>Размер</span>
                        <span>Копий</span>
                    </div>
                </div>
                <div className='flex-4 p-8 flex justify-center'>
                    description
                </div>
            </div>
        </section>
    )
}