import React from 'react'

import {connect} from 'react-redux'
import {SelectCartitems,SelectItemCount,SelectTotalCount} from '../../redux/cartItems/cartItems.selector'
import {createStructuredSelector} from 'reselect'
import ShippingDetail from '../../component/Shipping-details/Shipping-details.component'
import Subscription from '../../component/Subscription/Subscription.component'
import CheckoutItem from '../../component/checkout-item/checkout-item.component' 
import Upheadernav from '../../component/Upheader-nav/Upheader-nav.component'
import HeaderNav from '../../component/Sub-header/Sub-header.component'
import Footer from '../../component/footer/footer'

import  {CheckoutPageContainer, Header,CheckoutItembox,Product,Price,ProductShipping,Shipping,
Discount, Total,SmallWeight, BigWeight,DiscountPrice,Text,SpanaText,LastText,Linkcontainer,
CheckoutPageWrapper,HeaderNavcontainer} from './CheckoutPage.style'

const CheckoutPage = ({CartItems,itemcounts, total}) =>{

    const shippPrice = 4.99 ;
    const Amount = (total  + shippPrice).toFixed(2);

    return (
    <CheckoutPageContainer>
    <Upheadernav/>
    <HeaderNavcontainer><HeaderNav/></HeaderNavcontainer>
<CheckoutPageWrapper> 
<Header>1. your basket({itemcounts})</Header>

<CheckoutItembox>


{
    CartItems.map(checkoutitem=> 
    (<CheckoutItem key={checkoutitem.id} checkoutitem={checkoutitem}/>))
}
</CheckoutItembox>

     <ProductShipping>
    <Product>
        <span>Products</span>
        <Price>{total} EUR</Price>
    </Product>
    <Discount>
    <BigWeight>Discount code-<SmallWeight>"2 for 1 - Summer Sale 2020"</SmallWeight></BigWeight>
        <DiscountPrice>-34.56 EUR</DiscountPrice>
    </Discount>
    <Shipping>
        <span>Shipping</span>
        <Price>4.99 EUR</Price>
    </Shipping>
    <Total>
        <span>Amount</span>
        <span className="Price">{Amount} EUR</span>
    </Total>

<Text>you have save <SpanaText>34.56 EUR</SpanaText></Text>
<LastText><Linkcontainer>I've got a discount code</Linkcontainer></LastText>
</ProductShipping>

<ShippingDetail/>
<Subscription/>
</CheckoutPageWrapper>
<Footer/>
    </CheckoutPageContainer>
)
}

const MapStateToProps =createStructuredSelector({
    CartItems:SelectCartitems,
    itemcounts:SelectItemCount,
    total:SelectTotalCount
})
export default connect(MapStateToProps)(CheckoutPage);
