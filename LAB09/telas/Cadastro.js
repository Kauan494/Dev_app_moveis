import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from '../config/config';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function cadastrar() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((credencial) => {
        return credencial.user.updateProfile({ displayName: nome });
      })
      .then(() => {
        setMensagem('Usuário cadastrado com sucesso!');
      })
      .catch((error) => {
        if (error.code == 'auth/email-already-in-use') {
          setMensagem('Esse e-mail já está em uso!');
        } else if (error.code == 'auth/weak-password') {
          setMensagem('A senha precisa ter no mínimo 6 caracteres!');
        } else if (error.code == 'auth/invalid-email') {
          setMensagem('E-mail inválido!');
        } else {
          setMensagem('Erro ao cadastrar!');
        }
      });
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.rotulo}>Nome:</Text>
      <TextInput style={estilos.campo} value={nome} onChangeText={setNome} />
      <Text style={estilos.rotulo}>Cadastrar usuário:</Text>
      <TextInput
        style={estilos.campo}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Text style={estilos.rotulo}>Cadastrar senha:</Text>
      <TextInput
        style={estilos.campo}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <Button title="Cadastrar" onPress={cadastrar} />
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
  },
});
