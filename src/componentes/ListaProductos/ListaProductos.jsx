import React,{useState,useEffect} from "react";

import { Link } from "react-router-dom";

import './ListaProductos.css';
import styled from 'styled-components';

//quiero traerme una lista de productos de una API
// una API ES UN CONJUNTO DE DATOS QUE TRAEMOS DE OTRA WEB

function ListaProductos(){
     
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products') //Aca ponemos la URL de la API que querramos
        .then( response => response.json())
        .then( data => {
            setProductos(data);
            setLoading(false);
        })
    }, [])
     

    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <Lista_Container>
            <h1> Productos </h1>
            {loading ? (
                <>
                <p class="loading"> Cargando productos </p>
                <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                <span class="sr-only">Loading...</span>
                </>
            ) : (
                <ul className="productos-lista">
                    {productos.map(producto => (
                        <li key ={producto.id} className="producto-item"> 
                            <div class= "cuadro">
                                <div class = "cuadro-imagen">
                                <img src= {producto.image} className = "imagen" alt="foto perfil"/>
         
                                </div>
                                <div class = "cuadro-texto">
                                    <h3> {producto.title} </h3>
                                    <p> {producto.description} </p>
                                    <p class= "precio"> Precio: ${producto.price} </p>
                                    <p className="pb">
                                    <Link to ={`/DetalleProducto/${producto.id}`} className = "buttom"> Ver Detalles </Link>
                                    </p>
                                </div>

                            </div>
                        </li>
                    ))}
                </ul>
            ) } 

            </Lista_Container>
        </div>



    )

}


export default ListaProductos; 


const Lista_Container = styled.nav`

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
   font-size: 20px; 
   color: #f12c0e;
}

.cuadro{
  display: flex;
  position: relative;
  flex: 1;
  max-width: 100%;

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


`