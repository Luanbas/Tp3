
import React from "react";
import Intro from "../intro/intro";


import { Link } from "react-router-dom";
import styled from 'styled-components';

function Home(){ 

    return (
        <>
        <Home_Container>
            <div>
                <h3>
                <Link to="/"> Home </Link>
                <Link to="/productos"> Productos </Link>
                <Link to="/registro"> Registro </Link>
                <Link to="/login"> Login </Link></h3>
            </div>

        </Home_Container>
        </>
    )

}
//<Intro titulo = "ICO"/>

export default Home; // esto es re importante porque sino despues no anda


const Home_Container = styled.nav`
h2{
    color: #333;
    font-weight: 400;
}
    padding: 0.4rem;
    align-items: center;
    justify-content: space-between;
    a{
        color: #333;
        text-decoration: none;
        margin-right: 1rem;
    }

`