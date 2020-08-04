import {combineReducers} from 'redux'
import ShopReducer from '../redux/shop/shop.reducer'
import CartReducer from '../redux/cartItems/cartItems.reducer'
import directoryReducer from '../redux/shop/directoryImg-Data'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:'root',
    storage,
    whitelist:['Cart','Shop']
}
const rootReducer = combineReducers({
    Shop:ShopReducer,
    Cart:CartReducer,
    directory:directoryReducer,
    
})

export default persistReducer(persistConfig,rootReducer);
