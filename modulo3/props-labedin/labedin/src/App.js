import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto from './img/Rafha.jpg'
import serviço from './img/deusa.png'
import serviço2 from './img/dicol.jpg'
import email from './img/email.png'
import local from './img/local.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Luiz Rafhael Piratelo" 
          descricao="Oi, eu sou o Luiz Rafhael."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className="page-section-container">
        <CardPequeno
        imagem={email}
        Email="luizrafhael_1987@hotmail.com"
        />
        <CardPequeno
        imagem={local}
        Endereço="Assis -Sp"
        />
      </div>
        
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={serviço}
          nome="Deusa" 
          descricao="Sou promotor de vendas da Farinha Deusa. Trabalho aqui ja faz 11 anos.!" 
        />
        
        <CardGrande 
          imagem={serviço2}
          nome="Dicol" 
          descricao="Promotor de Vendas/Vendedor." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
