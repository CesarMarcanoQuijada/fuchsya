import { Alert } from "react-native";

export default function validatePass(pass, state) {
  const regexp = /^[^\',\,,\",\(,\),\[,\],\{,\},\\,\/,\<,\>,\`]{8,100}$/;
  if (!regexp.test(pass)) {
    if (!state) Alert.alert("Error", "Invalid password.");
    if (state) state.set({ err: true, txt: pass });
    return false;
  } else {
    if (state) state.set({ err: false, txt: pass });
    return true;
  }
}
