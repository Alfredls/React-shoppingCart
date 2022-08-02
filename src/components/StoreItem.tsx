import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemProps ={
  id: number,
  name: string,
  price: number,
  imgUrl: string,
}

export const StoreItem = ({id, name, price, imgUrl}: StoreItemProps) => {

  const quantity: number = 0;

  return (
    <Card className='h-100'>
      <Card.Img
        variant='top'
        src={imgUrl}
        height='200px'
        style={{objectFit:"cover"}} 
      />
      <Card.Body className='d-flex flex-column text-dark'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{ formatCurrency(price) }</span>
        </Card.Title>
        <div className='mt-auto'>
          {
            quantity === 0 
              ? (<Button className='w-100'>+ Add To Card</Button>)
              : (
                <div className='d-flex align-items-center flex-column' style={{gap: "0.5rem"}}>
                  <div className='d-flex align-items-center justify-content-center' style={{gap:"0.5rem"}}>
                    <Button>-</Button>
                    <div>
                      <span className='fs-3'>{quantity}</span> in cart
                    </div>
                    <Button>+</Button>
                  </div>
                  <Button variant='danger' size='sm'>Remove</Button>
                </div>
              )
          }
        </div>
      </Card.Body>
    </Card>
  )
}
