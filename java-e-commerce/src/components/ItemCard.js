import Image from 'next/image'

const imageLoader = (src) => {
    return src;
  }

const ItemCard = (item, handleClick) => {
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
          <Button
            // className='flex-1'
            onClick={() => handleClick(produit)}
          >
          {/*On utilise cette syntaxe pour eviter de regener en boucle les components et de mettres des valeurs inutilement*/}
            ajouter
          </Button>
          </p>
        </div>
      </div>
    )
  }
  
  export default ItemCard;