import React from 'react'
import { Card,Button } from 'react-bootstrap'
import formatCurrency from '../utils/formatCurrency'
import {useShoppingCart} from '../context/ShoppingCartContext'

const StoreItem = ({ id, name, price, imgUrl }) => {
    const {getQuant, increaseQuant, removeFromCart, decreaseQuant} = useShoppingCart()
    const quant = getQuant(id)

  return (
    <Card className='h-100'>
        <Card.Img variant='top' src={imgUrl} height ='200px' style={{ objectFit: 'cover'}}/>
        <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                <span className>{name}</span>
                <span className="ms-2 text-muted">&#8358;{formatCurrency(price)}</span>
            </Card.Title>
            <div className='mt-auto'>
                {quant === 0 ? (<Button className='w-100' onClick={() => increaseQuant(id)}> + Add to cart </Button>) : <div className='d-flex align-items-center flex-column' style={{gap : '.5rem'}}>
                <div className='d-flex align-items-center justify-content-center' style={{gap : '.5rem'}}>
                  <Button onClick={() => decreaseQuant(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quant}</span>
                    in cart
                  </div>
                  <Button onClick={() => increaseQuant(id)}>+</Button>
                </div>
                <Button variant='danger' size='sm' onClick={() => removeFromCart(id)}>Remove</Button>
                </div>}
            </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem