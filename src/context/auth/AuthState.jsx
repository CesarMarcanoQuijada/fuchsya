import React, { useEffect, useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./reducer";
import { LOGIN, LOGOUT } from "../types";
import { getToken } from "../../functions";

const AuthState = (props) => {
  const initialState = {
    user: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = async (userToken) => {
    try {
      dispatch({ type: LOGIN, payload: userToken });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      dispatch({ type: LOGOUT, payload: null });
    } catch (error) {
      console.error(error);
    }
  };

  const updateContextToken = async () => {
    try {
      const token = await getToken();
      login(token);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateContextToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
