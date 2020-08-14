import React,{Component} from 'react' 
import FooterdropDown from './footer-dropDown.component'

const Items = [
    {
        id: 1,
        name: 'dan'
    },
    {
        id: 1,
        name: 'sam'
    },
    {
        id: 1,
        name: 'man'
    },
    {
        id: 1,
        name: 'tom'
    }
]

class Item extends Component{
    constructor(){
        super();
        this.state= {
            items:Items
        }
    }
    


    render(){
     const   {items} = this.state

        return (
            <div>
            {
                items.map(item=>( 
                    <FooterdropDown key={item.id}> {item}</FooterdropDown>
                ))   
            }
            </div>
            
        )
    }
    
}

export default Item