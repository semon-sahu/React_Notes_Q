import { createSlice } from '@reduxjs/toolkit'



let cartslice = createSlice({
    name:"cart",
    initialState :{
        cartitems:[]
    },
    reducers:{
        additem:(state,action)=>{
            state.cartitems.push(action.payload)
        },
        clearcart : (state)=>{
            state.cartitems.length = 0
        }
    }
})
export default cartslice.reducer
export const {additem,clearcart}=cartslice.actions


