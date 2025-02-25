// App.tsx
import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "react-native";
import { registerRootComponent } from "expo"
import { useColorScheme } from "./src/hooks/useColorScheme";
import StackNavigator from "./src/navigation/StackNavigator";
import { GluestackUIProvider } from "./src/components/ui/gluestack-ui-provider";

const queryClient = new QueryClient();

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode={colorScheme as "light" | "dark"}>
        <NavigationContainer
          theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <StackNavigator />
        </NavigationContainer>
        <StatusBar
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        />
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}

registerRootComponent(App);
