import React from 'react'

//import {} from './All-collectionItems'

const AllCollectionItems =({item})=>{
    const {imageurl,title} = item
    
    return (
    <CollectionItem>
<img src={imageurl} alt="all collection section pics"/>
<Text>{title}</Text>
    </CollectionItem>
)}

export default AllCollectionItems; 