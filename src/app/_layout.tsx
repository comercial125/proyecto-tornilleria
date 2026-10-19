import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function Layout() {
  useEffect(() => {
    // Le indica a Expo Go que oculte la pantalla estática de arranque del sistema inmediatamente
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}