import '../app/styles/globals.scss'
import  Navbar from '../components/Navbar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
    
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head>
        <title>Best ecommerce website - Nextjs</title>
      </Head>
      <Navbar />
      <main className='container'>{children}</main>
    </>
  )
}