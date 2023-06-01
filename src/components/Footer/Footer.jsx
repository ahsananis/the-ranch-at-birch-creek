import React from 'react';
import styles from './Footer.module.scss'
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { BsPerson } from "react-icons/bs";
 
function Footer() {
  return (
    <div>
      <div className={styles['FooterMain']} style={{ backgroundImage: 'url("/images/footer-background.png")' }}>
      <div className={styles['Footer-col']}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={styles['footerLogo']}>
               <Image src={'/images/Footer-Logo-New.png'} className={["footer-Logo-img"]} width={272} height={272} alt={"test"} />
              </div>
            </Col>

            <Col md={3}> 
              <div className={styles['Footer-Nav']}>
                <ul className={styles['Nav-Footer-Menu']}>
                  <li><Link href={'/'}>Home</Link></li>
                  <li><Link href={'/about'}>Olive Orchard</Link></li>
                  <li><Link href={'/destinations'}>Equestrian Center</Link></li>
                  <li><Link href={'/faqs'}>Event Center</Link></li>
                </ul>
              </div>
            </Col>

            <Col md={4}>
              <div className={styles['FooterSecondContent']}>
                <p>We are happy to answer any questions or inquiries you might have about The Ranch at Birch Creek</p>
                <Link href="/">Contact Us</Link>
              </div>
            </Col>

            <Col md={5}>
              <div className={styles['FooterSecondContent']}>
                <p>A lot will be happening this year at the ranch. Stay caught up with our latest endeavors as we extend the reach and legacy of the ranch.</p>
                <Link href="/">Newsletter</Link>
              </div>
            </Col>
          </Row>
          <Row className={styles['copyRightMain']}>
            <Col md={12}>
              <div className={styles['Footer-CopyRigth-Sec']}>
                <p>© Copyright 2023 <Link href="/">BOP Around Travel</Link> All Rights Reserved. Designed & Developed By Dallas Web Design Company <Link href="https://www.appverticals.com/" target={'_blank'}>App Verticals</Link></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </div>
  )
}

export default Footer
