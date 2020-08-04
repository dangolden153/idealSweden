import React from 'react'
import {connect} from 'react-redux'
import CollectionItems from '../colection-item/collection-item.component'
import './collectionPreviews.scss'

const CollectionPreviews =({collections}) =>(
    <div className="collectionPreview">
{
    collections.map(item =>
    <CollectionItems key={item.id} item={item}/>) 
}
    </div>
)

const MapStateToProps = ({Shop: {collections}})=>({
    collections
})
export default connect(MapStateToProps)(CollectionPreviews)
