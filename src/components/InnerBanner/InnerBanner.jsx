import React, { Fragment } from 'react'
import styles from './InnerBanner.module.scss'
import { Container, Row, Col} from 'react-bootstrap'

function InnerBanner(props) {

    const {bgclass, backgroundimage, title} = props
    return (
        <Fragment>
            <section className={`${styles['innerBannerMain']} ${styles[bgclass]}`} style={{ backgroundImage: `url("${backgroundimage}")` }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className={styles['innerBannerHeading']}>
                                <h2>{title}</h2>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </Fragment>
    )
}

export default InnerBanner


// DISPLAY INNER BANNER COMPONENTS

{/* <InnerBanner backgroundimage="./images/about-banner.png" title="About Us" /> */}

