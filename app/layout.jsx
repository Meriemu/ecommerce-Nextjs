
"use client";
import  Navbar from '../components/Navbar'
import   './styles/globals.scss'
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar /> 
        {children}
      </body>
    </html>
  )
}
