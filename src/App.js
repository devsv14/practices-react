import React from 'react';
/* import Propiedades from './componentes/Header' */
import Propiedades from './componentes/Propiedades';
/* import Estado from './componentes/Estado'; */
import RenderizadoCondicional  from './componentes/RenderizadoCondicinal';
import Profile from './componentes/Imagen';
import RenderizadoElementos from './componentes/RenderizadoElementos';
const App = () => {
  const name = 'myPage';
  return (
    <div>     
      <h1>My App {name}</h1>  
      <hr />
     <Propiedades cadena="Esto es una cadena de texto" numero="19"
      edad = {20}
     />
    <hr/>
    <Profile/>
    <hr />
    <RenderizadoCondicional/>
    <RenderizadoElementos/>
    </div> 
  );
} 

export default App;
