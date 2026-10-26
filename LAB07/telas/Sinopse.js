import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function Sinopse({ route }) {
  const filme = route.params.filme;

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.texto}>{filme.sinopse}</Text>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 10,
  },
  texto: {
    fontSize: 16,
  },
});