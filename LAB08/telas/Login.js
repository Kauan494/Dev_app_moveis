import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function entrar() {
    const usuarioSalvo = await AsyncStorage.getItem('usuario');
    const senhaSalva = await AsyncStorage.getItem('senha');

    if (usuarioSalvo === null) {
      setMensagem('Nenhum usuário cadastrado. Crie uma conta.');
    } else if (usuario === usuarioSalvo && senha === senhaSalva) {
      setMensagem('');
      navigation.replace('Menu');
    } else {
      setMensagem('Usuário ou senha incorretos');
    }
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Login:</Text>
      <TextInput
        style={estilos.caixa}
        value={usuario}
        onChangeText={(texto) => setUsuario(texto)}
        autoCapitalize="none"
      />

      <Text style={estilos.texto}>Senha:</Text>
      <TextInput
        style={estilos.caixa}
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
        secureTextEntry={true}
      />

      <Button title="Entrar" onPress={() => entrar()} />

      <View style={estilos.espaco} />
      <Button title="Criar conta" color="gray" onPress={() => navigation.navigate('Cadastro')} />

      <Text style={estilos.mensagem}>{mensagem}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  caixa: {
    borderWidth: 1,
    borderColor: 'blue',
    width: '50%',
    padding: 5,
    marginBottom: 10,
  },
  espaco: {
    height: 10,
  },
  mensagem: {
    marginTop: 15,
    fontSize: 16,
    color: 'red',
  },
});