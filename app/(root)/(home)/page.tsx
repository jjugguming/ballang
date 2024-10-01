import { getProducts } from '@/api/ballang.api';
import Link from 'next/link';
import React from 'react'

async function HomePage() {
  const products = await getProducts();
  
  return (
    <>
    <h1 className= 'text-center font-bold text-4xl mb-8 mt-20'>Trending</h1>
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 m-10'>
      {products.map((product)=>(
        <li key={product.id}>
           <Link href={`/product/${product.id}`}>
             <img 
             src={product.imgSrc}
             alt={product.id}
             />
             <h2 className='font-bold text-lg'>
               {product.brand.nameEn}
             </h2>
             <p className='font-normal text-lg'>
               {product.name}
             </p>
             <h2 className='font-semibold text-lg text-decoration: line-through text-red-500 inline-block'>
             ￦ {product.originalPrice.toLocaleString()}
             </h2>
             <h2 className='font-semibold text-lg inline-block py-5 px-2'>
             ￦{product.price.toLocaleString()}
             </h2>
           </Link>
          </li>
      ))}
    </ul>
    
    </>
  )
}

export default HomePage;
