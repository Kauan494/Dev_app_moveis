import React, { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { salvarScore } from '../score';

const jogadas = ['Pedra', 'Papel', 'Tesoura'];
const vitoriasParaVencer = 3;

function sortearJogada() {
  return jogadas[Math.floor(Math.random() * 3)];
}

export default function PedraPapelTesoura() {
  const [JogadaUsuario, SetJogadaUsuario] = useState('-');
  const [JogadaApp, setJogadaApp] = useState('-');
  const [resultado, setResultado] = useState('Faça sua jogada');
  const [vitoriasUsuario, setVitoriasUsuario] = useState(0);
  const [vitoriasApp, setvitoriasApp] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [recorde, setRecorde] = useState('');

  const fimDeJogo = vitoriasUsuario === vitoriasParaVencer || vitoriasApp === vitoriasParaVencer;

  async function jogar(escolha) {
    const sorteada = sortearJogada();

    SetJogadaUsuario(escolha);
    setJogadaApp(sorteada);

    // Placar desta rodada, já com o resultado somado
    let novasVitoriasUsuario = vitoriasUsuario;
    let novasVitoriasApp = vitoriasApp;

    if (escolha === sorteada) {
      setResultado('Empate!');
      setEmpates(empates + 1);
    } else if (
      (escolha === 'Pedra' && sorteada === 'Tesoura') ||
      (escolha === 'Papel' && sorteada === 'Pedra') ||
      (escolha === 'Tesoura' && sorteada === 'Papel')
    ) {
      setResultado('Você ganhou!');
      novasVitoriasUsuario = vitoriasUsuario + 1;
      setVitoriasUsuario(novasVitoriasUsuario);
    } else {
      setResultado('Você perdeu!');
      novasVitoriasApp = vitoriasApp + 1;
      setvitoriasApp(novasVitoriasApp);
    }

    // Terminou a partida? Salva a pontuação
    if (novasVitoriasUsuario === vitoriasParaVencer || novasVitoriasApp === vitoriasParaVencer) {
      const pontos = novasVitoriasUsuario * 10;
      const jogador = await AsyncStorage.getItem('usuario');
      const novoRecorde = await salvarScore('Pedra, Papel ou Tesoura', jogador, pontos);

      if (novoRecorde) {
        setRecorde('Novo recorde! ' + pontos + ' pontos');
      } else {
        setRecorde('Você fez ' + pontos + ' pontos');
      }
    }
  }

  function jogarNovamente() {
    SetJogadaUsuario('-');
    setJogadaApp('-');
    setResultado('Faça sua jogada');
    setVitoriasUsuario(0);
    setvitoriasApp(0);
    setEmpates(0);
    setRecorde('');
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Escolha sua jogada:</Text>

      <View style={estilos.botoes}>
        <Button title="Pedra" onPress={() => jogar('Pedra')} disabled={fimDeJogo} />
        <Button title="Papel" onPress={() => jogar('Papel')} disabled={fimDeJogo} />
        <Button title="Tesoura" onPress={() => jogar('Tesoura')} disabled={fimDeJogo} />
      </View>

      <Text style={estilos.texto}>Você: {JogadaUsuario}</Text>
      <Text style={estilos.texto}>App: {JogadaApp}</Text>
      <Text style={[
        estilos.resultado,
        resultado === 'Você ganhou!' && estilos.ganhou,
        resultado === 'Você perdeu!' && estilos.perdeu,
      ]}>
        {resultado}
      </Text>

      <Text style={estilos.placar}>Placar (melhor de 5): Você {vitoriasUsuario} x {vitoriasApp} App</Text>
      <Text style={estilos.texto}>Empates: {empates}</Text>

      {fimDeJogo && (
        <View style={estilos.fim}>
          <Text style={estilos.resultado}>
            {vitoriasUsuario > vitoriasApp ? 'Você venceu a partida!' : 'O app venceu a partida!'}
          </Text>
          <Text style={estilos.recorde}>{recorde}</Text>
          <Button title="Jogar novamente" onPress={() => jogarNovamente()} />
        </View>
      )}
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
  texto: {
    color: 'blue',
    fontSize: 20,
    marginVertical: 6,
  },
  botoes: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 15,
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  placar: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  ganhou: {
    color: 'green',
  },
  perdeu: {
    color: 'red',
  },
  fim: {
    alignItems: 'center',
    marginTop: 10,
  },
  recorde: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 10,
  },
});