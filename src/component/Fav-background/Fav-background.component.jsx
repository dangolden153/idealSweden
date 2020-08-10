import React from 'react'
import {FavBackgroundBox} from './Fav-background.styles'
import {connect} from 'react-redux'
import {toggleNav} from '../../redux/favourite/favourite.action'


const FavBackground = ({toggleNav})=>
(
    <FavBackgroundBox onClick={toggleNav}></FavBackgroundBox>
)


const MapDistchToProps = dispatch =>({ 
    toggleNav:()=>dispatch(toggleNav())
})
export default connect(null,MapDistchToProps) (FavBackground)