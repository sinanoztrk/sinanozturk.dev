import * as AC from "@bacons/apple-colors";
import * as Form from "@/components/ui/Form";
import React from "react";
import Stack from "@/components/ui/Stack";
import { GithubRepositoriesView } from "@/features/GithubRepositoriesView";
import { Image } from "expo-image";
import { ChildHoodView } from "@/features/ChildHoodView";
import { AboutView } from "@/features/AboutView";
import { LinksView } from "@/features/LinksView";
import { BannerView } from "@/features/BannerView";
import { Text, View } from "react-native";
import { ProjectsView } from "@/features/ProjectsView";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

export default function Page() {
  const ref = useAnimatedRef<Animated.ScrollView>();
  const scroll = useScrollViewOffset(ref);
  const style = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scroll.value, [0, 500], [0, 1], "clamp"),
      transform: [
        { translateY: interpolate(scroll.value, [0, 500], [5, 0], "clamp") },
      ],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerLargeTitle: false,
          headerTitle() {
            if (process.env.EXPO_OS === "web") {
              return (
                <Animated.View
                  style={[
                    style,
                    { flexDirection: "row", gap: 12, alignItems: "center" },
                  ]}
                >
                  <Image
                    source={{ uri: "https://github.com/sinanoztrk.png" }}
                    style={[
                      {
                        aspectRatio: 1,
                        height: 30,
                        borderRadius: 8,
                        borderWidth: 0.5,
                        borderColor: AC.separator,
                      },
                    ]}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      color: AC.label,
                      fontWeight: "bold",
                    }}
                  >
                    Sinan Öztürk
                  </Text>
                </Animated.View>
              );
            }
            return (
              <Animated.Image
                source={{ uri: "https://github.com/sinanoztrk.png" }}
                style={[
                  style,
                  {
                    aspectRatio: 1,
                    height: 30,
                    borderRadius: 8,
                    borderWidth: 0.5,
                    borderColor: AC.separator,
                  },
                ]}
              />
            );
          },
          headerTitleAlign: "center",
        }}
      />
      <Form.List ref={ref}>
        <BannerView />
        <AboutView />
        <ChildHoodView />
        <LinksView />
        <ProjectsView />
        <GithubRepositoriesView />
        <Form.Text style={[Form.FormFont.caption, { textAlign: "center" }]}>
          sinanozturk.dev - 2025
        </Form.Text>
      </Form.List>
    </View>
  );
}
