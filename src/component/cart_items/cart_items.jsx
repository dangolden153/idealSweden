import React from 'react'
import './cart_items.scss'
import {connect} from 'react-redux' 
import {createStructuredSelector} from 'reselect'
import {SelectCartitems} from '../../redux/cartItems/cartItems.selector'
import {ReactComponent as CancelSvg} from '../../component/pictures/close.svg'
import {ReactComponent as LoveSvg} from '../../component/pictures/love.svg'
import {RemoveItems} from '../../redux/cartItems/cartItems.action'


const Cartitems =({item, RemoveItems}) =>{
    const {text,subText,price,stock,navimageUrl,quantity} = item
    return (
    <div className="cartitem">

        <div className="cartitem-img">
        <img src={navimageUrl} alt="cartitem img" className="img"/>
        </div>
        <div className="flex">
            <div className="stock-box">
            <div className="stock">{stock} </div>
         </div>
         <a href="#" className='textLink'>
         <div className="text">{text}</div>
         <div className="subtext">{subText}</div>
         </a>
         <div className="select-price">
              <select name="select" id="price" className="select">             
               <option value="price" className="options">{quantity}</option>
               <option value="price" className="options">1</option>
               <option value="price" className="options">2</option>
               <option value="price" className="options">3</option>
               <option value="price" className="options">4</option>
               <option value="price" className="options">5</option>
               </select> 
         <div className="price">{price} EURO</div>

         </div>
        </div>
       
       <div className="thirdSection">
           <CancelSvg className='CancelSvg' onClick={()=>RemoveItems(item)}/>
           <LoveSvg className="lovesvg" />
       </div>
        
    </div>
)}

const MapDispatchToProps = dispatch =>({
    RemoveItems: items =>dispatch(RemoveItems(items))
})

const MapStateToProps = createStructuredSelector({
    cartitem:SelectCartitems
})
export default connect (MapStateToProps,MapDispatchToProps) (Cartitems)