import * as AC from "@bacons/apple-colors";
import * as Form from "@/components/ui/Form";
import { View } from "react-native";
import { SingleImage } from "@/components/ui/SingleImage";

export const AboutView = () => {
  return (
    <Form.Section>
      <View style={{ alignItems: "center", gap: 8, padding: 16, flex: 1 }}>
        <SingleImage
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
          İstanbul'da yaşayan bir yazılım mühendisiyim. Mobil ve web frontend
          geliştirme alanında uzmanlaşmış olup, kullanıcı odaklı ve işlevsel
          uygulamalar geliştiriyorum. Boş zamanlarımda full-stack projeler
          üzerinde çalışarak kendimi geliştirmeye devam ediyorum.
        </Form.Text>
      </View>
    </Form.Section>
  );
};
