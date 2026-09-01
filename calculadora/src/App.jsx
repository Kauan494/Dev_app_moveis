import React, { Component } from "react";
import "./App.css";

class App extends Component {
  
 
  state = {
     display: "0",
     primeiroNumero: null,
     operacao: null
    };

  adicionarNumero = (numero) =>{
    if (this.state.display === "0") {
      this.setState({
       display: numero
      });
    } else {
      this.setState({
        display: this.state.display + numero
      });
    }
  };

  limpar = () => {
    this.setState({
      display: "0"
    });
  };

  calcular = () => {
    const numero1 = this.state.primeiroNumero;
    const numero2 = Number(this.state.display);

    let resultado;

    if(this.state.operacao === "+"){
      resultado = numero1 + numero2;
    }

    if(this.state.operacao === "-"){
      resultado = numero1 - numero2;
    }

    if(this.state.operacao === "*"){
      resultado = numero1 * numero2;
    }

    if(this.state.operacao === "/"){
      resultado = numero1 / numero2;
    }

    this.setState({display: String(resultado)});
  };

  escolherOperacao = (operacao) => {
    this.setState({
      primeiroNumero: Number(this.state.display),
      operacao: operacao,
      display: "0"
    });
  };

  render() {
    return (
      <div className="calculadora">

        <div className="display">
          {this.state.display}
        </div>

        <div className="botoes">
          <button onClick={() => this.adicionarNumero("7")}>7</button>
          <button onClick={() => this.adicionarNumero("8")}>8</button>
          <button onClick={() => this.adicionarNumero("9")}>9</button>
          <button onClick={() => this.escolherOperacao("*")}>*</button>

          <button onClick={() => this.adicionarNumero("4")}>4</button>
          <button onClick={() => this.adicionarNumero("5")}>5</button>
          <button onClick={() => this.adicionarNumero("6")}>6</button>
          <button onClick={() => this.escolherOperacao("/")}>/</button>

          <button onClick={() => this.adicionarNumero("1")}>1</button>
          <button onClick={() => this.adicionarNumero("2")}>2</button>
          <button onClick={() => this.adicionarNumero("3")}>3</button>
          <button onClick={() => this.escolherOperacao("-")}>-</button>


          <button onClick={this.limpar}>C</button>
          <button onClick={() => this.adicionarNumero("0")}>0</button>
          <button onClick={this.calcular}>=</button>
          <button onClick={() => this.escolherOperacao("+")}>+</button>
        </div>

      </div>
    );
  }
}

export default App;