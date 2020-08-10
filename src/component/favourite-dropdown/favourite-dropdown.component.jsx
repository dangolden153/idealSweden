import React  from 'react'
import Favitems from '../fav-cartItems/fav-cartItems.component'
import {connect} from 'react-redux'
import {TOggleNav} from '../../redux/cartItems/cartItems.action'
import {ReactComponent as CancelSvg} from '../pictures/close.svg'
import {toggleNav} from '../../redux/favourite/favourite.action'

import {Nav, CancelSvgBox, DownText,Cart_items,Cancelbox} from './favourite-dropdown.styles'

const Favouritedropdown =({favouriteItems, itemsCounts,toggleNav,total})=>{
   
   
    const Total = (total  + 4.99).toFixed(2);

    return (
                  
    <Nav>
        <CancelSvgBox>
        <Cancelbox>        
        <CancelSvg onClick={toggleNav} height='15px' width='15px'/>
        </Cancelbox>
<DownText>FAVOURITES ({itemsCounts})</DownText>
        </CancelSvgBox>
      
        <Cart_items>
{
     favouriteItems.map(item=> (<Favitems key={item.id} item={item}/>))
 }
    </Cart_items>



    </Nav> 


)
}
const MapDistchToProps = dispatch =>({
    TOggleNav:()=>dispatch(TOggleNav()),
    toggleNav:()=>dispatch(toggleNav()),

})

const MapStateToProps = ({Favourite:{favouriteItems} }) =>({
     favouriteItems
})
export default connect(MapStateToProps,MapDistchToProps)(Favouritedropdown);



