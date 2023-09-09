import React from 'react'
//rfce
import styled from 'styled-components'


function Mensaje_error({ errors }) {

  return (
    <>
        <Error_Container>
        {   errors?.type==="required" && (
                <p> Este campo es obligatorio </p>
            )
  
        }
        {   errors?.type==="minLength" && (
                <p> No supera el minimo de caracteres </p>
            )
        }
        {   errors?.type==="maxLength" && (
                <p> Maximo 20 caracteres </p>
            )
        }
        </Error_Container>
     
    </>
  )
}

export default Mensaje_error

const Error_Container = styled.nav`
p{
  margin-top: 0px;  
  margin-bottom: 0px; 
  font-size: 13px;  
  color: #bd2d2d;
}

`