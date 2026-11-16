import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const pratos = [
  {
    id: '1',
    nome: 'Pizza de Mussarela',
    descricao: 'Molho de tomate, cebola e mussarela.',
    preco: 39.9,
    foto: require('../assets/pizza.jpg'),
  },
  {
    id: '2',
    nome: 'Hambúrguer',
    descricao: 'Pão, carne, queijo, alface e tomate.',
    preco: 29.9,
    foto: require('../assets/hamburguer.jpg'),
  },
  {
    id: '3',
    nome: 'Lasanha',
    descricao: 'Massa, molho à bolonhesa e queijo.',
    preco: 34.9,
    foto: require('../assets/lasanha.jpg'),
  },
  {
    id: '4',
    nome: 'Salada',
    descricao: 'Tomate, pepino, cebola e queijo.',
    preco: 19.9,
    foto: require('../assets/salada.jpg'),
  },
  {
    id: '5',
    nome: 'Panqueca',
    descricao: 'Panquecas com calda e frutas.',
    preco: 14.9,
    foto: require('../assets/panqueca.jpg'),
  },
];

export default function Cardapio({ navigation }) {
  return (
    <View style={estilos.tela}>
      <FlatList
        data={pratos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={estilos.item}
            onPress={() => navigation.navigate('Pedido', { prato: item })}
          >
            <Image source={item.foto} style={estilos.foto} />
            <View style={estilos.textos}>
              <Text style={estilos.nome}>{item.nome}</Text>
              <Text style={estilos.descricao}>{item.descricao}</Text>
              <Text style={estilos.preco}>R$ {item.preco.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  textos: {
    flex: 1,
    marginLeft: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 13,
    color: 'gray',
  },
  preco: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
