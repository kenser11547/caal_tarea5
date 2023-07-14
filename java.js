//crear consuktas atravez de un elemento
const formul = document.querySelector('form');
const tabla = document.querySelector('table');
const button = document.getElementById('botonConsultar');

const consultarPais = async (evento) => {
  evento.preventDefault();
  let nombrePais = formul.pais.value;
  if (nombrePais === '') {
    alert("Debe ingresar el nombre de un país");
    return;
  }
    // CONFIGURANDO LA PETICIÓN y el url de API DE PAISES ATRAVEZ DEL MMTODO GET
    const url = `https://restcountries.com/v3.1/name/${nombrePais}`;
    const config = {
      method: 'GET'
    };