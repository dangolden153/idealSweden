import React,{Component} from 'react'
import Nav from '../pictures/nav.svg'
import Search from '../pictures/search.svg'
import Love from '../pictures/love.svg'
import Bag from '../pictures/bag.svg'
import {ReactComponent as NavIcon} from '../../Assets/bag.svg'
import { TOggleNav,toggleNavBar } from '../../redux/cartItems/cartItems.action'
import {ToggleSideBar} from '../../redux/hide/hide.action'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {SelectItemCount} from '../../redux/cartItems/cartItems.selector'
import {toggleNav} from '../../redux/favourite/favourite.action'
import {selectItemCounts,selectFavItems} from '../../redux/favourite/favourite.selector'



import './upNav.scss'

const UpNav = ({TOggleNav, itemcounts,toggleNav,favitemCounts,favouriteItems,ToggleSideBar})=>{



return (
    <div className="upNav">
<div className="firstcont">
    <div className="firstbox">
    <div className="search">
    <img onClick={ToggleSideBar} src={Nav} alt="" className="svgimg"/>
</div>
<div className="search">
    <img src={Search} alt="" className="svgimg"/>
</div>

    </div>
   
    
    <div className="secbox">IDEAL OF SWEDEN</div>
    <div className="thirdbox">

       <div className="iphone">iphone 11 pro</div> 
       <div className="lovesvg" onClick={toggleNav}>
           <img src={Love} alt="love svg" className="svgimg"/>
           {
     favouriteItems.length ? <span className="favitem-count">{favouriteItems.length}</span>
            : null
           }

         
            </div>
       <div className="lovesvg" onClick={TOggleNav}>
           <NavIcon className='svgimg'/>
           <span className="item-count">{itemcounts}</span>
       </div>
        </div>
</div>


<div className="firstLinkcont">
   <a className="link">for her</a>
    
 <div className="secbox">
     <a href="#" className="link">phone cases</a>
     <a href="#" className="link">phone accessories</a>
     <a href="#" className="link">airpod cases</a>
     <a href="#" className="link">charging</a>
     <a href="#" className="link">bag</a>
     <a href="#" className="link">accessories</a>
     <a href="#" className="link">sale</a>
 </div>
    <div className="thirdbox">
    <a href="#" className="link">track order</a>
</div>

</div>

    </div>
)}
const MapDistchToProps = dispatch =>({
    TOggleNav:()=>dispatch(TOggleNav()),
    toggleNav: ()=> dispatch(toggleNav()),
    ToggleSideBar: ()=> dispatch(ToggleSideBar()),
})

const MapStateToProps = createStructuredSelector({
    itemcounts: SelectItemCount,
    favitemCounts: selectItemCounts,
    favouriteItems: selectFavItems
})
export default connect(MapStateToProps,MapDistchToProps)(UpNav);