import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Favtitem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    `
    
    export const Cartitem_img = styled.div`
        height: 112px;
        width: 95px;
        margin: 13px;
        background-color: rgb(243, 243, 243);
        z-index:1000;
       `

    export const TextLink = styled(Link)`
        color: black;
        text-decoration: none;
`

export const Stock_box = styled.div`
        margin-bottom: 18px;
        display: block;
  `

  export const Flex = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;            
        align-items: flex-start;            
        width: 63%;

        `

export const Stock = styled.div`
            font-size: 10px;
            font-style: normal;
            font-family: sans-serif; 
            margin-bottom: 8px;
            color: rgb(32, 32, 32);
            margin-bottom: 5px;
     `

export const Text = styled.div`
          font-size: 13px;
           font-style: normal;
           font-family: sans-serif; 
           margin-bottom: 8px;
           color: rgb(32, 32, 32);

      `

export const Subtext = styled.div`
            font-size: 10px;
            font-style: normal;
            font-family: sans-serif; 
            margin-bottom: 8px;
            color: rgb(32, 32, 32);
       `
       
export const Price = styled.div`    
                font-size: 12px;
                font-weight: 600;
                font-family: sans-serif;
                line-height: 1em;
                font-style: normal;
                letter-spacing: 0.5px;
                margin-top: 18px;
                color: rgb(32, 32, 32);

        `

 export const ThirdSection = styled.div`
    ThirdSectiondisplay: flex;
        flex-direction: column;
        align-items: center;
        align-content: space-between;
        margin-right: 22px;
        
        `

        export const Svgbox = styled.div`
        margin-bottom: 16px;
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    flex: 0 0 auto;
        `
 