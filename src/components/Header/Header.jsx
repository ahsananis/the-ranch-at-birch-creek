import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./Header.module.css"
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <div className={styles["headerMain"]}>
      <Navbar bg="light" variant="light" className={styles['navbarCus']}>
        <Container>
          <Navbar.Brand href="#home" className={styles["headerMainLogo"]}>
            <Image src={'/images/Logo.png'} className={["Logo-img"]} width={167} height={167} alt={"test"} ></Image>
          </Navbar.Brand>
          <Nav className={styles['headerNavLink']}> 
            <Link href="/">Home</Link>
            <Link href="/about">Olive Orchard</Link>
            <Link href="/">Equestrian Center</Link>
            <Link href="/">Event Center</Link>
            <Link href="/">Contact Us</Link>
            {/* <Nav.Link href="/about">Olive Orchard</Nav.Link>
            <Nav.Link href="">Equestrian Center</Nav.Link>
            <Nav.Link href="">Event Center</Nav.Link>
            <Nav.Link href="">Contact Us</Nav.Link> */}
          </Nav>
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
