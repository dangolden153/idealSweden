import React from 'react'

import {Detail,DetailWrapper,Label,Input,Zipcode,Country,Heading} from './Shipping-details.styles'

const ShippingDetail = ()=>(
    <Detail>
        <Heading>
            2. shipping details
        </Heading>
        <DetailWrapper>
<Label htmlFor="firstName" >
    FIRST NAME
    <Input name='firstName' type="text"></Input>
</Label>
<Label htmlFor="firstName" >
    LAST NAME
    <Input name='firstName' type="text"></Input>
</Label>
<Label htmlFor="firstName" >
street address  
   <Input name='firstName' type="text"></Input>
</Label>
<Zipcode htmlFor="firstName" >
zip code   
 <Input name='firstName' type="text"></Input>
</Zipcode>
<Country htmlFor="firstName" >
 city
<Input name='firstName' type="text"></Input>
</Country>
<Label htmlFor="firstName" >
country
   <Input name='firstName' type="text"></Input>
</Label>
<Label htmlFor="firstName" >
state
   <Input name='firstName' type="text"></Input>
</Label>
<Label htmlFor="firstName" >
phone number
   <Input name='firstName' type="text"></Input>
</Label>
<Label htmlFor="firstName" >
email
   <Input name='firstName' type="text"></Input>
</Label>
        </DetailWrapper>
    </Detail>
)

export default ShippingDetail;