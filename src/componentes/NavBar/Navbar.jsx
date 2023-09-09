import React from "react"

import { Link } from "react-router-dom"
import styled from 'styled-components'
//import './menu.css';

function Navbar() {

    return(
        <>
           <NavContainer>
            <h2> e-<span>commerce</span> 3</h2>
            <div>
                <Link to={'/'}> Home </Link>
                <Link to={'/registro'}> Registro </Link>
                <Link to={'/login'}> Login </Link>
            </div>
           </NavContainer>
        </>
    )


}

export default Navbar;

const NavContainer = styled.nav`
h2{
    color: white;
    font-weight: 400;
    span{
        font-weight: bold;
    }
}

    padding: 0.4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }

`