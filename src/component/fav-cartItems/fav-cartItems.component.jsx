import React from 'react'
import {connect} from 'react-redux' 
import {createStructuredSelector} from 'reselect'
import {SelectCartitems} from '../../redux/cartItems/cartItems.selector'
import {ReactComponent as RedSvg} from '../../component/pictures/red-like.svg'
import {ReactComponent as BagSvg} from '../../component/pictures/bag.svg'
import {RemoveItem} from '../../redux/favourite/favourite.action'


import { Favtitem, Cartitem_img, TextLink, Stock_box, Flex,Stock, Text,  Subtext,Price,
     ThirdSection,Svgbox} from './fav-cartItems.styles'


const Favitems =({item, RemoveItem}) =>{
    const {text,subText,price,stock,navimageUrl,quantity} = item
    return (
    <Favtitem>

        <Cartitem_img>
        <img src={navimageUrl} alt="cartitem img" className="img" height='100%' width='100%'/>
        </Cartitem_img>
        <Flex>
            <Stock_box>
            <Stock>{stock} </Stock>
         </Stock_box>
         <TextLink>
         <Text>{text}</Text>
         <Subtext>{subText}</Subtext>
         </TextLink>
         <Price>{price} EURO</Price>

        </Flex>
       
       <ThirdSection>
           <Svgbox>
           <RedSvg  onClick={()=>RemoveItem(item)} height='18px' width='18px' cursor='pointer' />
           </Svgbox>
     <Svgbox><BagSvg height='18px' width='18px' cursor='pointer' />  </Svgbox>
 </ThirdSection>
        
    </Favtitem>
)}

const MapDispatchToProps = dispatch =>({
    RemoveItem: items =>dispatch(RemoveItem(items))
})

const MapStateToProps = createStructuredSelector({
    cartitem:SelectCartitems
})
export default connect (MapStateToProps,MapDispatchToProps) (Favitems)