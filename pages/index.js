import React from 'react'
import Product from '../components/Product'
import Layout from '../components/layout'

const Page = ({products}) => {
  return (
    <div>
      <h1>Homepage 1</h1>
      <div className='products'>
        {
          products.map(data => <Product product={data} key={data.id} />)
        }
      </div>
    </div>
  )
}

export default Page

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
       <Product />
    </Layout>
  )
}


export async function getStaticProps () {
  const req = await fetch('https://fakestoreapi.com/products');
  const products = await req.json();

  return {
    props: {
      products
    }
  }
}