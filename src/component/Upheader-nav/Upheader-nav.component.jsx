import React from 'react'
import {ReactComponent as RightArrow} from '../pictures/right-arrow.svg'
import {Upheadernavbox,Nav,Lftext,Middletext,Right,Rightsvg } from './Upheader-nav.style'

const Upheadernav = ()=>(
    <Upheadernavbox>
<Nav>
        <Lftext to='/'>ideal of sweden</Lftext>
        <Middletext>checkout </Middletext>
        <Right>Continue shopping<Rightsvg><RightArrow/></Rightsvg></Right>
    </Nav>
    </Upheadernavbox>
)

export default Upheadernav