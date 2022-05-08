import { combineReducers } from "redux"
import quantityReducer from "./quantityReducer"

const reducers=combineReducers({
    quantity:quantityReducer
})

export default reducers