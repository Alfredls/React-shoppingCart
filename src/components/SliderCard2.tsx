import React from 'react'
import { Button, Col } from 'react-bootstrap'
import imgCard from '../../public/assets/images/card2.png'

export const SliderCard2 = () => {
  return (
    <>
      <Col className='bg-card' sm>
        <h2 >Services</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eaque laborum incidunt non consectetur consequatur animi hic quos dignissimos.</p>
        <div>
          <Button variant="primary" size="lg">Click</Button>{' '}
          <Button variant="outline-info" size="lg" >Info</Button>{' '}
        </div>
      </Col>
      <Col className="card-img"  sm>
          <img src={imgCard} alt="img card"></img>
        </Col>
    </>
  )
}
