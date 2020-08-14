import styled from 'styled-components'

export const FavBackgroundBox = styled.div`  
width: 100vw;
height: 100vh;
background-size: cover;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 5000;
    background:rgb(0, 0, 0, 0.9);
    overflow: hidden;
    display: none;

    @media screen and (max-width: 800px){
        display: block;      
       }
`
export const Svg = styled.div`  
position: absolute;
top: 30px;
right: 30px;
z-index: 6000;
cursor: pointer;
`

