import { combineReducers } from "redux"
import quantityReducer from "./quantityReducer"
import cartReducer from "./cartReducer"
import loginReducer from "./loginReducer"
import themeReducer from "./themeReducer"

const reducers=combineReducers({
    quantity:quantityReducer,
    cart:cartReducer,
    login:loginReducer,
    theme:themeReducer,
})

export default reducers