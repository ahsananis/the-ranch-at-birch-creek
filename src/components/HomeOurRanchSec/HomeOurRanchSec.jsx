import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import styles from './HomeOurRanchSec.module.scss';
import Image from 'next/image';

function HomeOurRanchSec() {

  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const video = document.getElementById('video');
    video.play();
    setPlaying(true);

    // hide the play button overlay
    const playButtonOverlay = document.getElementById('playButtonOverlay');
    if (playButtonOverlay) {
      playButtonOverlay.style.display = 'none';
    }
  };

  return (
    <div className={styles['homeOurRanchSec']}>
      <Container>
        <Row>
            <Col md={12}>
                <div className={styles['homeOurRanchMain']}>
                    <h2><span>Welcome to</span> our ranch</h2>
                    <div className={styles['homeOurRanchMainVideo']}>
                    <video id="video" width="100%" height="650"  src="/images/demo-video.mp4" poster="./images/video-cover-new.png" controls />
                      {!playing && (
                        <div id={styles['playButtonOverlay']} onClick={handlePlay}>
                          <img src="/images/play-icon.png" alt="Play" />
                        </div>
                      )}
                      </div>
                      <div className={styles['videoLogo']}>
                        <Image src="/images/Video-Logo-New.png" width={272} height={272} alt="Video-Image.png"></Image>
                      </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeOurRanchSec
