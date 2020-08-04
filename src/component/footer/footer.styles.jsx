import styled from 'styled-components'
//import {Link} from 'react-router-dom'



export const FooterContainer = styled.div`
    width:100%;
`
export const NewsLetterSection = styled.div`
    background-image: url(https://ideal-production.imgix.net/2020/04/30085340/SS20_Footer_desktop.jpg?w=2000px&auto=format&fit=clip&fm=jpg);
    width:100%;

    `;
    export const NewsLetterBox = styled.div`
        padding-left: 80px;
        padding-right: 80px;
        padding-top: 33px;
        padding-bottom: 33px;
        background-size: cover;
        max-width: 1740px;
        margin-left: auto;
        margin-right: auto;
`;
export const NewsLettercontainer = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column;
            -moz-box-pack: center;
            -webkit-box-pack: center;  
            justify-content: center;
            height: 100%;
            background-size: cover;
            `


    export const Upcontainer = styled.div`
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: flex-start;
        color: rgb(255, 255, 255);
        background-size: cover;
`
export const Heading = styled.div`
                margin-bottom: 16px;
                font-size: 16px;
                font-weight: 600;
                font-family: Montserrat;
                text-align: center;
                letter-spacing: 0.5px;
                text-transform: uppercase;
                font-style: normal;
    
`
export const Paragrh = styled.div`
            line-height: 20px;
            text-align: left;
            margin-bottom: 24px;
            font-style: normal;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 500;
            font-size: 13px;
            `

      

    export const Btn = styled.div`
        display: flex;
        -webkit-box-pack: start;
        justify-content: flex-start;
`
export const Input =styled.input`
            background-color: rgb(255, 255, 255);
            max-width: 329px;
            font-style: normal;
            letter-spacing: 0px;
            line-height: 20px;
            color: rgb(134, 134, 134);
            outline: none;
            border-width: 0px;
            border-style: initial;
            border-color: initial;
            border-image: initial;
            border-radius: 2px;
            padding: 14px 17px;
            font-size: 13px;
            width: 50%;`
        
    export const SendBtn = styled.div`
            cursor: pointer;
            box-shadow: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            display: block;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            text-align: center;
            color: rgb(255, 255, 255);
            margin-left: 8px;
            white-space: nowrap;
            padding: 0px 32px;
            font: 400 16px / 40px Oswald;
            border-radius: 2px;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(255, 255, 255);
            border-image: initial;
            transition: color 200ms cubic-bezier(0.39, 0.575, 0.565, 1) 0s, background-color 200ms cubic-bezier(0.39, 0.575, 0.565, 1) 0s;
            min-width: 185px;

            &:hover{
                background-color: white;
                color: black;
            }
            
`
       

            

    export const Downcontainer = styled.div`
        display: flex;
        display: flex;
        -webkit-box-align: center;
        align-items: flex-start;
        background-size: cover;
        background-position: 50% 50%;
        text-align: center;
        margin-top: 25px;
`

    export const NewsletterLabel = styled.div`
            width: 17px;
            height: 17px;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(255, 255, 255);
            border-image: initial;
            border-radius: 0px;
            margin-right: 16px;
            display: flex;
            align-self: flex-start;
        `
   export const NewletterInput = styled.input`
            display: none;`
        
       export const Newslettertext = styled.div`
            font-size: 10px;
            font-weight: 400;
            color: rgb(255, 255, 255);
            font-style: normal;
            user-select: none;
            margin: 0px;
            `

       export const NewsletterLink = styled.a`
       color: rgb(255, 255, 255);
       margin-left:3px;
       `
        
    export const MiddleSection = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 65px;
    padding-top: 71px;
    padding-left: 84px;
    padding-right: 84px;
    background-color: rgb(3, 20, 42);
    background-size: cover;
    `
    
    
    export const UpSection = styled.div `
    display: flex;
    padding-bottom: 55px;
    width: 100%;
    background-size: cover;
    background-position: 50% 50%;
    `

    export const LeftSection = styled.div`
    display:flex;
    justify-content: space-between;
    `
    export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
   // align-items: center;
    `

    export const Text = styled.div`
    font-size: 12px;
    font-weight: 600;
    font-family: Montserrat;
    font-style: normal;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    letter-spacing: 0.43px;
    display: block;
    position: relative;
   // padding-left: 8px;
    white-space: nowrap;
    margin-right: 103px;
    `

    export const List = styled.ul`
    display: block;
    padding-left: 0px;
    text-align: left;
    list-style: none;
    margin: 15px 0;
    `

    export const Items = styled.li`
    text-align: left;
    display: block;
    color: rgb(255, 255, 255);
    margin-bottom: 14px;

    `

    export const LinkBox = styled.a`
    font: 400 13px / 18px Avenir;
`

    export const RightSection = styled.div`
    display: flex;
    background-size: cover;
    background-position: 50% 50%;
    `

    export const SpanText = styled.div`
    margin-right: 8px;
    padding-top: 12px;
    font-style: normal;
    white-space: nowrap;
    color: rgb(255,255,255);
    `
    export const DownSection = styled.div`
    display: flex;
    padding-top: 55px;
    background-size: cover;
    background-position: 50% 50%;
    border-top: 0.5px solid rgb(63, 61, 61);
`
 

export const LeftBox = styled.div`
text-align: left;
padding-right: 48px;
margin-top: 0px;
color: rgb(255, 255, 255);
width: 50%;
background-size: cover;
`
export const ParagrahHeading = styled.div`
margin-bottom: 0px;
    margin-top: 0px;
    padding-bottom: 24px;
    font-size: 13px;
    font-weight: 500;
    font-family: "Avenir Next";
    line-height: 13px;
    text-transform: uppercase;
    font-style: normal;
`
export const ParagrahText = styled.div`
    line-height: 22px;
    font-weight: 400;
    font-size: 13px;
    margin: 0px;
`

export const RightBox = styled.div`
     align-items: flex-end;
    -webkit-box-pack: end;
    justify-content: flex-end;
    width: 50%;
    display: flex;
    background-size: cover;
    background-position: 50% 50%;
`
export const RightBoxText = styled.div`
font-size: 20px;
font-weight: 500;
color:rgb(255, 255, 255);
padding-bottom: 35px;
padding-top: 0px;
text-transform:uppercase
`

export const LastSection = styled.div`
    width: 100%;
    height: 66px;
    background-color: rgb(4, 16, 30);
    position: relative;
  

`







