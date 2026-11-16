import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from './telas/Login';
import Cadastro from './telas/Cadastro';
import Cardapio from './telas/Cardapio';
import Pedido from './telas/Pedido';
import Finalizar from './telas/Finalizar';

const Abas = createBottomTabNavigator();
const Pilha = createNativeStackNavigator();

function PilhaPedidos() {
  return (
    <Pilha.Navigator>
      <Pilha.Screen name="Login" component={Login} />
      <Pilha.Screen name="Cardapio" component={Cardapio} options={{ title: 'Cardápio' }} />
      <Pilha.Screen name="Pedido" component={Pedido} />
      <Pilha.Screen name="Finalizar" component={Finalizar} />
    </Pilha.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
        <Abas.Screen
          name="Entrar"
          component={PilhaPedidos}
          options={{
            title: 'Login',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Abas.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: 'Criar Conta',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-details" color={color} size={size} />
            ),
          }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  );
}
