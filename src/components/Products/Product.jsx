import React from 'react'

function Product({product}) {
  return (
    <div className='w-[350px] p-2 m-2 border rounded-md relative cursor-pointer'>
        <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{product?.price} <span>TL</span></div>
        <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image}></img>
        <div className='text-center px-3 mt-3 text-xl font-bold'>{product?.title}</div>
    </div>
  )
}

export default Product
