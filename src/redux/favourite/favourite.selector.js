import {createSelector} from 'reselect'

const selectFav = state => state.Favourite

export const selectFavItems = createSelector(
    [selectFav],
    Favourite => Favourite.favouriteItems
)


export const selectItemCounts = createSelector(
    [selectFavItems],
    favouriteItems=> favouriteItems.reduce((AccumulateItem,favouriteItems) =>
    AccumulateItem + favouriteItems.cartitem, 0)
)