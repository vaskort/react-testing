import axios from "axios";

export const getUsers = () => dispatch => {
  return dispatch({
    type: "GET_USERS",
    payload: axios.get("https://jsonplaceholder.typicode.com/users")
  });
};
