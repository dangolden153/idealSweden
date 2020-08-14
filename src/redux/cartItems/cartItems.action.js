import CartType from './cartItems.type'

export const TOggleNav = () => ({
  type:CartType.TOOGLE_NAV
})


export const AddItems =item =>({
  type:CartType.Add_Items,
  payload:item
})

export const RemoveItems = item=>({
  type: CartType.REMOVE_ITEM,
  payload: item
 
})

export const toggleNavBar = () => ({
  type: CartType.HIDE_NAV
})

