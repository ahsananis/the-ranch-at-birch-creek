import React from 'react';
import styles from './Homeslider.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Slider from "react-slick";
import { homeSliderData } from './data'


function HomeSlider() {

    var settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div>

            <Slider {...settings}>



            {homeSliderData.map((list, index) => {
                        return (
                            <div key={index}>
                                <div className={styles['homeBanner']} style={{ backgroundImage: `url("${list.backgroundImage}")` }}>
                                    <Container>
                                        <Row>
                                            <Col md={12}>
                                                <div className={styles['bannerContent']}>
                                                    <h5>{list.smallHeading}</h5>
                                                    <h2>{list.largeHeading}</h2>
                                                    <p>{list.bannerPara}</p>
                                                    <div className={styles['BtnMain']}>
                                                        <Link href="javascript:;" className={styles['btnOne']}><span>Contact Us</span></Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        );
                    })}
                    
            </Slider>
    </div>
  )
}

export default HomeSlider
