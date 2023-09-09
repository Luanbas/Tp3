

function enviar(){
    // aca voy a utilizar l oque se llaman selectores en JS
    // es decir, como voy a capturar esa informacion que pone el usuario aca.
    // en php lo haciamos con POST y recuperamos la info
    // aca creamos la constante y usamos un selector por id, que es el que mas se utiliza
    
        const datos = new Array('nombre','apellido','telefono','email','tipo_contacto','asunto','descripcion');
    
        //reviso que los campos no esten vacios
        for(let i=0; i<7; i++){
            console.log(datos[i]);
            if(document.getElementById(datos[i]).value == '' ){
                const error_m = "error_" + datos[i];
                document.getElementById(error_m).innerHTML = 'El campo es obligatorio'; // de esta manera escribe html
                console.log("hubo error");
                return false;
            }
        }
    
        console.log("Los campos no estan vacios");
    
        // Por que hay que llamar a la funcion para que se ejecute, cuando apreto el boton de registrarse. 
        enviar_formulario();

        console.log("Envie el formulario");

        //return false; //para que no envie el formulario (igualmente lo puse en el index)
    
}
    



// referencia: https://desarrolloweb.com/articulos/enviar-formulario-ajax-xmlhttprequest
// referencia2: https://metamug.com/article/html5/ajax-form-submit.html
// referencia3: https://stackoverflow.com/questions/35037069/what-is-the-meaning-of-onsubmit-return-false-javascript-jquery

// ref oficial: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

function enviar_formulario(){

    let form = document.getElementById('formulario');

        console.log("entro a submit");
        
        let xhr = new XMLHttpRequest(); //hago una nueva peticion
        console.log("esto es form");
        console.log(form.action);

        xhr.open("POST", form.action, true);  // form.action = "enviar_consulta.php" // true -> asincronico 
        xhr.send(new FormData(form));   // Realizo la peticion al servidor


        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                form.reset(); //reset form after AJAX success. para tener nuevamente los valores en 0
                getMensaje(); //Coloco el mensaje de formulario correcto.
                console.log("bien");
            }else{
                console.log("mehhhh");
            }
        }





}

// creamos una nueva funcion - preguntar cual es la diferencia de utilizar asi la funcion o llamarla de la otra forma
function getMensaje(){ 
    const http = new XMLHttpRequest(); // creamos el objeto para poder usar AJAX

    http.onreadystatechange = () => { // es probable que con esto este realizando una funcion asincronica (ver)
        if(http.readyState == 4 && http.status == 200){ // 4 es cuando el proceso esta completado y 200 es que esta correcto
            document.getElementById("mensaje").innerHTML = http.responseText; // actualizo en la cajita mensaje
        }
    }
    //configuracion de la solicitud GET
    http.open('GET', 'http://localhost/Proyectos/PWA/Uni_2/TP2/mensaje.txt', true); // tenemos que indicarle la URL que queremos que procese esto. Esto puede ser la URL de otra pagina, de una base de datos, en este caso es un text
    
    //Envio de la solicitud al servidor
    http.send();

}



let val_tel = ''; //variable que utilizo para trabajar la validacion del numero

function validar(elem){
    // Obtener el valor y el nombre del campo actual
    const value = elem.value;
    const name = elem.name;
    const error_m = "error_" + name;
    
    console.log("valor " + value);
    console.log("name " + name);
    console.log(error_m);

    //verifico particularmente el telefono
    if(name == "telefono"){

        if(isNaN(Number(value))){ //si no es un numero lo elimino
            document.getElementById("telefono").value = value.substring(0,value.length-1);
        }
      
    }
    
    //ahora vamos a validar si esta vacio
    if(value == ''){
        document.getElementById(error_m).innerHTML = "El campo es obligatorio <br><br>";
        return false;
    }else{
        document.getElementById(error_m).innerHTML = "";    
        return true;
    }

}


