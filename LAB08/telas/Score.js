import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lerScores } from '../score';

export default function Score() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function carregar() {
      const lista = await lerScores();
      lista.sort((a, b) => b.pontos - a.pontos);
      setScores(lista);
    }
    carregar();
  }, []);

  async function limpar() {
    await AsyncStorage.removeItem('scores');
    setScores([]);
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      {scores.length === 0 ? (
        <Text style={estilos.vazio}>Nenhuma pontuação registrada ainda.</Text>
      ) : (
        scores.map((item, indice) => (
          <View key={item.jogo + item.jogador} style={estilos.linha}>
            <Text style={estilos.posicao}>{indice + 1}º</Text>
            <View style={estilos.info}>
              <Text style={estilos.jogador}>{item.jogador}</Text>
              <Text style={estilos.jogo}>{item.jogo}</Text>
            </View>
            <Text style={estilos.pontos}>{item.pontos} pts</Text>
          </View>
        ))
      )}

      <View style={estilos.espaco} />
      <Button title="Limpar pontuações" color="gray" onPress={() => limpar()} />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 15,
  },
  vazio: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 30,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  posicao: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 40,
  },
  info: {
    flex: 1,
  },
  jogador: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jogo: {
    fontSize: 14,
    color: 'gray',
  },
  pontos: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  espaco: {
    height: 20,
  },
});