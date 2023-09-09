import React from "react";


import styled from 'styled-components';

const Ratingstars = ({ rate_s }) =>{

const rate = Math.round(parseFloat(rate_s));    

       return(
        <>
        <Star_Container>
            <div className="star">

                <span class= {rate > 0 ? "fa fa-star fa-2x checked" : "fa fa-star fa-2x" } ></span>
                <span class= {rate >= 2 ? "fa fa-star fa-2x checked" : "fa fa-star fa-2x" } ></span>
                <span class={rate >= 3 ? "fa fa-star fa-2x checked" : "fa fa-star fa-2x" } ></span>
                <span class={rate >= 4 ? "fa fa-star fa-2x checked" : "fa fa-star fa-2x" }></span>
                <span class={rate == 5 ? "fa fa-star fa-2x checked" : "fa fa-star fa-2x" }></span>
            </div>
        </Star_Container>
        </>
       )

};


export default Ratingstars;


const Star_Container = styled.nav`

.star{
    height: auto;
}

.checked {
  color: #7f69a5;
  margin: 2px;
  border: 1px;
}

`