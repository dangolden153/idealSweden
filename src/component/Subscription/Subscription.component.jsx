import React from 'react'

import {Subscriptionbox,Container,Header,Textontainer,Input,Text,Linkcontainer,
Button,Terms} from './Subscription.style'

const Subscription =()=>(
    <Subscriptionbox>
    <Container>
<Header>GET 15%OFF YOUR NEXT ORDER</Header>
<Textontainer>
    <Input type="checkbox"></Input>
    <Text>
    Yes, I would like to subscribe to the newsletter and get a 15% 
    discount code delivered with my package, valid on my next order.
     Read more about how we process your personal information in the <Linkcontainer>privacy policy</Linkcontainer>.
    </Text>
</Textontainer>

 </Container>
 <Button>continue</Button>
<Terms>By clicking I have read and accepted to the <Linkcontainer>terms and conditions.</Linkcontainer></Terms>
   
</Subscriptionbox>
)
export default Subscription;