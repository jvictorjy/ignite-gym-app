import { StatusBar, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { THEME } from 'src/theme';
import { Signin } from '@screens/Signin';
import { Signup } from '@screens/Signup';
import { Routes } from '@routes/index';
import { AuthContextProvider } from '@contexts/AuthContext';

export default function App() {
  const [fonstsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <AuthContextProvider>
        {fonstsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
      
    </NativeBaseProvider>
  );
}