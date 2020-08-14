import React from 'react'
import {FavBackgroundBox, Svg} from './side-navBar-background.styles'
import {connect} from 'react-redux'
import {ToggleSideBar} from '../../redux/hide/hide.action'
import {ReactComponent as CancelSvg} from '../pictures/white-cancel.svg'


const SideNav_Background = ({ToggleSideBar})=>
(
    <FavBackgroundBox onClick={ToggleSideBar}>
        <Svg onClick={ToggleSideBar}>
       < CancelSvg height='15px' width='15px'onClick={ToggleSideBar} />
        </Svg>
    </FavBackgroundBox>
)


const MapDistchToProps = dispatch =>({ 
    ToggleSideBar:()=>dispatch(ToggleSideBar())
})
export default connect(null,MapDistchToProps) (SideNav_Background)