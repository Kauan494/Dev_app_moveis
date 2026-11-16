import { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Pedido({ route, navigation }) {
  const { prato } = route.params;
  const [quantidade, setQuantidade] = useState(1);

  function diminuir() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function aumentar() {
    setQuantidade(quantidade + 1);
  }

  return (
    <View style={estilos.tela}>
      <Image source={prato.foto} style={estilos.foto} />
      <Text style={estilos.nome}>{prato.nome}</Text>
      <Text style={estilos.descricao}>{prato.descricao}</Text>
      <Text style={estilos.preco}>Preço: R$ {prato.preco.toFixed(2)}</Text>
      <View style={estilos.linha}>
        <Button title="-" onPress={diminuir} />
        <Text style={estilos.quantidade}>{quantidade}</Text>
        <Button title="+" onPress={aumentar} />
      </View>
      <Button
        title="Confirmar pedido"
        onPress={() => navigation.navigate('Finalizar', { prato: prato, quantidade: quantidade })}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  quantidade: {
    fontSize: 20,
    marginHorizontal: 20,
  },
});
