import React from "react";
import AppNavigation from "./app/navigation/AppNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources } from "./app/hooks";

const App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) return null;
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
};

export default App;
