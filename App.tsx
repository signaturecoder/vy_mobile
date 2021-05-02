import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import VYHeader from './components/Header';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  console.log('outside ', isLoadingComplete);

  if (!isLoadingComplete) {
    console.log('inside ', isLoadingComplete);
    return null;
  } else {
    return (
      <SafeAreaProvider>
          <VYHeader />
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
