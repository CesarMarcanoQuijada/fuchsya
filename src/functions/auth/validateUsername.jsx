import { Alert } from "react-native";

export default function validateUsername(username, state) {
  const regexp = /^[^\W,\d,A-Z,\s][a-z,_\.,0-9]{5,39}$/;
  if (!regexp.test(username)) {
    if (!state) Alert.alert("Error", "Invalid Username.");
    if (state) state.set({ err: true, txt: username });
    return false;
  } else {
    if (state) state.set({ err: false, txt: username });
    return true;
  }
}
