import cakeReducer from "./cake/cake-reducer";
import {createStore} from "redux";

const store = createStore(cakeReducer);
export default store;
