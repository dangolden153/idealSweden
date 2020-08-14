import styled from 'styled-components'

export const Detail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;    
    font-family: sans-serif;
    font-style: normal;
`

export const Heading = styled.h2`
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 48px;
    font-weight: 600;
    text-transform: uppercase;
`
export const DetailWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 80px;
    justify-content: space-between;

    @media screen and (max-width: 450px) {
        padding: 12px;
        flex-direction: column;
    }
        `

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: calc(50% - 8px);
    margin-bottom: 32px;
    font-size: 10px;
    font-weight: normal;
    line-height: 13px;
    letter-spacing: 0.45px;
    text-transform: uppercase;

    @media screen and (max-width: 450px) {
        width: 100%;
        margin-bottom: 21px;

    }
    
`

export const Input = styled.input`
    margin-top: 8px;
    margin-bottom: 8px;
    height: 48%;
    font-size: 13px;
    border: 1px solid rgb(236,236,236);
    outline: none;
    padding: 17px 8px 17px 24px;
    background-color: rgb(255,255,255);
    border-radius: 2px;    

    @media screen and (max-width: 450px) {
        padding: 13px 8px 14px 16px;    
    }
`
export const Zip_city = styled.div`
@media screen and (max-width: 450px) {
    display: flex;

}
`

export const Zipcode = styled.label`
    width: calc(16% - 8px);
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    font-size: 10px;
    font-weight: normal;
    line-height: 13px;
    letter-spacing: 0.45px;
    text-transform: uppercase;
    @media screen and (max-width: 450px) {
        width: 28%;
        margin-bottom: 21px;

    }
`

export const Country = styled.label`
display: flex;
    flex-direction: column;
    width: calc(33% - 8px);
    margin-bottom: 32px;
    font-size: 10px;
    font-weight: normal;
    line-height: 13px;
    letter-spacing: 0.45px;
    text-transform: uppercase;
    @media screen and (max-width: 450px) {
        width: 55%;
        margin-left: 10px;
        margin-bottom: 21px;

    }
`
