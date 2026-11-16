import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from '../config/config';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function entrar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        setMensagem('');
        navigation.replace('Cardapio');
      })
      .catch((error) => {
        if (error.code == 'auth/invalid-email') {
          setMensagem('E-mail inválido!');
        } else {
          setMensagem('E-mail ou senha incorretos!');
        }
      });
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.rotulo}>Login:</Text>
      <TextInput
        style={estilos.campo}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Text style={estilos.rotulo}>Senha:</Text>
      <TextInput
        style={estilos.campo}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={entrar} />
      <Text style={estilos.mensagem}>{mensagem}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rotulo: {
    fontSize: 16,
    marginBottom: 5,
  },
  campo: {
    width: 220,
    height: 40,
    borderWidth: 2,
    borderColor: 'blue',
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  mensagem: {
    marginTop: 15,
    fontSize: 16,
    color: 'red',
  },
});
