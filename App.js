import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingScreen from './src/screens/SettingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        />
        <Stack.Screen 
        name="Profile"
        component={ProfileScreen}
        />
        <Stack.Screen 
        name="Setting"
        component={SettingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
