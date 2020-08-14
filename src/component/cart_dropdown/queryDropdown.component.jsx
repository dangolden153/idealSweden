import React from 'react'
import ShippingDetail from '../Shipping-details/Shipping-details.component'
import Subscription from '../Subscription/Subscription.component'

import {QueryDrop} from './queryDropdown.styles'

const QueryDropDown = ()=>(
    < QueryDrop>
    <ShippingDetail/>
    <Subscription/>
    </QueryDrop>
)

export default QueryDropDown