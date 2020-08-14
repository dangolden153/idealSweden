import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container= styled.div`
    padding-top: 8px;
    padding-bottom: 16px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    display: none;

    @media screen and (max-width: 450px){
        display: block;      
       }
`
export const Third_con= styled.div`
display: flex;
flex-wrap: nowrap;
-webkit-box-align: center;
align-items: center;
height: 100%;
background-size: cover;
background-position: 50% 50%; 

`

export const Flex_con= styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 4px;

    &:not(:first-child){
        padding-left: 8px;
    }
`
export const ImgBox= styled(Link)`
text-decoration: none;
color: rgb(32,32,32);

`
export const Img= styled.div`
    background-size: cover;
    display: flex;
    height: 96px;
    width: 96px;
    margin-bottom: 16px;
    background-position: 50% 50%;
`


export const Span= styled.div`
    font-size: 14px;
    min-height: 26px;
    text-align: center;
    line-height: 14px;
    font-family: sans-serif;
    font-style: normal;
    color: rgb(32, 32, 32);
`