import { Alert } from "react-native";

export default function validateEmail(email, state) {
  const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexp.test(email)) {
    if (!state) Alert.alert("Error", "Invalid Email.");
    if (state) state.set({ err: true, txt: email });
    return false;
} else {
    if (state) state.set({ err: false, txt: email });
    return true;
  }
}
