// import React from "react";
import Nav from 'react-bootstrap/Nav'
import Link from "next/link";
import Image from 'next/image'
import   { useRouter }  from 'next/router';

const Navbar = () => {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  const router = useRouter();
  console.log(router)
  return (
    <Nav className="navbar"
    defaultActiveKey="/" 
    // onSelect={handleSelect}
    >
      <Nav.Item className="navbar__logo">
        <Link href="/">
            <Image src="/Logo_Merach.png" alt="Vercel Logo" width={40} height={40} priority={1} />
        </Link>
      </Nav.Item>
      <div className="navbar__right">
        <Nav.Item className={ `navbar__item ${router.pathname=="/" ? 'active' : null }`}>
          <Link href="/">Home</Link>
        </Nav.Item>
        <Nav.Item className={ `navbar__item ${router.pathname=="/about" ? 'active' : null }`}>
          <Link href="/about">About</Link>
        </Nav.Item>
        <Nav.Item className={ `navbar__item ${router.pathname=="/contact" ? 'active' : null }`}>
          <Link href="/contact">Contact</Link>
        </Nav.Item>
        <Nav.Item className="navbar__item">
          <Link href="#"  disabled>
            Disabled
          </Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Navbar;
