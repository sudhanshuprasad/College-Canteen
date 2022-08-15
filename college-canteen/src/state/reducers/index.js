import { combineReducers } from "redux"
import quantityReducer from "./quantityReducer"
import cartReducer from "./cartReducer"
import loginReducer from "./loginReducer"

const reducers=combineReducers({
    quantity:quantityReducer,
    cart:cartReducer,
    login:loginReducer,
})

export default reducers