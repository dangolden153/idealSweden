import styled from 'styled-components'

import {Link} from 'react-router-dom'
 
export const CheckoutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 95vh;
    background-size: cover;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(249, 249, 249);
    width: 100%
    position: relative;
    overflow: hidden;

    `
    export const HeaderNavcontainer = styled.div`
    position: absolute;
    top:67px;
    left: 0;
    width: 100%;
      `

    export const CheckoutPageWrapper = styled.div`
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 186px;
    padding-bottom: 4px;
    background-size: cover;
    width: 70%
    `
export const Header = styled.h2`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    font-style: normal;
    width: 100%

`

export const CheckoutItembox = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 40px;


`


    export const ProductShipping = styled.div`
      display: flex;
      flex-direction: column;
      font-size: 20px;
      font-weight: 400;
      font-style: normal;
      margin-bottom: 16px;
      width: 100%
      `
export const Product = styled.div`
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        padding-top: 20px;
        padding-bottom: 20px;
      `
      export const Discount = styled.div`
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-style: normal;
        border-top: 1px solid rgb(236, 236, 236);
        border-bottom: 1px solid rgb(236, 236, 236);
        letter-spacing: 0.5px;
        padding: 20px 0;

      `
      export const BigWeight = styled.div`
        font-weight:600;
        text-transform: uppercase;

      `
      export const SmallWeight = styled.span`
        font-weight:500;
        text-transform: none;
        font-size: 17px;

      `
      export const DiscountPrice = styled.div`
      font-size: 16px;
      color: red;
      font-weight:500;

      `
      export const Shipping = styled.div`
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        padding-top: 20px;
        margin-bottom: 16px;
      `
      

      export const Total = styled.div`
        display: flex;
        justify-content: space-between;
        font-size: 24px;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 1px;
        font-style: normal;
        text-transform: uppercase;
        margin-bottom: 16px;

        line-height: 24px;
      `

      export const Price = styled.div`
      font-size: 16px;
      `
      export const Text = styled.div`
      font-size: 16px;
      font-weight: 500;
      text-align: end;
      `
      export const SpanaText = styled.span`
      border-bottom: 1px solid black;
      `
      export const LastText = styled.span`
        font-size: 14px;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;

      `
      export const Linkcontainer = styled(Link)`
        color: black;
      `
