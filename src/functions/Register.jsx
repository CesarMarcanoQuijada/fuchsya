import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";

  const registerFunc = async ({setSpinner, name, password, password2,email,username,surname,navigation}) => {
    setSpinner(true)
    try {
      if (password2 !== password) throw new Error("Passwords are not equal");
      const user = await register({
        variables: {
          name: (
            name.split("")[0].toUpperCase() + name.split(name.split("")[0])[1]
          ).split(" ")[0],
          password,
          username,
          email,
          surname: (
            surname.split("")[0].toUpperCase() +
            surname.split(surname.split("")[0])[1]
          ).split(" ")[0],
        },
      });
      if (user.data.Verify.error) {
        setSpinner(false)
        Alert.alert("Error", user.data.Verify);
      } else {
        setSpinner(false)
        await SecureStore.setItemAsync(
          "user-register-verify-stage",
          JSON.stringify(user.data.Verify)
          );
          navigation.replace('Verify')
      }
    } catch (error) {
      Alert.alert("Error", "" + error);
      setSpinner(false)
    }
  };