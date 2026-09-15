import { useState } from "react";
import "./App.css";

function App(){
  const [palpite, setPalpite] = useState("");
  const [numeroSecreto] = useState(Math.floor(Math.random() * 100));
  const [mensagem, setMensagem] = useState("Tente Advinhar");
  console.log(numeroSecreto);
  
  function verificarNumero(){
    const numero = Number(palpite);

    if(numero === numeroSecreto){
      setMensagem("Parabéns, número correto");
    }else if(numero > numeroSecreto){
      setMensagem("Número grande");
    }else{
      setMensagem("Número pequeno");
    }
  }

  return(
    <div className="caixa">
      <input 
      type="number"
      value={palpite}
      onChange={(e) => setPalpite(e.target.value)}        
      />
      <button onClick={verificarNumero}>Clique Aqui</button>
      <h2
      className={
        mensagem === "Parabéns, número correto"
        ? "correto"
        : mensagem === "Tente Adivinhar"
        ? ""
        : "errado"
      }>{mensagem}
      </h2>
    </div>
  );
}

export default App;