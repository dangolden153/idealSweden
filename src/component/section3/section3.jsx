import React from 'react'
import './section3.scss'
import love from '../pictures/love.svg'
import purse from '../pictures/purse1.jpg'

const Section3 =() => (
    <div className="section3">
<div className="img-container">
    <div className="img-box">
        <div className="pic-small">
            <img src={purse} alt="small pic"/>
            <div className="text-container">
    <span className="sup-text">Golden Pearl Marble</span>
    <span className="sub-text">Fashion case-iphone 11 pro</span>
<div className="price-container">
    <div className="icon-box">
        <img src={love} alt="love icon"/>
    </div>
    <div className="price">22.49 EUR</div>
    <div className="icon-box">
        <img src={love} alt="love icon"/>
    </div>
</div>
</div>
        </div>
        <div className="pic-small">
            <img src={purse} alt="small pic"/>
            <div className="text-container">
    <span className="sup-text">Golden Pearl Marble</span>
    <span className="sub-text">Fashion case-iphone 11 pro</span>
<div className="price-container">
    <div className="icon-box">
        <img src={love} alt="love icon"/>
    </div>
    <div className="price">22.49 EUR</div>
    <div className="icon-box">
        <img src={love} alt="love icon"/>
    </div>
</div>
</div>
        </div>
    </div>
<div className="left-pics">
<div className="pic-large">
        <img src={purse} alt="large pic"/>
    </div>
</div>
    
</div>
    </div>
)

export default Section3