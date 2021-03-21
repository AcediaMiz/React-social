import { combineReducers, createStore } from "redux";
import dialogsReduser from "./Redusers/dialogsReduser";
import profileReduser from "./Redusers/profileReduser";
import usersReduser from "./Redusers/usersReduser";

let reduserJoin = combineReducers({
  dialogsPage: dialogsReduser,
  profilePage: profileReduser,
  usersPage: usersReduser,
});

let store = createStore(reduserJoin);
window.store = store;
export default store;
