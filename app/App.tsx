import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes/';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsloaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })
  return (
    <NativeBaseProvider theme={THEME}    >
      {
        fontsloaded ? <Routes /> : <Loading />
      }
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
