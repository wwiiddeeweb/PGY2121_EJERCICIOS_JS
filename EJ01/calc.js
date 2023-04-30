const numeroUno = document.querySelector("#numeroUno");
const numeroDos = document.querySelector("#numeroDos");
const resultado = document.querySelector("#resultado");

const sumar = () => {
  const n1 = parseInt(numeroUno.value);
  const n2 = parseInt(numeroDos.value);
  const result = n1 + n2;
  resultado.innerHTML = result;
};
