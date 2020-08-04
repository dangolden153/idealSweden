import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const CheckoutItemcontainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    background-size: cover;
    margin-bottom: 24px;
    background-position: 50% 50%;
`



export const CheckoutItemBox = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    font-size: 13px;
    background-size: cover;
    margin-bottom: 24px;
    align-items: flex-start;
    position: relative;
    background-position: 50% 50%;
`
export const CartitemIimg = styled.div`
        height: 204px;
        max-width: 160px;
        margin-right: 56px;
        background-color: rgb(243, 243, 243);

    `
    export const Img = styled.img`  
            height: 100%;
            width: 100%;
     `
     export const TextLink = styled(Link)`
     color: black;
     text-decoration: none;
     margin-bottom: 8px;
     font-size: 10px;
     `
     export const Stockbox = styled.div`
     margin-bottom: 18px;
     display: block;
    `
       
    export const Flex = styled.div`
    display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top:18px ;
        flex:1 1 0% ;`
   
    export const Stock = styled.div`
    font-size: 13px;
    line-height: 13px;
    font-weight: 400;
    display: block;
    margin-bottom: 8px;
        `

     export const Textcontainer = styled.div`
     font-size: 16px;
     line-height: 16px;
     font-weight: 500;
     color: rgb(32, 32, 32);`

     export const Subtextcontainer = styled.div`
     font-size: 13px;
     line-height: 13px;
     font-weight: 400;
     margin-top: 8px;
     color: rgb(32, 32, 32); `

     export const PriceQuantity = styled.div`
     display: flex;
     background-size: cover;
     -webkit-box-align: center;
     align-items: center;
     margin-top: 16px;
     background-position: 50% 50%;
     `
     export const Select = styled.select`
     border: none ;
     padding: 6px 10px;
     margin-top: 10px;
     background-color: white;
     margin-right: 15px;

    &:focus{
      outline: none;
    }
    `
     export const Pricecontainer = styled.div`
     font-size: 16px;
     font-weight: 600;
    font-family: Montserrat;
    line-height: 1em;
    font-style: normal;
    letter-spacing: 0.5px;  `

     export const ThirdSection = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     align-content: space-between;
     height: 100%;
     margin-right: 22px;  `
      
         
     export const CancelSvgcontainer = styled.div`    
     height: 30px;
     width: 18px;
     display: flex;
 -webkit-box-align: center;
 align-items: center;
 -webkit-box-pack: center;
 justify-content: center;
 background-color: rgb(255, 255, 255);  
 border-radius: 50%;                                            
 flex: 0 0 auto;
 transition: transform 0.2s cubic-bezier(0.46, 0.88, 0.7, 0.83) 0s, background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
 margin-bottom: 16px;
 cursor: pointer;
 box-shadow: none;
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);  `


 export const LoveSvgcontainer = styled.div`
 height: 30px;
 width: 18px;
 display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
background-color: rgb(255, 255, 255);
border-radius: 50%;
flex: 0 0 auto;
transition: transform 0.2s cubic-bezier(0.46, 0.88, 0.7, 0.83) 0s, background-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
margin-bottom: 16px;
cursor: pointer;
box-shadow: none;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);  `
   