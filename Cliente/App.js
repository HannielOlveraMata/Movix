import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Home';
import RegistroScreen from './Screens/Registro';
import MercadoPagoScreen from './Screens/Details';
import { Provider } from 'react-redux';
import { store } from './store'; // Importa tu tienda Redux desde el archivo store.js en la raíz de la carpeta
import Details from './Screens/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Registro" component={RegistroScreen} />
          <Stack.Screen name="MercadoPago" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
