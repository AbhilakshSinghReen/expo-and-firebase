import { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Login() {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignInWithGoogleButtonClick = async () => {
    setIsSigningIn(true);
    // sign in with Google logic goes here
    console.log("Sign In With Google Clicked");
    setIsSigningIn(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo & Firebase</Text>
      <Text style={styles.subtitle}>Google Auth Tutorial</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignInWithGoogleButtonClick} disabled={isSigningIn}>
        <FontAwesome6 name="google" size={26} color="white" />
        <Text style={styles.buttonText}>Sign In With Google</Text>

        {isSigningIn && <ActivityIndicator size={26} color="#ffffff" />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 200,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1B9CFC",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  buttonText: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
