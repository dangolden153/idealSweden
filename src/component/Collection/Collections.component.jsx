import React from 'react'
import {AddItems} from '../../redux/cartItems/cartItems.action'
import {connect} from 'react-redux'
import './Collections.scss'

const Collections =({item,AddItems})=>{
        const {text,imageUrl,subText,size,price,style,boldText,btn,bigsize,
            substyle,supstyle,boldtext,loveIcon,bagIcon,bigcotainer,shopLink,PhoneMarblestyle,
            PhoneMarbleSvg,smallcontainer,marginLight,marginRight,notificationImg,notifImg,priceText} = item
        return (


    <div className={`${style? 'style' : ''}
    ${substyle? 'substyle' : ''}
    ${supstyle? 'supstyle' : ''} 
    ${marginLight? 'marginLight' : ''} 
    ${marginRight? 'marginRight' : ''} 
    ${PhoneMarblestyle? 'PhoneMarblestyle' : ''} Collection `}>
        <div className="notifBox">
            <img src={notificationImg} alt="nofication img" className={`${notifImg} svg`}/>
        </div>

        <a href="#" className={`${shopLink} link`}>
        <img src={imageUrl} alt="sweden" className={`${size ? 'size': '' }
        ${bigsize ? 'bigsize': '' } img`}/>
        </a>
        
        <div className={`${bigcotainer? 'bigcotainer': '' } 
        ${smallcontainer? 'smallcontainer' : ''} container  ` }>
        <div className="textBox">
        <div className="text">{text}</div>
        <div className="subtxt">{subText}</div>
        <div className="priceImg">
        <img  src={loveIcon} alt="love" className="svg"/>
        <div className="price">{price} {priceText}</div>
        <img onClick={()=>AddItems(item)}  src={bagIcon} alt="bag" className="svg"/>
        </div>
        <h2 className="bold">{boldText}</h2>
        <a className="svgmablecontainer">
        <img src={PhoneMarbleSvg} alt="arrow svg" className="PhoneMarbleSvg" />
        </a>
        <h2 className="boldtext">{boldtext}</h2>
        <button className="btn" >{btn}</button>
        </div>
        
        </div>
       

        


    </div>
)}
const MapDispatchToProps = dispatch =>({
    AddItems:item =>dispatch(AddItems(item))
})
export default connect(null,MapDispatchToProps)(Collections)

