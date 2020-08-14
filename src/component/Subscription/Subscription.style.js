import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Subscriptionbox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 38px; 
    font-family: sans-serif;
    font-style: normal;
`
export const Header = styled.span`
    letter-spacing: 0.9px;
    color: rgb(194, 170, 126);
    font-size: 20px;
    font-weight: 600;
    text-align: center;

    @media screen and (max-width: 450px) {
        font-size: 16px;
        font-weight: 500;

    }
`


export const Textontainer = styled.div`
    display: flex;
    background-size: cover;
    background-position: 50% 50%;
    justify-content: center;
    margin: 24px 32px 0px 0px;
    text-align: center;
    color: rgb(32, 32, 32);

    @media screen and (max-width: 450px) {
        margin: 10px 5px;

    }
`
export const Input = styled.input`
    margin-right: 8px;
    height: 17px;
    width: 19px;
`
export const Text = styled.div`
    width: 45%;
    font-size: 13px;
    line-height: 19px;
    color: rgb(32, 32, 32);
    display: inline;
    font-style:normal;

    @media screen and (max-width: 450px) {
        width: 86%;

    }
`
export const Linkcontainer = styled(Link)`
    color: rgb(32, 32, 32);
`
export const Button = styled.button`
    focus: none;
    height: 48px;
    font-size: 16px;
    line-height: 1em;
    letter-spacing: 0.5px;
    font-family: Oswald;
    cursor: pointer;
    box-shadow: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    text-align: center;
    font-weight: normal;
    position: relative;
    min-width: 290px;
    border-radius: 2px;
    border: none;
    background: rgb(3, 20, 42);
    margin: 0px auto 32px;
`
export const Terms = styled.div`
    text-align: center; 
    font-family: sans-serif;
    font-style: normal;
    @media screen and (max-width: 450px) {
        width: 86%;
        margin: 0 auto;
        font-size: 11px;
    }
`