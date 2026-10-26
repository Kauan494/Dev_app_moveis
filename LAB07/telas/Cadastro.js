import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function cadastrar() {
    if (usuario === '' || senha === '') {
      setMensagem('Preencha usuário e senha');
      return;
    }

    await AsyncStorage.setItem('usuario', usuario);
    await AsyncStorage.setItem('senha', senha);

    setMensagem('Usuário cadastrado com sucesso!');
    setUsuario('');
    setSenha('');
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Cadastrar usuário:</Text>
      <TextInput
        style={estilos.caixa}
        value={usuario}
        onChangeText={(texto) => setUsuario(texto)}
        autoCapitalize="none"
      />

      <Text style={estilos.texto}>Cadastrar senha:</Text>
      <TextInput
        style={estilos.caixa}
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
        secureTextEntry={true}
      />

      <Button title="Cadastrar" onPress={() => cadastrar()} />

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
  mensagem: {
    marginTop: 15,
    fontSize: 16,
  },
});