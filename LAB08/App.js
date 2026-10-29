import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './telas/Login';
import Cadastro from './telas/Cadastro';
import Menu from './telas/Menu';
import Adivinhacao from './telas/Adivinhacao';
import PedraPapelTesoura from './telas/PedraPapelTesoura';
import Score from './telas/Score';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Criar Conta' }} />
        <Stack.Screen name="Menu" component={Menu} options={{ title: 'Escolha um jogo' }} />
        <Stack.Screen name="Adivinhacao" component={Adivinhacao} options={{ title: 'Jogo da Adivinhação' }} />
        <Stack.Screen name="PedraPapelTesoura" component={PedraPapelTesoura} options={{ title: 'Pedra, Papel ou Tesoura' }} />
        <Stack.Screen name="Score" component={Score} options={{ title: 'Pontuações Máximas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}