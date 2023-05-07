import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native";
import { auth } from "../../config";

const Auth = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const signIn = async () => {
    console.log("Autenticar");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    console.log("Logout");
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Text style={{ color: "#fff" }}>{"E-mail:"}</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
        style={{
          padding: 2,
          marginBottom: 50,
          width: "70%",
          height: "10%",
          backgroundColor: "#fff",
        }}
      />
      <Text style={{ color: "#fff" }}>{"Senha:"}</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        style={{
          padding: 2,
          marginBottom: 50,
          width: "70%",
          height: "10%",
          backgroundColor: "#fff",
        }}
      />
      <Button
        onPress={signIn}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        style={{ marginBottom: 50 }}
      />

      <Button
        onPress={logout}
        title="Logout"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </>
  );
};

export default Auth;
