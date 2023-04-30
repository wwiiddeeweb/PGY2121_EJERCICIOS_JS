const form = document.querySelector("#form");

const botonEnviar = document.querySelector("#botonEnviar");
botonEnviar.addEventListener("click", (evento) => enviarFormulario(evento));

const enviarFormulario = (evento) => {
  evento.preventDefault();
  const infoFormulario = evento.target.form;

  const rut = infoFormulario[0].value;
  const nombre = infoFormulario[1].value;
  const appaterno = infoFormulario[2].value;
  const apmaterno = infoFormulario[3].value;
  const fechaNac = infoFormulario[4].value;
  const edad = infoFormulario[5].value;
  const genero = infoFormulario[6].value;
  const celular = infoFormulario[7].value;

  const dvrut = rut.slice(-1);
  const restorut = rut.slice(0, rut.length - 1);

  console.log(`rut: ${restorut}`);
  console.log(`digito verificado: ${dvrut}`);
};
