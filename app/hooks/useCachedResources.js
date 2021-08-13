import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          'Lato-Bold': require('../assets/Fonts/Lato-Bold.ttf'),
          'Lato-Light': require('../assets/Fonts/Lato-Light.ttf'),
          'Lato-Regular': require('../assets/Fonts/Lato-Regular.ttf'),
          'NunitoSans-Bold': require('../assets/Fonts/NunitoSans-Bold.ttf'),
          'NunitoSans-Light': require('../assets/Fonts/NunitoSans-Light.ttf'),
          'NunitoSans-Regular': require('../assets/Fonts/NunitoSans-Regular.ttf'),
          'NunitoSans-SemiBold': require('../assets/Fonts/NunitoSans-SemiBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
