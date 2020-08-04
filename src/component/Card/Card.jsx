import React from 'react'
import './Card.styles.scss'
import {ReactComponent as LoveSvg} from '../pictures/white-love.svg'
import {ReactComponent as InstagramSvg} from '../pictures/white-ig.svg'


const Card =({property})=>{
    const {imgUrl, text,index,name,duration,numberOflike,username,price} =property
    return (
    <div className="card">
        <a className='cardLink' href="#">
<div className="card-img">
    <img src={imgUrl} alt="card image " className="pics"/>
</div>
<div className="topcontainer">
    <div className="ig-container">
<InstagramSvg className='igsvg'/>
<div className="username-duration">
    <div className="username">{username}</div>
    <div className="duration">{duration}</div>
</div>
</div>

<div className="likeContainer">
    <div className="likename">{numberOflike} </div>
    <LoveSvg className='lovesvg'/>
</div>
    </div>


    <div className="bottomcontainer">
<div className="name-text">
    <div className="name">{name}</div>
    <div className="nametext">{text}</div>
</div>
    <div className="card-price">{price}</div>
    </div>
    </a>
    </div>
)
}
export default Card