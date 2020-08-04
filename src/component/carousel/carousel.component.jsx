import React, {Component} from 'react'
import Data from './carousel-data'
import Card from '../Card/Card'
import {ReactComponent as Right} from '../pictures/right-arrow.svg'
import {ReactComponent as Left} from '../pictures/left-arrow.svg'

import  './carousel.styles.scss'

class Carousel extends Component {
    constructor(){
        super();

        this.state ={
            Properties :Data.Properties,
            property: Data.Properties[4]
        }
    }

    NextProperty = () =>{
    const NewIndex = this.state.property.index+1;
        this.setState({
            property:Data.Properties[NewIndex]
        })
}
    preProperty = () =>{
        const NewIndex = this.state.property.index-1;
        this.setState({
            property:Data.Properties[NewIndex]
        })
    }
render(){
const {Properties, property} = this.state
    return(
        <div className='Carouselcontainer'>
        <div className="col">

     <div className='page'>
    <button className='btn-left' onClick={()=> this.preProperty()}
        disabled={property.index === 2}><Left className='left'/></button>

    <div className="cardslider">
            <div className="card-slider-wrapper" style={{
                'transform':`translateX(-${property.index*(100/Properties.length)}%)`
            }}>
          {
              Properties.map(property => <Card key={property.id} property={property} />)
          }  
            </div>
        </div>
        
        
        <button className='btn-right' onClick={()=> this.NextProperty()}
        disabled={property.index ===
         Data.Properties.length-3}><Right className='right'/></button>
       
</div>
</div>
</div>
    )
}
}

export default Carousel