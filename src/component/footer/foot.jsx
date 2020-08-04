import React from 'react'
import {ReactComponent as Facebook } from '../../component/pictures/facebook.svg'
import {ReactComponent as Instagram } from '../../component/pictures/white-ig.svg'
import {ReactComponent as Youtube } from '../pictures/youtube-white.svg'
import {ReactComponent as Twitter } from '../pictures/twitter-white.svg'
import {ReactComponent as Tiktok} from '../pictures/tik-tok.svg'
import {ReactComponent as Linkedin } from '..//pictures/linkedin.svg'


import './foot.scss'



const Foot = () =>(
 

<div className="svgContainer">
<div className="leftContainer">
<div className='svg' ><img src="https://ideal-production.imgix.net/2018/10/30091756/mastercard.svg" alt="photo" className='img'/></div>
<div className='svg' ><img src="https://ideal-production.imgix.net/2018/10/30091814/american_express.svg" className='img' alt="photo"/></div>

<div className='svg' ><img src="https://ideal-production.imgix.net/2018/10/30091745/visa.svg" alt="photo" className='img'/></div>
</div>

<div className="rightContainer">
<a href="#" className='svg' fill='black' ><img src="https://ideal-production.imgix.net/2018/10/30092031/fb.svg" alt="facebook" className='img' fill='black'/></a >
<a href="#" className='svg' ><img src="https://ideal-production.imgix.net/2018/10/30092040/instagram.svg" alt="photo" className='img'/></a >
<a href="#" className='svg' ><Tiktok className='img' fill='black'/></a >
<a href="#" className='svg' ><Youtube className='img' /></a >
<a href="#" className='svg' ><img src="https://ideal-production.imgix.net/2018/10/30092058/twitter.svg" alt="twitter" className='img'/></a >
<a href="#" className='svg' ><img src="https://ideal-production.imgix.net/2018/10/30092058/linkedin.svg" alt="photo" className='img'/></a >

</div>

</div>


  
)

export default Foot