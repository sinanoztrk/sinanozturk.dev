import { View } from "react-native";
import { Image } from "expo-image";
import * as Form from "@/components/ui/Form";
import * as AC from "@bacons/apple-colors";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ProjectList } from "@/components/ProjectList";
import { Projects } from "@/constants/Projects";

export default function App() {
  return (
    <Form.List>
      <TitleSection />
      <AboutMeSection />
      <ChildHoodImage />
      <LinksSection />
      <ProjectList data={Projects} />
    </Form.List>
  );
}

export const TitleSection = () => {
  return (
    <Form.Section>
      <Form.HStack style={{ gap: 16 }}>
        <Image
          source={require("@/assets/images/avatar.png")}
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

export const AboutMeSection = () => {
  return (
    <Form.Section>
      <View style={{ alignItems: "center", gap: 8, padding: 16, flex: 1 }}>
        <Image
          source={require("@/assets/images/avatar.png")}
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

export const LinksSection = () => {
  return (
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
      <Form.Link href="https://x.com/snanoztrk" target="_blank">
        x
      </Form.Link>
    </Form.Section>
  );
};

export const ChildHoodImage = () => {
  return (
    <Image
      source={require("@/assets/images/childhood.jpg")}
      style={{
        width: "100%",
        height: 200,
        borderRadius: 10,
        filter: "grayscale(40%)" as any,
      }}
      contentFit="cover"
      contentPosition="center"
    />
  );
};
