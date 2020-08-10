import React from 'react'
import './dropdown.scss'
import Cartitems from '../cart_items/cart_items'
import {connect} from 'react-redux'
import {TOggleNav} from '../../redux/cartItems/cartItems.action'
import CancelSvg from '../pictures/close.svg'
import {Link} from 'react-router-dom'


const Dropdown =({CartItems, itemsCounts,TOggleNav,show,total,shopItems})=>{
   
    let navbox = 'nav'
    if ({show}){navbox = 'navSide nav'}

    const Total = (total  + 4.99).toFixed(2);

    return (
        <div className="dropdown">
            
      
    <div className={navbox}>
        <div className="CancelSvgBox">
        <div className="CancelSvg" onClick={TOggleNav}>
    <img src={CancelSvg} alt="cancel svg" className="canxelimg"/>
</div>
<span className="downText">BASKET ({itemsCounts})</span>
        </div>
      
        <div className="cart_items">

{
      CartItems.length ?  
    (     CartItems.map(item=> (<Cartitems key={item.id} item={item}/>))

   )
     :
    (<div className ="CartItems-text"> 
    <div className="cart-text" id='cart-text'>Nothing here? </div>
    <span>Explore & get inspired!</span>
    <button className="cart-btn">Explore</button>
    </div>)
    }
    </div>
{

}

<div className="procduct-btn" >
     <div className="product-shipping">
    <div className="product">
        <span>Products</span>
        <span className="price">{total} EURO</span>
    </div>
<div className="line"></div>
    <div className="shipping">
        <span>Shipping</span>
        <span className="price">4.99 EURO</span>
    </div>
    <div className="total">
        <span>total</span>
<span className="price">{Total} EURO</span>
    </div>
    </div>
<Link to="/checkout" className="chekoutLink">
<span className="checkoutText"> go to checkout </span>

</Link>
</div>
    </div> 


    </div>
)
}
const MapDistchToProps = dispatch =>({
    TOggleNav:()=>dispatch(TOggleNav())
})

const MapStateToProps = ({Cart:{CartItems} }) =>({
    itemsCounts:CartItems.reduce((accumulatedQuantity,CartItems) =>
    accumulatedQuantity + CartItems.quantity, 0) ,

    total: CartItems.reduce((accumulatedQuantity,CartItems) =>
     accumulatedQuantity + CartItems.quantity * CartItems.price, 0) ,
     CartItems
})
export default connect(MapStateToProps,MapDistchToProps)(Dropdown);