import React,{ useState } from "react";
import {useForm} from "react-hook-form";
import styled from 'styled-components'

import Mensaje_error from "./Mensaje_error";

function Registro(){ 

    const {register,formState:{errors},handleSubmit} = useForm();

    //Declaramos el estado nombre con el valor inicial
    const [nombre, SetNombre] = useState('');
  

    //funcion que se va a ejecutar en submit
    //Osea la funcion para guardar el registro
    function insertar(){
      SetNombre('!-- Gracias por registrarte --!');
    }

     return (
        <>
        <Registro_Container>
        <div class="contact_form">
        <div class="formulario">      
            <h1>Registro</h1>
            <form action="enviar_consulta.php" method ="post" name = "form_registro" onSubmit={handleSubmit(insertar)}>
    
                <p>
                    <label for="nombre"> Nombre</label>
                    <input type="text" placeholder="Ingrese su nombre" {... register("nombre",{required:true,minLength:2,maxLength:20})} name="nombre" class="input-field" />
                    <Mensaje_error errors = {errors.nombre}/>
                </p>

                <p>
                    <label for="apellido"> Apellido</label>
                    <input type="text"  placeholder="Ingrese su apellido" {... register("apellido",{required:true,minLength:2,maxLength:20})} name="apellido" class="input-field" />
                    <Mensaje_error errors = {errors.apellido}/>
                </p>

                <p>
                    <label for="email"> Email</label>
                    <input type="email" placeholder="Ingrese su mail"  name="email" {... register("email",{required:true,maxLength:20})} class="input-field" />
                    <Mensaje_error errors = {errors.email}/>
                </p>

                <p>
                    <label for="password"> Contraseña</label>
                    <input type="password" placeholder="Ingrese su contraseña" name="password" {... register("password",{required:true,minLength:8,maxLength:20})} class="input-field" />
                    <Mensaje_error errors = {errors.password}/>
                </p>

                <p>
                    <label for="repeat_password"> Verificar Contraseña</label>
                    <input type="password" placeholder="Escriba nuevamente su contraseña" name="repeat_password" {... register("repeat_password",{required:true,minLength:8,maxLength:20})} class="input-field" />
                    <Mensaje_error errors = {errors.repeat_password}/>
                </p>

                <p> 
                    <label for="mailing" class = "label-checkbox"> 
                    <input type="checkbox" name="mailing" class="input-checkbox" />
                    Quiero recibir informacion a mi casilla de mail</label>
   
                </p>

                <p> 

                    <label for="condiciones" class = "label-checkbox">
                    <input type="checkbox" name="condiciones" {... register("condiciones",{required:true})} class="input-checkbox"/>
                    <a href="/terminosycondiciones" >Acepto los terminos y condiciones</a></label>
                    <Mensaje_error errors = {errors.condiciones}/>
                </p>

            <button type = "submit" class="submit-button"> Registrarse </button>
            <h4> {nombre} </h4>
        </form>

        <div id="mensaje"> </div>
        <div id="error-message"> </div>
    </div>
    </div>

 

        </Registro_Container>

        </>

    )
    

}


export default Registro; // esto es re importante porque sino despues no anda


const Registro_Container = styled.nav`

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