import { combineReducers } from "redux"
import quantityReducer from "./quantityReducer"
import cartReducer from "./cartReducer"
import loginReducer from "./loginReducer"
import themeReducer from "./themeReducer"
import cartSizeReducer from "./cartSizeReducer"

const reducers=combineReducers({
    quantity:quantityReducer,
    cart:cartReducer,
    login:loginReducer,
    theme:themeReducer,
    cartSize:cartSizeReducer,
})

export default reducers