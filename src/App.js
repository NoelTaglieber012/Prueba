import React from 'react';
import './App.css';
import Formu from './Formu';

function App() {
  return (
    <div className="App">
         <div className="Formulario">
             <h2>Iniciar sesion</h2>
             <form action="#">
                 <input type="text" placeholder =" Correo Electronico"/>
                <input type="password" placeholder="Contra"/>
                <input type = "submit" value = "Iniciar Sesion"/>  
             </form>
         </div>

         <div>
           <Formu/>
         </div>
    </div>
  );
}

export default App;
