import React from 'react'
import  CancelSvg from '../../component/pictures/close.svg'
import LoveSvg from '../../component/pictures/love.svg'

import {CheckoutItemBox,CartitemIimg, Pricecontainer, Stock,Textcontainer
,Subtextcontainer,ThirdSection,CancelSvgcontainer,LoveSvgcontainer, Img,TextLink,
Stockbox,Flex,PriceQuantity,CheckoutItemcontainer,Heading,Select} from './checkout-item.style'
import { connect } from 'react-redux'
import {RemoveItems} from '../../redux/cartItems/cartItems.action'


const CheckoutItem = ({checkoutitem,RemoveItems})=>{
    const {text,subText,price,stock,navimageUrl,quantity} = checkoutitem
    return (
<CheckoutItemcontainer>
    <CheckoutItemBox>

<CartitemIimg>
<Img src={navimageUrl}></Img>  
</CartitemIimg>
<Flex>
    <Stockbox>
    <Stock>{stock} </Stock>
 </Stockbox>
 <TextLink to='#'>
 <Textcontainer>{text}</Textcontainer>
 <Subtextcontainer>{subText}</Subtextcontainer>
 </TextLink>
 <PriceQuantity>
              <Select name="select" id="price" >             
               <option value="price">{quantity}</option>
               <option value="price">1</option>
               <option value="price">2</option>
               <option value="price">3</option>
               <option value="price">4</option>
               <option value="price">5</option>
               </Select> 
 <Pricecontainer>{price} EUR</Pricecontainer>

 </PriceQuantity>
</Flex>

<ThirdSection>
   <CancelSvgcontainer onClick={()=>RemoveItems(checkoutitem)}>
   <Img src={CancelSvg}></Img>  
   </CancelSvgcontainer>

   <LoveSvgcontainer>
   <Img src={LoveSvg}></Img>  
   </LoveSvgcontainer>
</ThirdSection>


    </CheckoutItemBox>

    </CheckoutItemcontainer>
)}

const MapDispatchToProps = dispatch =>({
    RemoveItems: items =>dispatch(RemoveItems(items))
})

export default connect(null,MapDispatchToProps)(CheckoutItem);