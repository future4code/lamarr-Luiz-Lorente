import foto from './imagem/índice.jpg';
import './App.css';

function App() {
  function mensagem(){
    alert("Boa Noite")
  }

  return (
    <div className="App">
      
      <h1>Bem vindo, sou Luiz Rafhael!!</h1>
      <img className="img" src={foto} alt="Rafha"/>
      <p>Este é meu primeiro REACT!</p>
      <button onClick={mensagem}>Clique Aqui</button>


    </div>
  );
}

export default App;
