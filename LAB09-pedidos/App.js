import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firebase from './config/config';

export default function App() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    firebase.database().ref('pedidos').on('value', (snapshot) => {
      let data = snapshot.val();
      if (data == null) {
        setPedidos([]);
      } else {
        let dados = Object.values(data);
        setPedidos(dados);
      }
    });
  }, []);

  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Pedidos do Restaurante</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(item, index) => String(index)}
        ListEmptyComponent={<Text style={estilos.vazio}>Nenhum pedido realizado.</Text>}
        renderItem={({ item }) => (
          <View style={estilos.item}>
            <Text style={estilos.prato}>{item.prato}</Text>
            <Text>Cliente: {item.cliente}</Text>
            <Text>E-mail: {item.email}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Text>Preço: R$ {Number(item.preco).toFixed(2)}</Text>
            <Text style={estilos.total}>Total: R$ {Number(item.total).toFixed(2)}</Text>
            <Text style={estilos.data}>{item.data}</Text>
          </View>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  prato: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  total: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  data: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  vazio: {
    textAlign: 'center',
    color: 'gray',
  },
});
