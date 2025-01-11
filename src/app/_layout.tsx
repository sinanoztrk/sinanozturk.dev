import { SplashScreen, Tabs } from "expo-router";
import * as Colors from "@bacons/apple-colors";
import "../../global.css";
import { IconSymbol } from "@/components/ui/IconSymbol";
import * as AC from "@bacons/apple-colors";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.systemBackground,
          borderColor: Colors.separator,
        },
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: "Ana Sayfa",
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
            <IconSymbol name={"iphone.app.switcher"} size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
