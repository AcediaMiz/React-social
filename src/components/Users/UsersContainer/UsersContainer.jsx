import Users from "../Users/Users";
import { connect } from "react-redux";
import {
  followAC,
  setUsers,
  unfollowAC,
} from "../../../Redux/Redusers/usersReduser";
const mapState = (state) => {
  return {
    data: state.usersPage,
  };
};

const mapDispatch = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followAC(id));
    },
    unfollow: (id) => {
      dispatch(unfollowAC(id));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    },
  };
};
const UsersContainer = connect(mapState, mapDispatch)(Users);
export default UsersContainer;
