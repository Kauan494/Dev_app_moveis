import React, {useState} from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

function sortearNumero(){
  return Math.floor(Math.random() * 101);
}
export default function App() {
  const [numeroSecreto, setNumeroSecreto] = useState(sortearNumero());
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('Tente adivinhar');
  const [tentativas, setTentativas] = useState(0);

  function verificarNumero(){
    if(palpite === ''){
      setMensagem('Digite um número');
      return;
    }

    const numero = parseInt(palpite);

    if(isNaN(numero) || numero < 0 || numero > 100){
      setMensagem('Digite um número entre 0 e 100');
      return;
    }

    setTentativas(tentativas + 1);

    if(numero === numeroSecreto){
      setMensagem('Acertou!');
    } else if(numero > numeroSecreto){
      setMensagem(numero + 'é MAIOR que o número sorteado');
    } else{
      setMensagem(numero + 'é MENOR que o número sorteado');
    }

    setPalpite('');
  }
  return(
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Jogo de Adivinhação</Text>
      <Text style={estilos.texto}>Digite um número de 0 a 100:</Text>

      <TextInput
      style={estilos.caixa}
      keyboardType='numeric'
      maxLength={3}
      value={palpite}
      onChangeText={(texto) => setPalpite(texto)}
      />

      <Button title='Chutar' onPress={() => verificarNumero()}/>

      <Text style={[estilos.mensagem, mensagem === 'Acertou!' ? estilos.correto : estilos.errado]}>{mensagem}</Text>
      <Text style={estilos.texto}>Tentativas: {tentativas}</Text>  
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
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
  },
  correto: {
    color: 'green',
  },
  errado: {
    color: 'red',
  },
});
