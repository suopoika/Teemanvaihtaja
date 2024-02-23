import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainAppbar from './components/MainAppbar';
import Home from './screens/Home';
import Settings from './screens/Settings';
import { ThemeContext } from './context/ThemeContext';
import ThemeProvider from './context/ThemeProvider';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <PaperProvider>
      <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#666" barStyle="light-content" />
        <Stack.Navigator
         initialRouteName="Home"
          screenOptions={{
            header: (props) => <MainAppbar {...props} backgroundColor="#666" color="white" />
          }}
       >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component = {Settings}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
