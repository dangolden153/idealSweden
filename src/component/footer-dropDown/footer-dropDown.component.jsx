import React,{useState} from 'react'
import  './footer-dropDown.scss'
import DropDown1 from './dropDown1'
import Information from './dropdown2'
import FirstdropDown from './1st-dropdown'





function FooterdropDown  () {
   return(
        
<div className="FooterdropDown">
    <FirstdropDown/>
     <DropDown1/>  
     <Information/>       
 </div>
       
    )
}


export default FooterdropDown;