import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Item {
    id: number;
    name: string;
    image: string;
}

const items: Item[] = [
    { id: 1, name: "#STICKER_PACK №1", image: "/sticker_pack.jpg" },
    { id: 2, name: "#STICKER_PACK №2", image: "/sticker_pack.jpg" },
    { id: 3, name: "#STICKER_PACK №3", image: "/sticker_pack.jpg" },
    { id: 4, name: "#STICKER_PACK №4", image: "/sticker_pack.jpg" },
    { id: 5, name: "#STICKER_PACK №5", image: "/sticker_pack.jpg" },
];

export const Catalogue: FC = () => {
    return (
        <section className='p-4 flex-1 flex '>
            <ul className='flex-1 flex flex-wrap gap-4 justify-center items-center'>
                {items.map((item) => (
                    <li key={item.id} className='size-[45%] border-1 flex flex-row justify-around min-w-[300px] max-w-[400px]'>
                        <Link

                            to={`/catalogue/${item.id}`}
                            className='flex-1 '
                            state={item}
                        >
                            <div className={`h-full w-auto flex justify-between p-2 text-black relative `}>
                                <span>{item.name}</span>
                                <img src={item.image} className='size-full absolute top-[0] left-[0] -z-10  contain-content' ></img>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}