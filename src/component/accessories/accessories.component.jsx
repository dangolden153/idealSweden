import React from 'react'
import {ReactComponent as CarsSvg } from '../../component/pictures/car.svg'
import {ReactComponent as MessageSvg } from '../../component/pictures/secure-payment.svg'
import {ReactComponent as PriceSvg } from '../../component/pictures/diamond.svg'
import {ReactComponent as ArrowSvg } from '../../component/pictures/right-arrow.svg'


import './accessories.scss'

const Accessories = ()=>(
    <div className="accessories">
<div className="accessoriesLeft">
<div className="accessoriesBox">
    <CarsSvg className="accessoriesImg"/>
    <h4 className="accessoriesTExt">FAST DELIVERY</h4>
</div>
<div className="accessoriesBox">
    <MessageSvg className="accessoriesImg"/>
    <h4 className="accessoriesTExt">1-YEAR WARRANTY</h4>
</div>
<div className="accessoriesBox">
    <PriceSvg className="accessoriesImg"/>
    <h4 className="accessoriesTExt">PRICE WINNING DESIGNS</h4>
</div>
</div>
<div className="accessoriesright">
<h4 className="accessoriesheading">ACCESSORIES OF ATTRACTION</h4>
<p className="para">Keep things simple and connected.</p>
<a href="#" className="accessoriesLink">
READ MORE ABOUT ACCESSORIES OF ATTRACTION
<ArrowSvg className="arrowSvg" />
</a>
</div>
    </div>
)

export default Accessories