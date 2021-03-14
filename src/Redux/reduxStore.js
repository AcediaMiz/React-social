import { combineReducers, createStore } from "redux";
import dialogsReduser from "./Redusers/dialogsReduser";
import profileReduser from "./Redusers/profileReduser";
let reduserJoin = combineReducers({
  dialogsPage: dialogsReduser,
  profilePage: profileReduser,
});

let store = createStore(reduserJoin);

export default store;
