import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Login from './telas/Login';
import Cadastro from './telas/Cadastro';
import Filmes from './telas/Filmes';
import Sinopse from './telas/Sinopse';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Pilha da aba Login: Login -> Filmes -> Sinopse
function PilhaLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Filmes" component={Filmes} />
      <Stack.Screen 
      name="Sinopse" 
      component={Sinopse}
      options={({route}) => ({title: route.params.filme.titulo})} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Entrar"
          component={PilhaLogin}
          options={{
            headerShown: false,
            title: 'Login',
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: 'Criar Conta',
            tabBarIcon: ({ color, size }) => <Ionicons name="person-add" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}