import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const filmes = [
  {
    titulo: 'Senhor dos Anéis',
    sinopse: 'O hobbit Frodo herda um anel com um poder maligno e parte em uma longa jornada para destruí-lo antes que ele volte para as mãos de Sauron. No caminho, conta com a ajuda de outros hobbits, de um elfo, de um anão, de dois homens e de um mago: a Sociedade do Anel.',
  },
  {
    titulo: 'Cidadão Kane',
    sinopse: 'Após a morte do magnata da imprensa Charles Foster Kane, um jornalista tenta descobrir o significado de sua última palavra, "Rosebud", entrevistando as pessoas que fizeram parte da sua vida.',
  },
  {
    titulo: 'O Poderoso Chefão',
    sinopse: 'Vito Corleone comanda uma das famílias mais poderosas da máfia de Nova York. Quando ele sofre um atentado, seu filho Michael, que queria ficar longe dos negócios da família, acaba sendo arrastado para esse mundo.',
  },
  {
    titulo: 'O Rei Leão',
    sinopse: 'O jovem leão Simba é o herdeiro do trono. Depois da morte do pai, armada pelo tio Scar, ele foge e cresce longe de casa, até que precisa voltar para assumir seu lugar como rei.',
  },
  {
    titulo: 'Vingadores: Ultimato',
    sinopse: 'Depois de Thanos eliminar metade de toda a vida do universo, os Vingadores que sobraram se unem uma última vez para tentar desfazer o estalo e trazer todos de volta.',
  },
];

export default function Filmes({ navigation }) {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      {filmes.map((filme) => (
        <TouchableOpacity
          key={filme.titulo}
          style={estilos.botao}
          onPress={() => navigation.navigate('Sinopse', { filme: filme })}
        >
          <Text style={estilos.textoBotao}>{filme.titulo}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 10,
  },
  botao: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textoBotao: {
    fontSize: 16,
  },
});