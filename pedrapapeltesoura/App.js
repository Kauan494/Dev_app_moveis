import React, {useState} from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

const jogadas = ['Pedra', 'Papel', 'Tesoura']
const vitoriasParaVencer = 3;
function sortearJogada(){
  return jogadas[Math.floor(Math.random() * 3)];
}
export default function App(){
  const [JogadaUsuario, SetJogadaUsuario] = useState('-');
  const [JogadaApp, setJogadaApp] = useState('-');
  const [resultado, setResultado] = useState('Faça sua jogada');
  const [vitoriasUsuario, setVitoriasUsuario] = useState(0);
  const [vitoriasApp, setvitoriasApp] = useState(0);
  const [empates, setEmpates] = useState(0);
  
  const fimDeJogo = vitoriasUsuario === vitoriasParaVencer || vitoriasApp === vitoriasParaVencer;

  function jogar(escolha){
    const sorteada = sortearJogada();
    

    SetJogadaUsuario(escolha);
    setJogadaApp(sorteada);

    if(escolha === sorteada){
      setResultado('Empate!');
      setEmpates(empates + 1);
    } else if(
      (escolha === 'Pedra' && sorteada === 'Tesoura') ||
      (escolha === 'Papel' && sorteada === 'Pedra') ||
      (escolha === 'Tesoura' && sorteada === 'Papel')
    ){
      setResultado('Você ganhou!');
      setVitoriasUsuario(vitoriasUsuario + 1);
    } else{
      setResultado('Você perdeu!');
      setvitoriasApp(vitoriasApp + 1);
    }
  }

  function jogarNovamente(){
    SetJogadaUsuario('-');
    setJogadaApp('-');
    setResultado('Faça sua jogada');
    setVitoriasUsuario(0);
    setvitoriasApp(0);
    setEmpates(0);
  }

  return (
    <View style={estilos.container}> 
     <Text style={estilos.titulo}>Pedra, Papel ou Tesoura</Text>
     <Text style={estilos.texto}>Escolha sua jogada:</Text>

     <View style={estilos.botoes}>
      <Button title='Pedra' onPress={() => jogar('Pedra')} disabled={fimDeJogo}></Button>
      <Button title='Papel' onPress={() => jogar('Papel')} disabled={fimDeJogo}></Button>
      <Button title='Tesoura' onPress={() => jogar('Tesoura')} disabled={fimDeJogo}></Button>
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

     <Text style={estilos.placar}>Placar(melhor de 5): Você {vitoriasUsuario} x {vitoriasApp} App</Text>
     <Text style={estilos.texto}>Empate: {empates}</Text>
     
     {fimDeJogo &&(
      <View>
        <Text style={estilos.resultado}>
          {vitoriasUsuario > vitoriasApp ? 'Você venceu a partida!' : 'O app venceu a partida!'}
        </Text>
        <Button title='Jogar Novamente' onPress={() => jogarNovamente()}></Button>
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
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  texto: {
    color: 'blue',
    fontSize: 20,
    marginVertical: 20,
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  placar :{
    fontSize: 22,
    fontWeight: 'bold',
  },
  ganhou: {
    color: 'green',
  },
  perdeu: {
    color: 'red',
  },
});