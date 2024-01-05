const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //action
        //function to add items to cart
        addtoCart :(state,action)=>{
            state.push(action.payload)

        },
        //function to remove items from cart
        removeFromCart : (state, action)=>{
            return state.filter(item =>item.id != action.payload)
        },
        //function to empty the cart
        emptyCart:(state)=>{
          return  state = []
        }
    }
})
export const {addtoCart , removeFromCart, emptyCart} = cartSlice.actions

export default cartSlice.reducer