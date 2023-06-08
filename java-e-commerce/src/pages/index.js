import React, { useState, useEffect, useContext } from 'react';
import { PanierContext } from '@/context/panierContext';
import Image from 'next/image';

const items = [
  {
    id: 1,
    name: 'Ayoub',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 2,
    name: 'Mael',
    img: 'https://pbs.twimg.com/profile_images/1370724689140723713/QHRoSvxL_400x400.jpg'
  },
  {
    id: 3,
    name: 'Ahmed',
    img: 'https://pbs.twimg.com/profile_images/1623992191268839424/afgp0HTj_400x400.jpg'
  },
  {
    id: 4,
    name: 'Khais',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 5,
    name: 'Nafise',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 6,
    name: 'Samy',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 7,
    name: 'Marine',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 8,
    name: 'Samina',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 9,
    name: 'Jonas',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 10,
    name: 'Marc',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  }
];

const imageLoader = (src) => {
  return src;
}


export default function Home() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8097/sakilamdb/products');
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData(); 

  //   return () => {
  //   };
  // }, []);

  const { panier, setPanier } = useContext(PanierContext);

	const handleClick = (produit) => {
		setPanier([...panier, produit]);
	};

  return (
    <div className='h-full'>
      <div className="grid grid-cols-3 gap-2 px-4 pt-8">
        {items.map((item)=>{
          return (
            <div key={item.id} className=' w-full bg-gray-400 p-4 flex  justify-center'>
              <div className='flex flex-col justify-center'>
                  <Image
                      src={imageLoader(item.img)}
                      alt="logo" 
                      width={400}
                      height={400}
                  />
                <p className='text-center text-xl'>
                {item.name}
                </p>
                <div className='bg-green-600 p-4 rounded text-center text-xl' onClick={() => handleClick(item)}>
                  <p>Ajouter au panier</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};
