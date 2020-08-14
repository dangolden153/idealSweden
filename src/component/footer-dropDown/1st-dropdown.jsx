import React,{useState} from 'react'
import  './footer-dropDown.scss'


import {ReactComponent as Upnav} from '../pictures/up-nav.svg'
import {ReactComponent as Downnav} from '../pictures/down-chevron.svg'




function FirstdropDown  () {
    const [open, setOpen] = useState(false)
    const toggle =()=> setOpen(!open)


    return(
        <div className="Container">
                <div className='box'
            tabIndex={0}
            
            onKeyPress={()=>toggle(!open)}
             onClick={()=>toggle(!open)}
             >

        <div className="title-box">
        <div className='Tittle' >CUSTOMER SERVICE</div>
                 <div className='Tittle-action'>
                 {open ? <Upnav width='15px' height='15px'/> 
                    : <Downnav width='15px' height='15px'/> }
                    </div>
                     </div>

                    {
                        open && (
                    <div className="wrapper">
                        <div className="sapn"><a href='#' className='dropdown-link'>Contact Us</a></div>
                        <div className="sapn"><a href='#' className='dropdown-link'>FAQ</a></div>
                        <div className="sapn"><a href='#' className='dropdown-link'>Returns</a></div>

                    </div>
                        )
                    }
                <div className="border"> </div>

             </div>     
 </div>
       
    )
}


export default FirstdropDown;