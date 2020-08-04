import React from 'react'
import './secondpage.scss'
import {connect} from 'react-redux'
import Dropdown from '../cart_dropdown/dropdown'


const Secondpage = ({hidden}) => (
<div className="Secondpage">
{
    hidden ?null  : <Dropdown/>
}
</div>

)

const MapstateToProps = ({Cart:{hidden}})=>({
    hidden
})
export default connect(MapstateToProps)(Secondpage);