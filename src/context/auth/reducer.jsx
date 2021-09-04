import { LOGIN, LOGOUT } from "../types";
import { manageToken } from "../../functions";

const AuthReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case LOGIN:
      manageToken(payload);
      return {
        ...state,
        user: payload,
      };
    case LOGOUT:
      manageToken(null);

      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default AuthReducer
