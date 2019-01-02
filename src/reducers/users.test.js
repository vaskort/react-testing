import users from "./users";

describe("users Reducer", () => {
  const initialState = {
    users: [],
    loading: false
  };

  it("returns the initial state correctly", () => {
    const reducer = users(undefined, {});

    expect(reducer).toEqual(initialState);
  });

  it("handles GET_USERS_PENDING as expected", () => {
    const reducer = users(initialState, { type: "GET_USERS_PENDING" });

    expect(reducer).toEqual({
      users: [],
      loading: true
    });
  });

  it("handles GET_USERS_FULFILLED as expected", () => {
    const reducer = users(initialState, {
      type: "GET_USERS_FULFILLED",
      payload: {
        data: [
          {
            id: 1,
            name: "foo"
          }
        ]
      }
    });

    expect(reducer).toEqual({
      users: [
        {
          id: 1,
          name: "foo"
        }
      ],
      loading: false
    });
  });
});
