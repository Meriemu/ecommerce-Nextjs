// import React from "react";
import Nav from 'react-bootstrap/Nav'
import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

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
        <Nav.Item className="navbar__item">
          <Link href="/">Home</Link>
        </Nav.Item>
        <Nav.Item className="navbar__item">
          <Link href="/about">About</Link>
        </Nav.Item>
        <Nav.Item className="navbar__item">
          <Link href="/contact">Contact</Link>
        </Nav.Item>
        <Nav.Item className="navbar__item">
          <Link href="/DDDDDDD"  disabled>
            Disabled
          </Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Navbar;
