import * as SecureStore from "expo-secure-store";

/**
 * Save in Expo Secure Store the user token
 * @param {null|string} userToken
 */
export const manageToken = async (userToken) => {
  if (userToken) {
    await SecureStore.setItemAsync("userToken", userToken);
  } else {
    await SecureStore.deleteItemAsync("userToken");
  }
};

/**
 * Get the user token
 */
export const getToken = async () => {
  const token = await SecureStore.getItemAsync("userToken");

  return token;
};
