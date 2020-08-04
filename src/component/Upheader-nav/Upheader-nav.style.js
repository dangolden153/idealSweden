import styled from 'styled-components'

import {Link} from 'react-router-dom'


export const Upheadernavbox = styled.div`

`
export const Nav = styled.div`
display: flex;
justify-content: space-between; 
width: 89.3%;
height: 66px;
position: absolute;
top: 0;
left: 0;
color: rgb(32, 32, 32);
align-items: center;
padding: 0 72px;
background: rgb(255, 255, 255);


`
export const Lftext = styled(Link)`
font-size: 18px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
color: black;
text-decoration: none;

`
export const Middletext = styled.div`
font-size:26px;
font-weight: 600;
text-transform: uppercase;
text-align: center;
letter-spacing: 1px;

`
export const Right = styled(Link)`
font-size: 17px;
font-weight: 500;
text-decoration: none;
color: black;
display: flex;
justify-content: center;
`
export const Rightsvg = styled.svg`
    height: 19px;
    width: 11px;
    margin-left: 18px;
`

