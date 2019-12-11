import React from "react";

function Formu () {
    return(

         <div className="Formulario">
             <h2>Crear Cuenta</h2>
             <form action="#">
                 <input type="text" placeholder =" Nombre de Usuario"/>
                 <input type="email" placeholder =" Correo Electronico"/>
                 <input type="text" placeholder =" Correo Electronico"/>
                 <input type="password" placeholder="Contraseña"/>
                 <input type="password" placeholder="Repita la Contraseña"/>
                 <input type = "submit" value = "Iniciar Sesion"/>  
             </form>
         </div>
    )
 }
export default Formu