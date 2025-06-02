import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './cartSlice';

const Cart = ({item}) => {
  const dispatch = useDispatch();
  return (
    <div>
         <div className="itemDetail">
              <p className="price">Rs:{item.price}</p>
              <button onClick={()=>dispatch(addToCart(item))} className="addCart">Add to cart</button>
        </div>
    </div>
  )
}

export default Cart