
import './App.css';
import ListaProductos from './componentes/ListaProductos/ListaProductos';
import Footer from './componentes/footer/footer';
import Registro from './componentes/Registro/Registro';
import DetalleProducto from './componentes/DetalleProducto';

import Menu from './componentes/NavBar/Navbar';

import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Terminoscondiciones from './componentes/Terminoscondiciones';
import Login from './componentes/login';


//hace el id dinamico

//A browserRouter va el nombre del repositorio   <BrowserRouter basename='/routing_js'>
function App() {
  return (

   
    <div className="App">

    <BrowserRouter> 
    <Menu />
        <Routes>
          <Route path= "/" element={<ListaProductos />} /> 
          <Route path= "/registro" element={<Registro />} />
          <Route path= "/login" element={<Login />} />  
          <Route path= "/detalleproducto/:id" element={<DetalleProducto />} />  
          <Route path= "/terminosycondiciones" element={<Terminoscondiciones />} /> 
        </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  

  );
}

export default App;
