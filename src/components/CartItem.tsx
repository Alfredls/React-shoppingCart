import React from 'react'
import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoopingCardContext';
import storeItems from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  id: number
  quantity: number
}

export const CartItem = ({ id, quantity }: CartItemProps) => {

  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i=> i.id === id)
  if(item == null) return null


  return (
    <Stack direction='horizontal' gap={2} className="d-flex align-item-center">
      <img src={item?.imgUrl} className="img-cart" />
      <div className='me-auto'>
        <div>
          <span className='name-title'>{item?.name}</span> {"  "}
          {
            quantity > 1 && (
              <span className='text-muted' style={{ fontSize:"0.7rem"}}>
                {quantity}
              </span>
            )
          }
        </div>
        <div className='text-muted' style={{fontSize: "0.7", letterSpacing: "-1px"}}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>

      <Button variant="outline-danger" size="sm" onClick={()=>removeFromCart(item.id)}>
        &times;
      </Button>
    </Stack>
  )
}
