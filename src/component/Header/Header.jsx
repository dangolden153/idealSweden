import React from 'react'
import './Header.scss'
import Header_vid from '../video/bg-vid.mp4'
import HeaderNav from '../Sub-header/Sub-header.component'
import DownHeader from '../downHeader/downHeader.component'

const Header = () =>(
    <div className="header">

        <div className="back-vid">
        <video loop muted autoPlay>
<source src={Header_vid} type='video/mp4' />
</video>
        </div>
<HeaderNav/>
<DownHeader/>
    </div> 
)

export default Header;