import { Platform, useColorScheme, Appearance } from "react-native";
import * as Colors from "@bacons/apple-colors";
import ThemeProvider from "@/providers/ThemeProvider";
import Stack from "@/components/ui/Stack";
import i18n from "@/localization/i18n";
import { BlurView } from "expo-blur";

export default function RootLayout({ segment }: { segment: string }) {
  const name = getRouteName(segment);
  let colorScheme = useColorScheme();

  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          ...(process.env.EXPO_OS == "web" && {
            headerTransparent: true,
            headerBackground() {
              return (
                <BlurView
                  intensity={100}
                  tint={
                    colorScheme == "dark"
                      ? "systemChromeMaterialDark"
                      : "systemChromeMaterialLight"
                  }
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                />
              );
            },
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }),
          ...(Platform.OS == "ios" && {
            headerTransparent: true,
            headerShadowVisible: true,
            headerLargeStyle: {
              backgroundColor: Colors.systemGroupedBackground as any,
            },
            headerStyle: {
              // Hack to ensure the collapsed small header shows the shadow / border.
              backgroundColor: "rgba(255,255,255,0.01)",
            },
            headerBlurEffect: "prominent",
            headerLargeTitle: true,
            headerLargeTitleShadowVisible: false,
          }),
        }}
      >
        <Stack.Screen
          name={name}
          options={{
            title: titles[name],
          }}
        />

        <Stack.Screen
          getId={({ params }) => params?.slug}
          name="project/[slug]"
          options={{
            title: "Project",
            ...(Platform.OS == "ios" && {
              presentation: "modal",
            }),
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

export const unstable_settings = {
  initialRouteName: "index",
  portfolio: {
    initialRouteName: "portfolio",
  },
};

const titles = {
  index: i18n.t("home"),
  portfolio: i18n.t("portfolio"),
};

function getRouteName(segment: string) {
  return segment.replace(/\((.+)\)/, "$1") as keyof typeof titles;
}
