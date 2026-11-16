import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firebase from '../config/config';

export default function Finalizar({ route }) {
  const { prato, quantidade } = route.params;
  const [mensagem, setMensagem] = useState('');
  const total = prato.preco * quantidade;

  function finalizar() {
    const usuario = firebase.auth().currentUser;
    firebase
      .database()
      .ref('/pedidos')
      .push({
        prato: prato.nome,
        quantidade: quantidade,
        preco: prato.preco,
        total: total,
        cliente: usuario.displayName,
        email: usuario.email,
        data: new Date().toLocaleString('pt-BR'),
      })
      .then(() => {
        setMensagem('Pedido salvo!');
      })
      .catch(() => {
        setMensagem('Erro ao salvar o pedido!');
      });
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.texto}>Prato: {prato.nome}</Text>
      <Text style={estilos.texto}>Quantidade: {quantidade}</Text>
      <Text style={estilos.total}>Total: R$ {total.toFixed(2)}</Text>
      <Button title="Finalizar pedido" onPress={finalizar} />
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
  texto: {
    fontSize: 18,
    marginBottom: 5,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  mensagem: {
    marginTop: 15,
    fontSize: 16,
  },
});
