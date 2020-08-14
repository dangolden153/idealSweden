import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Sidebar= styled.div`
height: 100vh;
width: 80vw;
position: fixed;
top: 0;
left: 0;
background-color: rgb(255,255,255);
z-index: 6000;
overflow-y: scroll;
display: none;

@media screen and (max-width: 800px){
 display: block;      
}
`

export const Container= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: sans-serif;
font-style: normal;
`
export const First_con= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 71px;
background: rgb(236, 236, 236);
position: relative;
width: 100%;
padding: 18px;

`
export const Right_con= styled.div`
text-transform: uppercase;
font-size: 13px;
color: rgb(25,25,25);
font-weight: bold;
margin: 2px;
`

export const Iphone_box= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background: rgb(255,255,255);
width: 79%;
`
export const Global_container= styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 9px;
`
export const Left_con= styled.div`

font-size: 13px;
color: rgb(25,25,25);
padding: 17px;
font-weight: bold;

`
export const Svg_box= styled.span`
padding: 10px;
`
export const Link_text = styled(Link)`     
text-transform: uppercase;
color: rgb(25,25,25);
`

export const Second_con = styled.div`     
display: flex;
align-items: center;
justify-content: space-between;
align-self: start;
padding: 14px 4px;
width: 100%;
`
export const Second_Left_con= styled.div`
font-size: 13px;
color: rgb(25,25,25);
font-weight: bold;

`
export const Second_Right_con= styled.div`
font-weight: 700;
font-size: 13px;
text-transform: uppercase;

`
export const Img_text= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
width: 100%;
padding: 10px 20px 10px 20px;

`
export const Img_container= styled.div`
display: flex;
justify-content: center;
align-items: center;
align-items: start;

`
export const Flex_container= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5px;
`
export const Picz= styled.div`
height: 70px;
width: 70px;
background-position: center;
background-size: cover;
border-radius: 2px;
`
export const Text= styled.div`
    overflow: hidden;
    font-size: 11px;
    width: 70px;
    display: -webkit-box;
    height: 28px;
    margin-top: 7px;
`

export const Third_con= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
border-top: 1px solid rgb(236, 236, 236);
padding-top: 29px;
padding-bottom: 20px;
align-self: start;
margin-left: 24px;

`

export const Flex_con= styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
min-width: 308px;
`
export const ImgBox= styled.div`
width: 30%;

`
export const Img= styled.div`
height: 40px;
width: 40px;
background: rgb(236,236,236);
background-position: center;
background-size: cover;
justify-content: center;
align-items: center;
margin-right: 10px;
flex: 1;
`


export const Span= styled.div`
font-size: 13px;
text-transform: uppercase;
font-weight: bold;
flex: 1;
transform: translateX(-36px)

`



export const Text_box= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-self: start;
width: 100%;
`
export const Image_text= styled.div`
display: flex;
justify-content: center;
width: 100%;
align-items: center;
text-transform: uppercase;
font-weight: bold;
border-top: 1px solid rgb(236, 236, 236);
padding: 20px;

`


export const Inst_Text = styled.div`
font-size: 13px;
margin-left: 15px;
flex: 1;
text-transform: uppercase;
font-weight: bold;

`
export const Pics_container = styled.div`
width: 12%;

`
export const Svg_inst= styled.div`
height: 25px;
width: 25px;
background-position: center;
background-size: cover;

`
export const Svg_img= styled.div`
height: 28px;
width: 28px;
background-position: center;
background-size: cover;

`
export const Attr_Text= styled.div`
font-size: 13px;
border-top: 1px solid rgb(236, 236, 236);
padding: 10px 5px;
text-transform: uppercase;
font-weight: bold;
padding: 20px;

`

export const Last_section= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-sefl: start;
width: 100%;
background-color: rgb(3, 20, 42);
`
export const Down_text= styled.div`
font-size: 13px;
border-top: 1px solid rgb(40, 41, 53);
padding: 20px;
color: rgb(255,255,255);
font-weight: bold;

`