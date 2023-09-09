import React,{ useState }  from "react";

import {useForm} from "react-hook-form";
import styled from 'styled-components'
import Mensaje_error from "./Registro/Mensaje_error";

function Login(){ 


  const {register,formState:{errors},handleSubmit} = useForm();

  //Declaramos el estado nombre con el valor inicial
  const [nombre, SetNombre] = useState('');
  

  function ingresar(){
    SetNombre('!--Sesion Iniciada--!');
  }


     return (
        <>
        <Login_Container>
        <div class="contact_form">
        <div class="formulario">      
            <h1>Login</h1>
            <form action="enviar_consulta.php" method ="post" name = "form_registro" onSubmit={handleSubmit(ingresar)}>
                <p>
                    <label for="email"> Email</label>
                    <input type="email" placeholder="Ingrese su mail"  name="email" {... register("email",{required:true})} class="input-field" />
                    <Mensaje_error errors = {errors.email}/>
                </p>

                <p>
                    <label for="password"> Contraseña</label>
                    <input type="password" placeholder="Ingrese su contraseña" name="password" {... register("password",{required:true})} class="input-field" />
                    <Mensaje_error errors = {errors.password}/>
                </p>





            <button type = "submit" class="submit-button"> Iniciar Sesion </button>

            <h4> {nombre} </h4>

        </form>

        <div id="mensaje"> </div>
        <div id="error-message"> </div>
    </div>
    </div>

        </Login_Container>
        </>
    )

}


export default Login; // esto es re importante porque sino despues no anda


const Login_Container = styled.nav`

background-color: #f2f2f2;
padding: 0.4rem;

body{
  height: 100%; 
  font-family: 'Noto Sans', sans-serif;
  background-color: var(--color_base); 
}


.contact_form{  
  width: 470px; 
  height: auto;
  margin: 60px auto;
  border-radius: 15px;  
  padding-top: 0px;
  padding-bottom: 20px;  
  background-color: #fbfbfb; 
  padding-left: 30px; 
}


input{
  background-color: #fbfbfb; 
  width: 408px; 
  height: 40px; 
  border-radius: 15px;  
  border-style: solid; 
  border-width: 1px; 
  border-color: var(--color_base); 
  margin-top: 10px;  
  padding-left: 10px;
  margin-bottom: 0px; 
}

Input::placeholder{
  color: #5c5cff;
 // background-color: red;
}

textarea{
  background-color: #fbfbfb; 
  width: 405px; 
  height: 150px; 
  border-radius: 5px;  
  border-style: solid; 
  border-width: 1px; 
  border-color: var(--color_base); 
  margin-top: 10px;  
  padding-left: 10px;
  margin-bottom: 20px; 
  padding-top: 15px; 
}


label{
  display: block; 
  float: center; 
  margin-top: 0px;   
}


button{
  height: 45px; 
  padding-left: 5px;
  padding-right: 5px;   
  margin-bottom: 20px; 
  margin-top: 10px;   
  text-transform: uppercase;
  background-color: var(--color_base); 
  border-color: var(--color_base); 
  border-style: solid; 
  border-radius: 10px;  
  width: 420px;   
  cursor: pointer;
  color: #333;
  font-style: bold;
  font-size: 12px;
}


button p{
  color: #333; 
}


span{
  color: var(--color_base); 
}


.error-message{
  margin-top: 0px;  
  margin-bottom: 0px; 
  font-size: 13px;  
  color: #bd2d2d;  
}


.input-field{
    width: 90%;
}

.input-checkbox{
    width: 20%;
    height: 1.5rem; 
    border-style: solid;   
    padding: 0;
    margin:0;
    vertical-align: middle;
    position: relative;
    top: -1px;
    *overflow: hidden;
    
}

.label-checkbox{
  display: block;
  padding-left: 15px;
  text-indent: -15px;

}

h1{
  font-size: 38px;  
  text-align: left; 
  padding-bottom: 10px; 
  color: var(--color_base);
}


h3{
  font-size: 15px; 
  padding-bottom: 10px;
  color: #0e0e0e;   
}


p{
  font-size: 14px; 
  color: #0e0e0e; 
}


.formulario input:focus{
  outline:0;
  border: 1px solid #97d848;
}


.formulario textarea:focus{
  outline:0;
  border: 1px solid #97d848;
}



`