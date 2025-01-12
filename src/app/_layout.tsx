import * as Colors from "@bacons/apple-colors";
import { Tabs } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { I18nextProvider, useTranslation } from "react-i18next";
import { getLocales } from "expo-localization";
import i18n from "@/localization/i18n";
import { BlurView } from "expo-blur";
import { StyleSheet, useColorScheme } from "react-native";

export default function RootLayout() {
  const { t } = useTranslation();
  let colorScheme = useColorScheme();

  if (!getLocales()[0]?.languageCode) return;

  return (
    <I18nextProvider i18n={i18n}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            borderColor: Colors.systemGray6,
          },
          tabBarBackground: () => (
            <BlurView
              tint={
                colorScheme == "dark"
                  ? "systemChromeMaterialDark"
                  : "systemChromeMaterialLight"
              }
              intensity={100}
              style={StyleSheet.absoluteFill}
            />
          ),
        }}
      >
        <Tabs.Screen
          name="(index)"
          options={{
            title: t("home"),
            tabBarIcon: ({ color, focused }) => (
              <IconSymbol
                name={focused ? "house.fill" : "house"}
                size={28}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="(portfolio)"
          options={{
            title: t("portfolio"),
            tabBarIcon: ({ color, focused }) => (
              <IconSymbol
                name={"iphone.app.switcher"}
                size={28}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </I18nextProvider>
  );
}
