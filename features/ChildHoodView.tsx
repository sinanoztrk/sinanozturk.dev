import { SingleImage } from "@/components/ui/SingleImage";
import { View } from "react-native";

export const ChildHoodView = () => {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <SingleImage
        source={require("@/assets/images/childhood.jpg")}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 10,
          filter: "grayscale(40%)" as any,
        }}
      />
    </View>
  );
};
