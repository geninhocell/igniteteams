import { Loading } from '@components/Loading';
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import { Routes } from '@routes/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
