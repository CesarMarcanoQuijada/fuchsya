import { Alert } from "react-native";

export default function validateName(name, state) {
  const regexp = /^[^0-9,a-z,\W][a-z]+$/;
  if (!regexp.test(name)) {
    if (!state) Alert.alert("Error", "Invalid Name/Surname.");
    if (state) state.set({ err: true, txt: name });
    return false;
  } else {
    if (state) state.set({ err: false, txt: name });
    return true;
  }
}
