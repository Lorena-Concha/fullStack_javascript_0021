let first = document.getElementById("first");
let second = document.getElementById("second");
let thrid = document.getElementById("third");

first.addEventListener("mouseover", (e) => {
  showCard(first.id);
});

second.addEventListener("mouseover", (e) => {
  showCard(second.id);
});

thrid.addEventListener("mouseover", (e) => {
  showCard(thrid.id);
});

async function* generator(desde, hasta) {
  let i = desde;
  while (i <= hasta) {
    let link = "https://swapi.dev/api/people/" + i;
    let response = await fetch(link);
    let data = await response.json();
    let { name, height, mass } = data;
    let nuevoPersonaje = new Persona(name, height, mass);
    yield nuevoPersonaje;
    i++;
  }
}

const firstGenerator = generator(1, 5);
const secondGenerator = generator(6, 11);
const thirdGenerator = generator(12, 16);

class Persona {
  constructor(nombre, altura, peso) {
    this.nombre = nombre;
    this.altura = altura;
    this.peso = peso;
  }
}

async function typeGenerator(id) {
  switch (id) {
    case "first":
      const first = await firstGenerator.next();
      return first;
    case "second":
      const second = await secondGenerator.next();
      return second;
    case "third":
      const third = await thirdGenerator.next();
      return third;
  }
}

async function showCard(id) {
  const {value,done} = await typeGenerator(id)
  let div = document.getElementById(id);
  console.log(div);
  if (!done) {
    let html = div.innerHTML;
    html += `
    <div class="card shadow-lg p-2 mb-5 bg-body rounded ms-3" style="width: 18rem";>
    <span class="circle" data-range="1-5"></span>
    <div class="d-flex">
        <span class="${id}-circle" ></span>
        <div class="ms-3">
        <p class="fs-5 fw-bolder">${value.nombre}</p>
        <p>Estatura: ${value.altura} cm, Peso: ${value.peso}</p>
        </div>
  </div>
    `;
    div.innerHTML = html;
  }
}


