import React from 'react'
import Collections from '../Collection/Collections.component'
import './colection-item.scss'

const CollectionItems = ({item:{items,title} }) =>(
<div className="collectionitem">
    <div className="items">
    {
    items.map(item =>
    <Collections key={item.id} item={item}/>)
    }
    </div>
    
</div>
)

export default CollectionItems;