import React from 'react';

const Bemvindo = (props) => {
  return(
    <div>
      <h2>Bem-vindo(a) {props.nome}</h2>
      <h3>Tenho {props.anos} Anos</h3>

    </div>
  );
}


function App(){
  return(
    <div>
      Olá Mundo!
      <Bemvindo nome="Vithor" anos="20"/>
      <Bemvindo nome="Amanda" anos="21"/>
    </div>
  );
}

export default App;