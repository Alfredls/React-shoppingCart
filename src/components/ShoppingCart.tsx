import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from '../context/ShoopingCardContext';
import { CartItem } from "./CartItem";
import { formatCurrency } from '../utilities/formatCurrency';
import storeItems from "../data/items.json"

type useShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({isOpen}: useShoppingCartProps){
  const { closeCart, cartItems } = useShoppingCart()
  return(
    <Offcanvas show={isOpen} onHide={closeCart} placement="end" >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="txt-color" >Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="txt-color">
          <Stack gap={3}>
            {
              cartItems.map(item =>(
                <CartItem key={item.id} {...item} />
              ))
            }
            <div>
              Total {
                formatCurrency(cartItems.reduce((total, cartItem)=>{
                  const item = storeItems.find(i => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
                )
              }
            </div>
          </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}
