import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[]
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart : (state,action) =>{
        const item = action.payload
        const existingItem = state.cartItems.find((i)=> i.id === item.id);
        if(existingItem){
            const qt = existingItem["qt"];

            const price = existingItem.price;
            existingItem.price = price*(qt+1);
            existingItem["qt"]++;

        }else{
            state.cartItems.push(item)
        }
    }

  },
})


export const {addToCart} = counterSlice.actions
export default counterSlice.reducer