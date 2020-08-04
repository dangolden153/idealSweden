import React from 'react'
import './shopPage.scss'
import {connect} from 'react-redux'
import {AddItems} from '../../redux/cartItems/cartItems.action'


const ShopPage = ({item,AddItems }) => {
    const {imageurl} = item
    return(
    <div className="shopPage">
        <div className="img_container">
        <img src={imageurl} alt="shop img" className='img'/>
        </div>
<button className="btn" onClick={()=>AddItems(item)}>click here</button>
    </div>
)}

const MapDispatchToProps = dispatch =>({
    AddItems:item =>dispatch(AddItems(item))
})
export default connect(null,MapDispatchToProps)(ShopPage);