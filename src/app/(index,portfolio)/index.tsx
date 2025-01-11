import { Text, View } from "react-native";
import { Image } from "expo-image";
import * as Form from "@/components/ui/Form";
import * as AC from "@bacons/apple-colors";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        maxWidth: 650,
        marginHorizontal: "auto",
      }}
    >
      <Form.List navigationTitle="Ana Sayfa">
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
              <Form.Text style={Form.FormFont.caption}>
                software engineer
              </Form.Text>
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

        <Form.Section>
          <View style={{ alignItems: "center", gap: 8, padding: 16, flex: 1 }}>
            <Image
              source={{ uri: "https://github.com/sinanoztrk.png" }}
              style={{
                aspectRatio: 1,
                height: 64,
                borderRadius: 8,
              }}
            />
            <Form.Text
              style={{
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              Sinan Öztürk
            </Form.Text>
            <Form.Text
              style={{
                textAlign: "center",
                fontSize: 14,
                color: AC.secondaryLabel,
              }}
            >
              İstanbul'da yaşayan 25 yaşında bir yazılım mühendisiyim. Mobil ve
              web frontend geliştirme konusunda uzmanım. Boş zamanlarımda
              backend ve frontend projelerle ilgileniyorum. Kullanıcı odaklı ve
              işlevsel uygulamalar geliştirerek şirketlerle çalışıyorum. Kendimi
              sürekli geliştirmeye ve yeni teknolojilere açık olmaya özen
              gösteriyorum.
            </Form.Text>
          </View>
        </Form.Section>

        <Form.Section title="Bağlantılar">
          <Form.Link href="https://github.com/sinanoztrk" target="_blank">
            github
          </Form.Link>
          <Form.Link
            href="https://www.linkedin.com/in/sinanozturkk/"
            target="_blank"
          >
            linkedin
          </Form.Link>
          <Form.Link href="https://x.com/sinanozturkdev" target="_blank">
            x
          </Form.Link>
        </Form.Section>
      </Form.List>
    </View>
  );
}
