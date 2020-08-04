export const AddToCart = (CartItems, cartItemToAdd) => {
    const existingCartItem = CartItems.find(cartitem => cartitem.id === cartItemToAdd.id)


if (existingCartItem){
    return CartItems.map(cartitem => cartitem.id === cartItemToAdd.id ?
        {...cartitem, quantity: cartitem.quantity + 1}
        : cartitem
        )
}

return [...CartItems, {...cartItemToAdd,quantity:1}]

}



