import React from 'react'
import {HomePagebox} from './HomePage.style'
import Header from '../../../component/Header/Header'


import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectNav} from '../../../redux/favourite/favourite.selector'
import { selectHidden,selectHide} from '../../../redux/cartItems/cartItems.selector'
import {hideSelector} from '../../../redux/hide/hide.selector'

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
import Favouritedropdown from '../../../component/favourite-dropdown/favourite-dropdown.component'
import FavBackground from '../../../component/Fav-background/Fav-background.component'
import Sidenav from '../../../component/side-nav/side-nav.component'
import Side_bar from '../../../component/Side-navBar/Side-navBar.component'
import SideNav_Background from '../../../component/side-navBar-background/side-navBar-background.component'
import Section1 from '../../../component/section1/section1'
import Home from '../../../components/homepage/hompage.component'
const HomePage =({hidden,nav,hideNav})=>(


<div>
<Home/>
</div>


)

const MapstateToProps = createStructuredSelector({
    hideNav: hideSelector,
    hidden: selectHidden,
    nav: selectNav,
     })
  
  export default connect(MapstateToProps)(HomePage);