import { StatusBar } from 'expo-status-bar';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from 'src/screeens/home';
import { ThemeProvider } from 'styled-components';
import theme from '@theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  return (
    <ThemeProvider theme={theme} >
      <View style={styles.container}>
        {fontsLoaded ? (<HomeScreen />) : (<ActivityIndicator size="large" color="#000" />)}
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
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
