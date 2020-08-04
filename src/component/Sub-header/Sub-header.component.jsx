import React from 'react'

import { ReactComponent as DeliveryIcon} from '../pictures/car.svg'
import { ReactComponent as TickIcon} from '../pictures/tick.svg'
import {ReactComponent as PaymentIcon} from '../pictures/secure-payment.svg'

import {SubHeadercontainer,Delivery,Delivery_Icon,Text,Tick_icon,Payment_icon} from './Sub-header.style'

const HeaderNav =()=>(


<SubHeadercontainer>
    <Delivery>
    <DeliveryIcon height='22px' width='22px'/>
    <Text>fast delivery</Text>
    </Delivery>
    <Delivery>
    <Tick_icon><TickIcon /></Tick_icon>
    <Text>14days of return</Text>
    </Delivery>
    <Delivery>
<PaymentIcon height='22px' width='22px'/>
    <Text>secure payments</Text>
    </Delivery>

</SubHeadercontainer>
)

export default HeaderNav;
