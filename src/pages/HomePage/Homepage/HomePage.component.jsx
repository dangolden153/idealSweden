import React from 'react'
import {HomePagebox} from './HomePage.style'
import Header from '../../../component/Header/Header'


import {connect} from 'react-redux'
import Section4 from '../../../component/section4/section4'
import UpNav from '../../../component/upNav/upNav.component'
import IdeaOfSweden from '../../../component/ideasweden/ideaOfSweden.component'
import Accessories from '../../../component/accessories/accessories.component'
import Story from '../../../component/storySection/storySection'
import Footer from '../../../component/footer/footer'
import NavBackground from '../../../component/Nav_Background/Nav_Background'
import Dropdown from '../../../component/cart_dropdown/dropdown'
import Carousel from '../../../component/carousel/carousel.component'
import Section2 from '../../../component/section2/section2'

const HomePage =({hidden})=>(
<HomePagebox>

{ hidden? null : <Dropdown show={hidden}/>}
{ hidden? null :<NavBackground/> }
<Header/>
<UpNav/>
    <Section4/>
    <IdeaOfSweden/>
    <Carousel/>
    <Accessories/>
    <Story/>
    <Footer/>
   

</HomePagebox>
)

const MapstateToProps = ({Cart:{hidden}})=>({
    hidden
  })
  
  export default connect(MapstateToProps)(HomePage);