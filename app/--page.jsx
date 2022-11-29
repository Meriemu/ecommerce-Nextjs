
"use client";
import React from 'react'
import Product from '../components/Product'

const Page = ({products}) => {
  return (
    <div> 
      <h1>Homepage 1</h1>
      {
        // products.map(data => console.log(data))
        products.map(data => <Product product={data} key={data.id} />)
        // console.log(products)
      }
      
    </div>
  )
}

export default Page 

// export async function getStaticProps () {
export async function getServerSideProps() {
    const req = await fetch('https://fakestoreapi.com/products');
    const products = await req.json();
  
    return {
      props: {
        products
      }
    }
}