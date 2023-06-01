import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './HomeWelcomeSec.module.scss';
import Image from 'next/image';

function HomeWelcomeSec() {
  return (
    <div className={styles['homeWelcomeSecMain']}>
        <Container>
            <Row>
                <Col md={6}>
                    <div className={styles['homeWelcomeLeft']}>
                        <Image src={'/assets/images/welcome-large-img.png'} className={styles['welcomeLargeImage']} width={580} height={621}></Image>
                        <Image src={'/assets/images/welcome-small-img.png'} className={styles['welcomesmallImage']} width={215} height={208}></Image>
                    </div>
                </Col>
                <Col md={6}>
                    <div className={styles['homeWelcomeRight']}>
                        <h4>Welcome To</h4>
                        <h3>The Ranch <span>at birch creek</span></h3>
                        <h4>LIVErmore <i class="fa fa-circle" aria-hidden="true"></i> LIVErmore</h4>
                        <h4>Established in 1911 <i class="fa fa-circle" aria-hidden="true"></i> re-born in 2005</h4>
                        <p>Built on the concept of sustainability, The Ranch At Birch Creek has been re-established
                        and restored to it’s legacy as a working ranch in the Livermore Valley of California.
                        We are proud to offer back to the Livermore Valley this part of it’s agricultural history
                        in a way that will enhance and expand the features of our community.
                        Join us in celebrating this new chapter in the life of The Ranch at Birch Creek.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomeWelcomeSec
