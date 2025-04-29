import ThemeProvider from "@/components/ui/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Stack from "@/components/ui/Stack";
import { BlurView } from "expo-blur";
import { useColorScheme, View } from "react-native";
import * as AC from "@bacons/apple-colors";

const queryClient = new QueryClient();

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: "",
              headerBackground() {
                return (
                  <View
                    style={{ flex: 1, backgroundColor: AC.systemGroupedBackground }}
                  />
                );
              },
            }}
          />
          <Stack.Screen
            name="project/[slug]"
            options={{ title: "Project" }}
            modal
          />
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
