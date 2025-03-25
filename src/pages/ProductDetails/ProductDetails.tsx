import { FC } from 'react';
import { useLocation } from "react-router-dom";
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';

export const ProductDetail: FC = () => {

    const location = useLocation();
    const product = location.state;

    return (
        <div className='size-full flex flex-col justify-start items-center pt-[50px]'>
            <div className='w-full flex flex-row justify-between items-center px-4 '>
                <Sidebar description={product.name} />
                <span>{product.name}</span>
                <span>
                    <Link to="/catalogueslider">
                        All products
                    </Link>
                </span>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className={`size-[400px] relative`}>
                    <img src={product.image} className='size-full absolute top-[0] left-[0] -z-10'></img>
                </div>
            </div>
        </div>
    )
}