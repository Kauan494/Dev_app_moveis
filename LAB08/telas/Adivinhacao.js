import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { salvarScore } from '../score';

function sortearNumero() {
  return Math.floor(Math.random() * 101);
}

export default function Adivinhacao() {
  const [numeroSecreto, setNumeroSecreto] = useState(sortearNumero());
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('Tente adivinhar');
  const [tentativas, setTentativas] = useState(0);
  const [acertou, setAcertou] = useState(false);
  const [recorde, setRecorde] = useState('');

  async function verificarNumero() {
    if (palpite === '') {
      setMensagem('Digite um número');
      return;
    }

    const numero = parseInt(palpite);

    if (isNaN(numero) || numero < 0 || numero > 100) {
      setMensagem('Digite um número entre 0 e 100');
      return;
    }

    const totalTentativas = tentativas + 1;
    setTentativas(totalTentativas);
    setPalpite('');

    if (numero === numeroSecreto) {
      setMensagem('Acertou!');
      setAcertou(true);

      // Pontuação: começa em 100 e perde 10 por tentativa errada (mínimo 10)
      const pontos = Math.max(10, 100 - (totalTentativas - 1) * 10);
      const jogador = await AsyncStorage.getItem('usuario');
      const novoRecorde = await salvarScore('Adivinhação', jogador, pontos);

      if (novoRecorde) {
        setRecorde('Novo recorde! ' + pontos + ' pontos');
      } else {
        setRecorde('Você fez ' + pontos + ' pontos');
      }
    } else if (numero > numeroSecreto) {
      setMensagem(numero + ' é MAIOR que o número sorteado');
    } else {
      setMensagem(numero + ' é MENOR que o número sorteado');
    }
  }

  function jogarNovamente() {
    setNumeroSecreto(sortearNumero());
    setPalpite('');
    setMensagem('Tente adivinhar');
    setTentativas(0);
    setAcertou(false);
    setRecorde('');
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Digite um número de 0 a 100:</Text>

      <TextInput
        style={estilos.caixa}
        keyboardType="numeric"
        maxLength={3}
        value={palpite}
        onChangeText={(texto) => setPalpite(texto)}
        editable={!acertou}
      />

      {acertou ? (
        <Button title="Jogar novamente" onPress={() => jogarNovamente()} />
      ) : (
        <Button title="Chutar" onPress={() => verificarNumero()} />
      )}

      <Text style={[estilos.mensagem, acertou ? estilos.correto : estilos.errado]}>{mensagem}</Text>
      <Text style={estilos.texto}>Tentativas: {tentativas}</Text>
      <Text style={estilos.recorde}>{recorde}</Text>
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
    marginVertical: 8,
  },
  caixa: {
    borderWidth: 2,
    borderColor: 'red',
    fontSize: 24,
    width: '50%',
    textAlign: 'center',
    marginBottom: 12,
  },
  mensagem: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  correto: {
    color: 'green',
  },
  errado: {
    color: 'red',
  },
  recorde: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
    marginTop: 10,
  },
});