import * as SecureStore from "expo-secure-store";

export default logout = async ({ navigation }) => {
  try {
    await SecureStore.deleteItemAsync("user-token");

    // navigation.replace("Register");
  } catch (error) {
    console.error(error);
  }
};
