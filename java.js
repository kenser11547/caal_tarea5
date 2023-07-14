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

      // Consulta a la API SI SE ESTA BUSCANDO O NO
  document.getElementById('resultado').innerText = 'Buscando el archivo que se desea...';
  try {
    // CONSULTA A LA API
    const respuesta = await fetch(url, config);
    if (respuesta.status) {
      const data = await respuesta.json();
      const pais = data[0];
      console.log(pais.name.common);
      console.log(pais.population);
      console.log(pais.capital);
      console.log(pais.flag);

      document.getElementById('nombrePais').innerText = pais.name.common;
      document.getElementById('poblacionPais').innerText = pais.population;
      document.getElementById('capitalPais').innerText = pais.capital[0];
      document.getElementById('banderaPais').src = pais.flags.png;
      document.getElementById('resultado').innerText = 'Fue Encontrado';
      tabla.style.display = '';
    } else {
      document.getElementById('resultado').innerText = 'No se encontró';
    }
  } catch (error) {
    console.log(error);
  }
};