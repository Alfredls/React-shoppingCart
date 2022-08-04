import React from 'react'
import { Col } from 'react-bootstrap'
import imgCard from '../../public/assets/images/card1.png'
import Button from 'react-bootstrap/Button'

export const SliderCard = () => {
  return (
    <>
      <Col className="card-img"  sm>
          <img src={imgCard} alt="img card"></img>
        </Col>
        <Col className='bg-card' sm >
          <h2 >Online</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eaque laborum incidunt non consectetur consequatur animi hic quos dignissimos.</p>
          <div>
            <Button variant="primary" size="lg">Click</Button>{' '}
            <Button variant="outline-info" size="lg" >Info</Button>{' '}
          </div>
        </Col>
    </>
  )
}
