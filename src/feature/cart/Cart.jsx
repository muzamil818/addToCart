import React from 'react'

const Cart = ({price}) => {
  return (
    <div>
         <div className="itemDetail">
              <p className="price">{price}</p>
              <button className="addCart">Add to cart</button>
        </div>
    </div>
  )
}

export default Cart