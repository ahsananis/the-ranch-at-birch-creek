import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './LivingRanchSec.module.scss'

function LivingRanchSec() {
  return (
    <div className={styles['livingRanchMainSec']}>
      <Container>
        <Row>
            <Col md={12}>
                <div className={styles['livingRanchHeadings']}>
                    <h2><span>Living the</span> ranch legacy</h2>
                    <h4>Our vision and plan celebrates our heritage</h4>
                    <p>Our vision and plans for this ranch encompass it’s heritage while promoting it’s legacy as a working ranch. We are proud to present The Ranch at Birch Creek.</p>
                    <p>In order to sustain this legacy., we have established a boutique Olive Orchard producing award winning Olive Oil, a fully featured Premier Equestrian Center, and a beautiful Ranch Styled Event Center. This is our way of extending the Legacy and Tradition of Ranch-Styled Hospitality to our guests.</p>
                </div>
            </Col>
            <Col md={12}>
                <div className={styles['exploreRanchMain']}>
                    <h3>Explore our ranch</h3>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LivingRanchSec
