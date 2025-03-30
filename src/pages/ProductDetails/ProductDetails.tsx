import { FC } from 'react';
import { useLocation } from "react-router-dom";

export const ProductDetail: FC = () => {

    const location = useLocation();
    const product = location.state;

    return (
        <section className='flex-1 flex flex-col p-4'>

            <div className='flex-1 flex flex-col'>
                <div className='flex-1 flex md:flex-row flex-col '>
                    <div className={`w-[60%] relative flex justify-center items-center`}>
                        <img src={product.image} className='min-w-[200px] max-w-[400px] contain-content'></img>
                    </div>
                    <div className='w-[40%] flex flex-col justify-around items-start'>
                        <div >
                            <span className='text-2xl font-bold'>{product.name}</span>
                        </div>
                        <div className='flex-1'>

                        </div>
                        <div className='flex-2 flex flex-col justify-center'>
                            <span>Тип бумаги</span>
                            <span>Количество на листе</span>
                            <span>Размер</span>
                            <span>Копий</span>
                        </div>
                        <div>
                            <button className=' rounded-2xl py-2 px-6 text-xl border-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>
                                Buy-Buy
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex-4 p-8 flex justify-center'>
                    description
                </div>
            </div>
        </section>
    )
}