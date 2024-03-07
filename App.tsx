import { StatusBar } from 'react-native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import { HomeScreen } from 'src/screeens/home';
import { ThemeProvider } from 'styled-components';
import theme from '@theme';
import { Loading } from '@components/Loading';
import { StatisticsScreen } from 'src/screeens/statistics/statistics';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return (
    <ThemeProvider theme={theme} >
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
        {fontsLoaded ? <StatisticsScreen /> : <Loading />}
    </ThemeProvider>
  );
}
