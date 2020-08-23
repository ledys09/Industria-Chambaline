<?php

if (isset($_POST)){
    $archivo = fopen("../data/data.json", 'r');
    $linea = "";

    while( ($linea = fgets($archivo)) ){
        $registro = json_decode( $linea, true );
        if (( $registro['nombreUsuario'] || $registro['correo'] ) == $_POST['usuario'] 
              && $registro['contrasena'] == $_POST['contrasena'] ){
            $respuesta['codigoRespuesta'] = 0;
            $respuesta['mensaje'] = 'las credenciales coinciden';
        } else {
            $respuesta['codigoRespuesta'] = 1;
            $respuesta['mensaje'] = 'las credenciales no coinciden';
        }
    }
    fclose($archivo);
}


echo json_encode($respuesta);

?>