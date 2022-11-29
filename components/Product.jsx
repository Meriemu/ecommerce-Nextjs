import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Product = ({ product }) => {
  const { id, title, image, price } = product;
  return (
    <div className='card product__item'>
      <h2> { title }</h2>
      <p> { price }</p>
      <div>
        <Image src={ image } priority={id} width='200' height='200' alt={'product '+ id} />
      </div>
      <Link href={`products/${id}`} className="stretched-link product__details"> More details </Link>
    </div>
  )
}

export default Product