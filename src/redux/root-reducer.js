import {combineReducers} from "redux";
import cakeReducer from "./cake/cake-reducer";
import iceCreamReducer from "./ice-cream/ice-cream-reducer";
import UserReducer from "./user-type/user-reducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: UserReducer
});

export default rootReducer;
