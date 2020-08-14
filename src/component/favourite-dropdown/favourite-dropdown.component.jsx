import React  from 'react'
import Favitems from '../fav-cartItems/fav-cartItems.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {ReactComponent as CancelSvg} from '../pictures/close.svg'
import { selectItemCounts,selectFavItems} from '../../redux/favourite/favourite.selector'
import {toggleNav} from '../../redux/favourite/favourite.action'

import {Nav, CancelSvgBox, DownText,Cart_items,Cancelbox,Span} from './favourite-dropdown.styles'

const Favouritedropdown =({favouriteItems,toggleNav})=>{
   
   
    return (
                  
    <Nav>
        <CancelSvgBox>
        <Cancelbox>        
        <CancelSvg onClick={toggleNav} height='15px' width='15px'/>
        </Cancelbox>
<DownText>FAVOURITES <Span>({favouriteItems.length})</Span></DownText>
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
    toggleNav:()=>dispatch(toggleNav()),

})

const MapStateToProps = createStructuredSelector({
     favouriteItems: selectFavItems,
     itemsCounts: selectItemCounts
})
export default connect(MapStateToProps,MapDistchToProps)(Favouritedropdown);



