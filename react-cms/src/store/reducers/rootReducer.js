import { combineReducers } from "redux";
import customerReducer from "./customerReducer";
import customerDetailReducer from "./customerDetailReducer";

 const rootReducer = combineReducers({
    customerReducer,
    customerDetailReducer
})

export default rootReducer