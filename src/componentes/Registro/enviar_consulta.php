<?php 

$nombre_form = $_POST['nombre']; 
$apellido_form = $_POST['apellido'];
$telefono_form = $_POST['telefono'];
$correo_form = $_POST['email'];
$tipo_contacto_form = $_POST['tipo_contacto'];
$asunto_form = $_POST['asunto'];
$mensaje_form = $_POST['descripcion'];

// ahora voy a desarrollar una plantilla de como va a ser el mail que me va a llegar.
// TIP: "\: alt + 92"

$cuerpo_mail = "Nombre: ".$nombre_form."\r \n"."Apellido: ".$apellido_form."\r \n".
"Tel: ".$telefono_form."\r \n"."Email: ".$correo_form."\r \n"."Tipo de Contacto".$tipo_contacto_form."\r \n".
"Asunto: ".$asunto_form."\r \n"."Mensaje: "."\r \n".$mensaje_form;

//Ahora vamos a usar una funcion predeterminada de PHP que se llama "mail"
//Si vamos a la documentacion oficial de Php, nos dice que es una funcion que nos envia un email.
//indicandonos los parametros que necesita

mail("luca_a.b@hotmail.es","Mensaje PHP desde el sitio web",$cuerpo_mail);

//ahora agregamos una funcion para devolver al usuario a la pagina del formulario, avisandole que su mensaje fue enviado.
//header("Location:index.php?ok"); // le estoy pasando un GET (el ok)



