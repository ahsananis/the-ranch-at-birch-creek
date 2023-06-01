import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from 'src/styles/custom.module.scss';


function Layout(props) {
  const { children } = props
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
