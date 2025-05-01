import * as Form from "@/components/ui/Form";
import { Image } from "expo-image";
import { Href } from "expo-router";
import { View } from "react-native";

export const AppStoreAppsView = () => {
  const apps = [
    {
      title: "Pinekle",
      description:
        "Pinekle, anılarını haritaya iliştirmeni sağlayan herkese açık bir pin ekleme uygulamasıdır.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a9/a7/8b/a9a78bd3-0bd8-f2f1-1e42-382c0730993e/AppIcon-0-0-1x_U007epad-0-1-85-220.png/230x0w.webp",
      href: "https://apps.apple.com/app/pinekle/id6744532435",
    },
    {
      title: "Docvivo Sağlık",
      description: "Sağlık yolculuğunu takip et",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/25/4c/01/254c01b9-c65f-6e24-c83b-1474a83bb840/AppIcon-0-0-1x_U007epad-0-1-85-220.png/230x0w.webp",
      href: "https://apps.apple.com/app/docvivo-health/id6670216913",
    },
  ] as {
    title: string;
    description: string;
    image: string;
    href: Href;
  }[];

  return (
    <Form.Section title="App Store">
      {apps?.map((item, index) => (
        <Form.Link key={index} href={item?.href} target="_blank">
          <Image
            source={{ uri: item?.image }}
            style={{
              aspectRatio: 1,
              height: 35,
              borderRadius: 5,
              marginRight: 16,
            }}
          />

          <View style={{ flex: 1 }}>
            <Form.Text style={Form.FormFont.default}>{item?.title}</Form.Text>
            <Form.Text style={Form.FormFont.caption} numberOfLines={1}>
              {item?.description}
            </Form.Text>
          </View>
        </Form.Link>
      ))}
    </Form.Section>
  );
};
