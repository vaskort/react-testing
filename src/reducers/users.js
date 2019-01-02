export default (state = {
  users: [],
  loading: false
}, action) => {
  switch (action.type) {
    case "GET_USERS_PENDING":
      return Object.assign({}, state, {
        loading: true,
      });
    case "GET_USERS_FULFILLED":
      return Object.assign({}, state, {
        users: action.payload.data,
        loading: false,
      });
    case "GET_USERS_REJECTED":
      return Object.assign({}, state, {
        loading: false
      });
    default:
      return state;
  }
};
