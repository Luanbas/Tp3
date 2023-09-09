import React,{useState,useEffect} from "react";

import { useParams } from "react-router-dom";
import styled from 'styled-components';

import { Link } from "react-router-dom";
import Ratingstars from "./ratingstars";


function DetalleProducto(){
    
    //const {producto} = props;
    const {id} = useParams(); // esto nos va a permitir recuperar el id

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`) //Aca ponemos la URL de la API que querramos
        .then( response => response.json())
        .then( data => {
            setProducto(data);
            setLoading(false);
        })
    }, [])
   
    
     return (

        <div>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <Detalle_Container>
            <h2>  </h2>

            {loading ? (
                <>
                <p> Cargando producto </p>
                <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                <span class="sr-only">Loading...</span>
                </>
            ) : (


                <div class= "cuadro">
                    <div class = "cuadro-imagen">
                        <img src= {producto.image} className = "imagen" alt="foto perfil"/>
                    </div>
                    <div class = "cuadro-texto">
                        <h3> {producto.title} </h3>
                        <p> {producto.description} </p>
                        <div className="categoria">
                            <span className="cate"> Category: </span> 
                            <span>{producto.category}</span>
                        </div>

                        <p class= "precio"> Precio: ${producto.price} </p>
                        <Ratingstars rate_s = {producto.rating.rate} />
                        <p className="pb">
                        <Link to ={`/DetalleProducto/${producto.id}`} className = "buttom"> Agregar al Carrito </Link>
                        </p>
                        
                        <p className="pb">
                        <Link to ={`/`} className = "buttom"> Volver </Link>
                        </p>
                    </div>

                </div>


            ) }
  
        </Detalle_Container>

        </div>

    )

}


export default DetalleProducto; // esto es re importante porque sino despues no anda


const Detalle_Container = styled.nav`

    padding: 0.4rem;
    align-items: center;
    justify-content: space-between;
    background-color: #f2f2f2;

h1{ 
  font-family: 'Noto Sans', sans-serif;
  font-size: 38px;  
  margin: 15px;
  text-align: center; 
}

h2{
    color: #333;
    font-weight: 400;
}    

a{
    color: #333;
    text-decoration: none;

}

.producto-item{
    display: flex;
  position: relative;
  color: #111111;
  background-color: #ffffff;

}

.precio{
   font-size: 25px; 
   color: #f12c0e;
}

.cuadro{
  color: #111111;
  background-color: #ffffff;
  display: flex;
  position: relative;
  flex: 1;
  max-width: 100%;
  margin: auto 200px;

}

.imagen{
  border-width: 0;
  object-fit: cover;
  display: block;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 200px;
  height: auto;

}

.cuadro-texto{
  text-align: left;
  width: auto;
  margin: 20px;
  display: block;
}

.loading{
  font-family: 'Noto Sans', sans-serif;
  font-size: 18px;  
  margin: 15px;
  text-align: center; 
}

.buttom{
  border-style: none;
  text-transform: uppercase;
  background-image: none;
  font-size: 0.98rem;
  padding: 10px;
  //border: 10px;

  color: #111111;
  background-color: #e5e5e5;
 

}

.pb{
    margin-top: 25px;
    text-align: left;
}

.star{
    height: 20px;


}

.checked {
  color: #7f69a5;
  margin: 2px;
  border: 1px;
}


.cate{
    font-weight: bold;
}

.categoria{
  padding: 10px;
  margin-right: 28rem;
  border-style: none;
  text-transform: uppercase;
  background-image: none;
  font-size: 1rem;
  color: #111111;
  background-color: #e5e5e5;
}


`