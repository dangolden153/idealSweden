import React from 'react'
import {connect} from 'react-redux'
import AllCollectionItems from '../All-collectionItems/All-collectionItems'

const AllCollections=({section})=>{

    return (
    <Collections>
    {
        section.map(item=>
        {<AllCollectionItems key={item.id} item={item}/>})
    }
    </Collections>
)
}
const MapStateToProps = ({directory: {section}})=>({
    section
})
export default connect(MapStateToProps)(AllCollections);