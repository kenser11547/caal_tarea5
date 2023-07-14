<?php
//crear una busqueda con el metodo get o consulta
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $mensaje = "ESTO ES UN METODO GET";
    echo $mensaje;

} else {
  echo "ESTO NO ES METODO GET";
}
?>