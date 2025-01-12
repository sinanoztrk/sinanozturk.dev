import { View } from "react-native";
import { Image } from "expo-image";
import * as Form from "@/components/ui/Form";
import * as AC from "@bacons/apple-colors";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Fragment } from "react";
import Head from "expo-router/head";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Head>
        <title>Sinan Öztürk - {t("softwareEngineer")?.toLowerCase()}</title>
        <meta name="description" content={t("bio")} />
      </Head>
      <View
        style={{
          flex: 1,
          width: "100%",
          maxWidth: 650,
          marginHorizontal: "auto",
        }}
      >
        <Form.List>
          <TitleSection />
          <AboutMeSection />

          <Form.Section title={t("links")}>
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
    </Fragment>
  );
}

export const TitleSection = () => {
  const { t } = useTranslation();

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
          <Form.Text style={Form.FormFont.caption}>
            {t("softwareEngineer")?.toLowerCase()}
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
  );
};

export const AboutMeSection = () => {
  const { t } = useTranslation();

  return (
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
          {t("bio")}
        </Form.Text>
      </View>
    </Form.Section>
  );
};
