import React from 'react'

import Foot from '../footer/foot'
import FooterdropDown from '../footer-dropDown/footer-dropDown.component'

import {FooterContainer, NewsLetterSection, NewsLetterBox, NewsLettercontainer, Upcontainer, Heading, 
    Paragrh, Btn, Input, SendBtn, Downcontainer, NewsletterLabel, NewletterInput, Newslettertext,
     NewsletterLink, MiddleSection, UpSection, DownSection,RightSection,LeftSection, Text, List,Items, LinkBox, 
     FlexContainer, SpanText, LeftBox, ParagrahText,ParagrahHeading, RightBox, RightBoxText,
     LastSection,Footerdropdown} from './footer.styles'



const Footer = () =>(
    <FooterContainer>
    <NewsLetterSection>
<NewsLetterBox>
    <NewsLettercontainer>
    <Upcontainer>
    <Heading>SUBSCRIBE TO OUR NEWSLETTER</Heading>
        <p className={Paragrh}>Subscribe to our newsletter and be the first to hear about exclusive offers and product releases.</p>
        <Paragrh>You can unsubscribe at any time, and we always keep your information safe and secure.</Paragrh>
    </Upcontainer>
       <Btn>
        <Input placeholder='Enter your email address' />
        <SendBtn>send</SendBtn>
           </Btn> 
          <Downcontainer>
              <NewsletterLabel htmlFor="newsletter_input" className="newsletterLabel"></NewsletterLabel>
              <NewletterInput type="checkbox" className="newletterInput" id='newsletter_input'/>
              <Newslettertext htmlFor="newsletter_input" className="newslettertext">
              I hereby agree to the terms and conditions for digital communication in accordance with the
              <NewsletterLink href="#" className="newsletterLink">privacy policy</NewsletterLink>

              </Newslettertext>
        </Downcontainer> 
    </NewsLettercontainer>
</NewsLetterBox>
    </NewsLetterSection>
    <MiddleSection>
    

        <UpSection>
<LeftSection>
    <FlexContainer>
    <Text>CUSTOMER SERVICE</Text>
     <List>
         <Items>
             <LinkBox to='#'>Contact us</LinkBox>
         </Items>
         <Items>
             <LinkBox>FAQ</LinkBox>
         </Items>
         <Items>
             <LinkBox>Returns</LinkBox>
         </Items>
     </List>
    </FlexContainer>
     
    <FlexContainer>
    <Text>ABOUT IDEAL OF SWEDEN</Text>
     <List>
         <Items>
             <LinkBox to='#'>About us</LinkBox>
         </Items>
         <Items>
             <LinkBox>Sustainability</LinkBox>
         </Items>
         <Items>
             <LinkBox>Open position</LinkBox>
         </Items>
     </List>
    </FlexContainer>

    <FlexContainer>
    <Text>copoerate information</Text>
     <List>
         <Items>
             <LinkBox to='#'>Terms and condition</LinkBox>
         </Items>
         <Items>
             <LinkBox>Retailers</LinkBox>
         </Items>
         <Items>
             <LinkBox>Privacy policy</LinkBox>
         </Items>
     </List>
    </FlexContainer>   
</LeftSection>
<RightSection>
        <SpanText>Choose country</SpanText>
</RightSection>
        </UpSection>
        
        <Footerdropdown> <FooterdropDown /> </Footerdropdown>


        <DownSection>
  
        <LeftBox>
        <ParagrahHeading>ACCESSORIES OF ATTRACTION</ParagrahHeading >
    <ParagrahText>
    <strong>IDEAL OF SWEDEN’s</strong> products are designed and developed in Sweden, a pioneering country in both creativity and new thinking, and sustainable environmental aspects. We have developed a unique ecosystem of compatible magnetic products such as mobile cases, wallets, power banks, lightning cables and different kinds of mounts which all make the use of mobile devices easier. Our product collection is made to be adjusted to different situations and occasions without sacrificing design or style. We constantly update our products so that we can complete current trends within interior and fashion
     and we always have quality, functionality and high standard as our prime key words.
    </ParagrahText>
        </LeftBox>
    
<RightBox>
<RightBoxText>ideal of sweden</RightBoxText>
</RightBox>
 
        </DownSection>
    </MiddleSection>

    <LastSection>
<Foot/>

    </LastSection>

    </FooterContainer>
    
)

export default Footer