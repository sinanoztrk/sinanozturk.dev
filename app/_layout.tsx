import ThemeProvider from "@/components/ui/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Stack from "@/components/ui/Stack";

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="index" options={{ title: "" }} />
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
