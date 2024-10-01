import { getBrand, getBrands, getProducts } from '@/api/ballang.api'
import Link from 'next/link';
import React from 'react'

async function BallangOnBrandPage({searchParams: { brandId }}) {
  const products = await getProducts();
  const brands = await getBrands();
  const brand = await getBrand(brandId);


  return (
    <>
    <h1 className="text-center font-bold text-4xl mb-5 mt-20">Brands</h1>
    <Link 
    href={`/brands`}
    className={`text-center block text-2xl m-auto mt-20 mb-20 hover:brightness-75 active:brightness-90 
    ${brandId?"text-gray-700":"text-black font-extrabold"}`}>
    ALL
    </Link>

      <ul className='text-center w-[800px] whitespace-nowrap grid sm:grid-cols-3 lg:grid-cols-6 m-auto mb-[140px] gap-y-4'>
  
        {brands.map((brand)=>(
          <li className={`hover:brightness-75 active:brightness-90 ${Number(brandId)===brand.id?"text-black font-extrabold":"text-gray-700"}`} key={brand.id}>
            <Link
            href={`/brands?brandId=${brand.id}`}>
              {brand.nameKr}
              </Link>
            </li>
        ))}
      </ul>
    
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 m-10'>
      {brand?
      brand.map((brand)=>(
        <li key={brand.id}>
          <img 
            src={brand.imgSrc}
            alt={brand.id}
            />
            <h2 className='font-bold text-lg'>
              {brand.brand.nameEn}
            </h2>
            <p className='font-normal text-lg'>
              {brand.name}
            </p>
            <h2 className='font-semibold text-lg text-decoration: line-through text-red-500 inline-block'>
            ￦ {brand.originalPrice.toLocaleString()}
            </h2>
            <h2 className='font-semibold text-lg inline-block py-5 px-2'>
            ￦{brand.price.toLocaleString()}
            </h2>
        </li>
      ))
      :
      products.map((product)=>(
        <li key={product.id}>
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
          </li>
      ))
    }
    </ul>
    </>
  )
}

export default BallangOnBrandPage