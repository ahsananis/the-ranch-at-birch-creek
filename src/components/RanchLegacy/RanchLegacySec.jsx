import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './RanchLegacySec.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { LegacyData } from './data';


function RanchLegacySec() {
  return (
    <div className={styles['ranchLegacySec']}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles['ranchLegacyHeading']}>
              <h4>Continuing</h4>
              <h3>The Ranch <span>Legacy</span></h3>
              <h4>we love olives <i class="fa fa-circle" aria-hidden="true"></i> we love horses <i class="fa fa-circle" aria-hidden="true"></i> we love hospitality</h4>
            </div>
          </Col>
          <Col md={12}>
            <div className={styles['legagcyGalleryMain']}>
            {LegacyData.map((list, index) => {
              return(
                <div className={styles['galleryInner']} key={list}>
                    <Link href="javascript:;">
                        <div className={styles['galleryInnerImage']} style={{ backgroundImage: `url("${list.backgroundImage}")` }}>
                          <div className={styles['galleryInnerContent']}>
                            <p>{list.para}</p>
                            <h3>{list.heading}</h3>
                            <Image src="/images/ranch-gallery/Vector.png" width={65} height={58} />
                          </div>
                        </div>
                    </Link>
                </div>
                );
            })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RanchLegacySec
