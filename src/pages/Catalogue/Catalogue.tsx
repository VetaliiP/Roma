import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Item {
    id: number;
    name: string;
    image: string;
}

const items: Item[] = [
    { id: 1, name: "Apple", image: "/Banana-tree.png" },
    { id: 2, name: "Banana", image: "/Banana-tree.png" },
    { id: 3, name: "Apple", image: "/Banana-tree.png" },
    { id: 4, name: "Apple", image: "/Banana-tree.png" },
    { id: 5, name: "Banana", image: "/Banana-tree.png" },
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
                                <span>Number: {item.id}</span>
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