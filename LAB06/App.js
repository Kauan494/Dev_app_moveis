import React from 'react';
import { Text, TextInput, View, Image, StyleSheet } from 'react-native';


export default class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    agora: new Date(),
    horaAlarme: '',
    minutoAlarme: '',
  };
}
 componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ agora: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render(){
    const agora = this.state.agora;

    const hora = String(agora.getHours()).padStart(2, '0');
    const minuto = String(agora.getMinutes()).padStart(2, '0');
    const segundo = String(agora.getSeconds()).padStart(2, '0');

    const data = agora.getDate() + '/' + (agora.getMonth() + 1) + '/' + agora.getFullYear();
    
    const despertar =
      parseInt(this.state.horaAlarme) === agora.getHours() &&
      parseInt(this.state.minutoAlarme) === agora.getMinutes();

    return(
      <View style={estilos.container}>
        <Text style={estilos.texto}>Hora</Text>
        <TextInput
        style={estilos.caixa}
        keyboardType="numeric"
        maxLength={2}
        value={this.state.horaAlarme}
        onChangeText={(texto) => this.setState({horaAlarme: texto})}
        />
        
        <Text style={estilos.texto}>Minuto</Text>
        <TextInput
        style={estilos.caixa}
        keyboardType='numeric'
        maxLength={2}
        value={this.state.minutoAlarme}
        onChangeText={(texto) => this.setState({minutoAlarme: texto})}
        />

         {despertar && (
          <Image
            style={estilos.imagem}
            source={require('./assets/despertador.gif')}
          />
        )}

        <Text style={estilos.relogio}>{hora}:{minuto}:{segundo}</Text>
        <Text style={estilos.relogio}>{data}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  caixa: {
    borderWidth: 3,
    borderColor: 'blue',
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    marginBottom: 5,
  },
  relogio: {
    color: 'blue',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  imagem: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
});