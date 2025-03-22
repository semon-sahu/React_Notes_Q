import React from 'react'
import myimage from './assets/react.svg'
import {useDispatch, useSelector} from 'react-redux'

const Product = () => {
let storedata=useSelector((store)=>store.cart.cartitems)
let datadispatch=useDispatch()

    let cards = [
      {
        id: 1,
        name: "Laptop",
        price: 12000,
        pimg: myimage,
      },
      {
        id: 2,
        name: "Mobile",
        price: 4000,
        pimg: myimage,
      },
    ];

    function  handlecart(e){
      datadispatch(additems(e))
    }
  return (
    <div>
      <h1>Cart item - {storedata.length}</h1>
      {
        cards.map((e)=>{
            return<>
            <div style={{border:"2px solid black"}}> 
                <img src={e.pimg} alt="" />
                <h2>Product name {e.product}</h2>
                <h3>Price {e.price}</h3>
                <button onClick={()=>handlecart(e)}>add to cart</button>
            </div>
            </>

        })
      }
    </div>
  )}

export default Product
