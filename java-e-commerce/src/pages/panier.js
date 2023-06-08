import { PanierContext } from "@/context/panierContext";
import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

const imageLoader = (src) => {
  return src;
}

const Panier = () => {
	const { panier, setPanier } = useContext(PanierContext);

	const deleteArticle = (article) => {
		setPanier(
			panier.filter((panier) => panier.id !== article.id)
		);
	};

	return (
    <div className='h-full'>
    <div className="grid grid-cols-3 gap-2 px-4 pt-8">
      {panier.map((item)=>{
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
              <div className='bg-red-600 p-4 rounded text-center text-xl' onClick={() => deleteArticle(item)}>
                  <p>Supprimer du panier</p>
                </div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
	);
};

export default Panier;