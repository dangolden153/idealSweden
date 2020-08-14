import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Container = styled.div`
position:fixed;
top: 0;
left: 0;
height: 90vh;
width: 100vw;
z-index:4000;
background: white;

@media screen and (max-width: 800px){
    display: none;      
   }
`

export const Container_Items = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: sans-serif;
font-style: normal;
position: relative;
`

export const Upimg = styled.div`
width: 70%;
align-items: center;
margin: 0 auto;
display: flex;
justify-content: center;
border-top: 1px solid rgb(236, 236, 236);
width: 100%;
padding: 24px;
margin-top: 70px;

`

export const ImgBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 25px;
margin-right: 25px;
min-width: 107px;

`
export const ImgBox_down = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 7px;
`
export const Img = styled.div`
height: 70px;
width: 70px;
background: rgb(236,236,236);
background-position: center;
background-size: cover;
justify-content: center;
align-items: center;
`

export const Span_Txt = styled.div`
font-size: 12px;
text-align: center;
margin-top: 10px;
text-transform: uppercase;
`
export const Span = styled.div`
font-size: 12px;
text-align: center;
margin-top: 15px;
width: 83px;
overflow: hidden;
height: 26px;
`
export const Arrow_img = styled.div`
height: 27px;
width: 34px;
background-position: center;
background-size: cover;
justify-content: center;
align-items: center;

&:hover{
    transform: translateX(3px)
 
}
`
export const  Linkbox = styled(Link)`
color: black;
font-size: 12px
text-decoration: none;
border-bottom: 1px solid black;
transform: translateY(18px)
`
export const  Downimg= styled.div`
display: flex;
align-items: center;
margin: 0 auto;
justify-content: center;
border-top: 1px solid rgb(236, 236, 236);
width: 100%;
padding-top: 70px;
`

export const Text_box = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
padding: 70px 24px 0px 43px;
`

export const Img_text = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const Svg_img = styled.div`
height: 28px;
width: 28px;
background-postion: center;
background-size: cover;
margin-right: 5px;
`
export const Svg_inst = styled.div`
height: 20px;
width: 20px;
background-postion: center;
background-size: cover;
margin-right: 5px;

`
export const Text = styled.div`
font-size: 12px;
padding: 14px;
border-right: 1px solid rgb(236, 236, 236);
text-transform: uppercase;
`

export const DownNav = styled.div`      
display: flex;
align-items: center;
justify-content: space-between;
height: 50px;
width: 100%;
background-color: rgb(3, 20, 42);
`
export const Left_container = styled.div` 
display: flex;
align-items: center;
justify-content: center;     
justify-content: start;     
padding-left: 40px;

`

export const Right_container = styled.div`   
display: flex;
align-items: center;
justify-content: center;   
padding-right: 84px;
`

export const Down_text = styled.div`   
font-size: 13px;
padding: 5px;
color: rgb(255,255,255);
display: flex;
justify-content: center;

&:not(:first-child){
   padding: 25px;                 
}
`

export const Span_text = styled.div`   
margin-left: 6px;
margin-right: 50px;

`
export const Down_svg = styled.div`   
padding-left: 10px;

`
export const Line = styled.div`   
background-color: rgb(236, 236, 236);
height: 1px;
width: 100%;
transform: translateY(68px)`


