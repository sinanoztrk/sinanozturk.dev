"use server";

import { Text, View } from "react-native";
export default async function renderQRCode({ name }: { name: string }) {
  // Securely fetch data from an API, and read environment variables...

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          color: "blue",
        }}
      >
        Hello, {name}!
      </Text>
    </View>
  );
}
