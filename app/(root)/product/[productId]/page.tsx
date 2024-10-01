import { getProduct } from '@/api/ballang.api'
import { Products } from '@/types/ballang-api-types'
import React from 'react'

async function productPage({searchParams:{ productId }}) {
  const product = await getProduct(productId) as Products
  
  console.log(product)

  return (
   <>
    <img 
    src="" 
    alt="" />

<div>
      <h1></h1>
      <hr />
      <h1></h1>
  
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
  
      <button>장바구니에 담기</button>
</div>
   </>
  )
}

export default productPage