import styled from 'styled-components'


export const Nav = styled.div`

        height: 100vh;
        width: 28.5rem;
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        padding: 5px;
        z-index: 500000;
        background-color: #F9F9F9;;
        transition: transform 350ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;   
        
        @media screen and (max-width: 800px) {
                width: 80%;

        }

        `
    
 export const CancelSvgBox = styled.div`
        padding: 27px;
        background-color: rgb(255, 255, 255);
        display: flex;
     `
      
     export const DownText = styled.span`        
      text-align: center;
      font-weight: 600;
      margin: 0 auto;
      display: flex;
      justify-content: cetner;
  `

  export const Span = styled.span`  
  
  `
  export const Cancelbox = styled.div`
        cursor: pointer;
`

       export const  Cart_items = styled.div`
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: scroll;
    `

    export const  CartItems_text = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: 15px;
            font-size: 20px;
            line-height: 25px;
            font-weight: normal;
            font-style: normal;
            font-family: Arial, Helvetica, sans-serif;
             margin: auto auto;
    
            `
    export const  Cart_text = styled.div`
              font-size: 20px;
              line-height: 25px;                                
              font-weight: normal;
              font-style: normal;
              font-family: Arial, Helvetica, sans-serif;
           `


           