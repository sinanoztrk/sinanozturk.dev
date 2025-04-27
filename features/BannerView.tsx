import * as Form from "@/components/ui/Form";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Image } from "expo-image";
import { View } from "react-native";
import * as AC from "@bacons/apple-colors";

export const BannerView = () => {
  return (
    <Form.Section>
      <Form.HStack style={{ gap: 16 }}>
        <Image
          source={{ uri: "https://github.com/sinanoztrk.png" }}
          style={{
            aspectRatio: 1,
            height: 48,
            borderRadius: 999,
          }}
        />

        <View style={{ gap: 4 }}>
          <Form.Text style={Form.FormFont.default}>Sinan Öztürk</Form.Text>
          <Form.Text style={Form.FormFont.caption}>yazılım mühendisi</Form.Text>
        </View>

        <View style={{ flex: 1 }} />

        <IconSymbol
          color={AC.systemBlue}
          name="laptopcomputer"
          size={24}
          animationSpec={{
            effect: {
              type: "pulse",
            },
            repeating: true,
          }}
        />
      </Form.HStack>
    </Form.Section>
  );
};
