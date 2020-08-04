import React from 'react'
import {NavBackgroundBox} from './NavBackground.style'
import {connect} from 'react-redux'
import {TOggleNav} from '../../redux/cartItems/cartItems.action'

const NavBackground = ({TOggleNav})=>
(
    <NavBackgroundBox onClick={TOggleNav}></NavBackgroundBox>
)


const MapDistchToProps = dispatch =>({ 
    TOggleNav:()=>dispatch(TOggleNav())
})
export default connect(null,MapDistchToProps) (NavBackground)