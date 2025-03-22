import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import  cartReducer from './Cartslice'


const Appstore = configureStore({
    reducer:{
        cart:cartReducer
    }
});

export default Appstore
