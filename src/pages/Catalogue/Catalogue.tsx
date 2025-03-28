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
    { id: 4, name: "Banana", image: "/Banana-tree.png" },
    { id: 5, name: "Apple", image: "/Banana-tree.png" },
    { id: 6, name: "Banana", image: "/Banana-tree.png" },
    { id: 7, name: "Apple", image: "/Banana-tree.png" },
    { id: 8, name: "Banana", image: "/Banana-tree.png" },
    { id: 9, name: "Apple", image: "/Banana-tree.png" },
    { id: 10, name: "Banana", image: "/Banana-tree.png" },
    { id: 11, name: "Apple", image: "/Banana-tree.png" },
    { id: 12, name: "Banana", image: "/Banana-tree.png" },
];

export const Catalogue: FC = () => {
    return (
        <div className='mt-[50px]'>
            <ul className='flex flex-wrap gap-4 justify-center'>
                {items.map((item) => (
                    <li key={item.id} className='min-w-[300px] h-[300px] border-1 flex flex-row justify-around'>
                        <Link

                            to={`/catalogue/${item.id}`}
                            className='flex-1 '
                            state={item}
                        >
                            <div className={`h-full w-auto flex justify-between p-2 text-black relative`}>
                                <span>Number: {item.id}</span>
                                <span>{item.name}</span>
                                <img src={item.image} className='size-full absolute top-[0] left-[0] -z-10'></img>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}