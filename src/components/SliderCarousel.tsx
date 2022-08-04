import React from 'react'
import { Col } from 'react-bootstrap'
import { CarouselSlider } from './CarouselSlider'

export const SliderCarousel = () => {
  return (
    <>
      <Col className="slider-txt" sm={3}>
          <h2 >Home Cart</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eaque laborum incidunt non consectetur consequatur.</p>
        </Col >
        <Col sm={9}>
          <CarouselSlider />
        </Col>
    </>
  )
}
