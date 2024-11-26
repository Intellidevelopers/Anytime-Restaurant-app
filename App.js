// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import HomeScreen from './screens/HomeScreen';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}  />
        <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }}  />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}  />
        <Stack.Screen name="Forgot" component={ForgotPassword} options={{ headerShown: false }}  />
        <Stack.Screen name="Reset" component={ResetPassword} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
