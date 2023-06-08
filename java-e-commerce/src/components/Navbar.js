import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='h-full p-4 w-full bg-blue-400 flex justify-end'>
      <div className='flex'>
      <Link href="http://localhost:8097/sakilamdb/swagger-ui/index.html#/">
        <div className=' p-4 rounded ml-4'>
          <p>Swagger</p>
        </div>
        </Link>
      <Link href="/panier">
        <div className='bg-red-500 p-4 rounded ml-4'>
          <p>Panier</p>
        </div>
        </Link>
        <Link href="/">
        <div className=' p-4 rounded ml-4'>
          <p>E-Commerce</p>
        </div>
        </Link>
        
      </div>
    </div>
  )
}

export default NavBar