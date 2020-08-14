import React from 'react'
import Pics from '../pictures/section5.jpg'
import {ReactComponent as Global} from '../pictures/planet-earth.svg'
import {ReactComponent as Nav} from '../pictures/down-arrow.svg'
import Instagram from '../pictures/instagram-black.svg'


import {ImgBox,Img,Container, Sidebar,First_con,Right_con,Left_con,Second_con,Third_con,Link_text,
    Span,Flex_con,Second_Left_con,Second_Right_con,Svg_box,Global_container,Iphone_box,
    Img_text,Img_container,Flex_container,Picz,Text, Text_box,Image_text,Svg_inst,Svg_img,Last_section
    ,Down_text, Attr_Text,Inst_Text,Pics_container} from './Side-navBar'


const Side_bar =()=>(
    <Sidebar>
        <Container>
<First_con>
    <Iphone_box>
    <Left_con>iPhone 11 Pro </Left_con>
    <Svg_box><Nav height='15px' width='15px' /></Svg_box>      
    </Iphone_box>
    
    <Global_container>
    <Global height='15px' width='15px' />
    <Right_con>EU</Right_con>
    <Nav height='15px' width='15px' />
    </Global_container>
    
</First_con>

<Img_text>
<Second_con>
<Second_Right_con>Collections</Second_Right_con>
    <Second_Left_con><Link_text>show all</Link_text></Second_Left_con>
</Second_con>

<Img_container>
<Flex_container>
<Picz style={{
    backgroundImage : `url('https://ideal-production.imgix.net/2020/07/06093729/CollectionThumbnail_Montazami.png?w=160&auto=format&fit=clip&fm=jpg')`
}}>
</Picz>
<Text>Montazami X IDEAL OF SWEDEN </Text>         
</Flex_container>

<Flex_container>
<Picz style={{
    backgroundImage : `url('https://ideal-production.imgix.net/2020/04/28070051/CosmicGreenSwirl-MagneticRingMount_SS20-1_2160x2700.png?w=160&auto=format&fit=clip&fm=jpg)`
}}>
</Picz>
<Text>Spring Summer 20</Text>
</Flex_container>

<Flex_container>
<Picz style={{
    backgroundImage : `url('https://ideal-production.imgix.net/2020/03/11104807/0002_PortLaurentBottle-WildLeopardBottle_Wind_iDealofswedenxGlacial-12.png?w=160&auto=format&fit=clip&fm=jpg')`
}}>
</Picz>
<Text>  Ideal of Sweden x Glacial</Text>
</Flex_container>
</Img_container>

</Img_text>


<Third_con>

<Flex_con>
<ImgBox>
<Img style={{
    backgroundImage : `url('https://ideal-production.imgix.net/2020/06/10161557/Fashion-case-SS20.png?w=80&auto=format&fit=clip&fm=jpg')`
}}>
</Img>
</ImgBox>
<Span>phone cases</Span>
</Flex_con>


<Flex_con>
<ImgBox>
<Img style={{
    backgroundImage : `url('https://ideal-production.imgix.net/2020/06/10161514/RingMountGold.png?w=80&auto=format&fit=clip&fm=jpg')`
}}>
</Img>
</ImgBox>
<Span>phone accessories</Span>
</Flex_con>

<Flex_con>
<ImgBox>
<Img style={{
    backgroundImage : `url('https://ideal-production.imgix.net/2020/06/10162036/AirPodsCase_FashionPrint1.png?w=80&auto=format&fit=clip&fm=jpg')`
}}>
</Img>
</ImgBox>
<Span>airpods cases</Span>
</Flex_con>

<Flex_con>
<ImgBox>
<Img style={{
    backgroundImage : `url('https://ideal-production.imgix.net/2020/06/11094626/QI-Charger1.png?w=80&auto=format&fit=clip&fm=jpg')`
}}>
</Img>
</ImgBox>
<Span>charger</Span>
</Flex_con>

<Flex_con>
<ImgBox>
<Img style={{
    backgroundImage : `url('https://ideal-production.imgix.net/2020/06/10161620/Pouch1.png?w=80&auto=format&fit=clip&fm=jpg')`
}}>
</Img>
</ImgBox>
<Span>bags</Span>
</Flex_con>

<Flex_con>
<ImgBox>
<Img style={{
    backgroundImage : `url('https://ideal-production.imgix.net/2020/06/10162104/GLACIAL_Hela_Flaskan.png?w=80&auto=format&fit=clip&fm=jpg')`
}}>
</Img>
</ImgBox>
<Span>accessories</Span>
</Flex_con>

</Third_con>
<Text_box> 
<Image_text>
    <Pics_container>
    <Svg_inst style={{
    backgroundImage: `url(${Instagram})`
}}>
</Svg_inst>
    </Pics_container>

<Inst_Text>instashot</Inst_Text> 
</Image_text>


<Image_text>
    <Pics_container>
    <Svg_img style={{
    backgroundImage: `url('https://ideal-production.imgix.net/2019/11/07164159/BLACK-AOA3.png?auto=format&fit=clip&fm=jpg')`
}}>

</Svg_img>
    </Pics_container>

<Inst_Text>accessories of attraction</Inst_Text>
</Image_text>

<Attr_Text>for her</Attr_Text>

<Attr_Text>for him</Attr_Text>
</Text_box>

<Last_section>

    <Down_text>FAQ</Down_text>
    <Down_text>Retailers</Down_text>
    <Down_text>Careers</Down_text>
    <Down_text>Contact</Down_text>
    <Down_text>Track Order</Down_text> 

</Last_section>
</Container>
    </Sidebar>
)

export default Side_bar;