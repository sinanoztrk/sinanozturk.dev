import * as Colors from "@bacons/apple-colors";
import { Tabs } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { BlurView } from "expo-blur";
import { StyleSheet, useColorScheme } from "react-native";
import { ColorSchemeProvider } from "@/providers/ColorSchemeProvider";
import SeoProvider from "@/providers/SeoProvider";

export default function RootLayout() {
  let colorScheme = useColorScheme();

  return (
    <SeoProvider>
      <ColorSchemeProvider>
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
                intensity={process.env.EXPO_OS == "web" ? 75 : 100}
                style={StyleSheet.absoluteFill}
              />
            ),
          }}
        >
          <Tabs.Screen
            name="(index)"
            options={{
              title: "Anasayfa",
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
              title: "Portfolyo",
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
      </ColorSchemeProvider>
    </SeoProvider>
  );
}
