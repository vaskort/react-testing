import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { getUsers } from "./users";

const mockStore = configureMockStore([thunk, promiseMiddleware()]);

describe("User Actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      users: {}
    });
  });

  describe("getUsers action creator", () => {
    it("dispatches GET_USERS action and returns data on success", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: [{ id: 1, name: "Vasilis" }]
        })
      );

      await store.dispatch(getUsers());
      const actions = store.getActions();
      // [ { type: 'GET_USERS_PENDING' },
      //   { type: 'GET_USERS_FULFILLED', payload: { data: [Array] } } 
      // ]

      expect.assertions(3);
      expect(actions[0].type).toEqual("GET_USERS_PENDING");
      expect(actions[1].type).toEqual("GET_USERS_FULFILLED");
      expect(actions[1].payload.data[0].name).toEqual("Vasilis");
    });

    it("tests GET_USERS action and that returns an error", async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.reject({
          error: "Something bad happened :("
        })
      );
      
      try { 
        await store.dispatch(getUsers());
      } catch {
        const actions = store.getActions();

        expect.assertions(3);
        expect(actions[0].type).toEqual("GET_USERS_PENDING");
        expect(actions[1].type).toEqual("GET_USERS_REJECTED");
        expect(actions[1].payload.error).toEqual("Something bad happened :(");
      }
    });
  });
});
