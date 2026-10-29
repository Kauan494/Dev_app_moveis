import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Menu({ navigation }) {
  const [jogador, setJogador] = useState('');

  useEffect(() => {
    async function carregarJogador() {
      const nome = await AsyncStorage.getItem('usuario');
      setJogador(nome);
    }
    carregarJogador();
  }, []);

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Olá, {jogador}!</Text>
      <Text style={estilos.subtitulo}>Escolha um jogo:</Text>

      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Adivinhacao')}>
        <Text style={estilos.textoBotao}>Jogo da Adivinhação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('PedraPapelTesoura')}>
        <Text style={estilos.textoBotao}>Pedra, Papel ou Tesoura</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[estilos.botao, estilos.botaoScore]} onPress={() => navigation.navigate('Score')}>
        <Text style={estilos.textoBotao}>Ver Pontuações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[estilos.botao, estilos.botaoSair]} onPress={() => navigation.replace('Login')}>
        <Text style={estilos.textoBotao}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 20,
  },
  botao: {
    width: '80%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#2a3990',
  },
  botaoScore: {
    backgroundColor: 'green',
  },
  botaoSair: {
    backgroundColor: 'gray',
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});