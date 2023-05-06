const URL_API = "https://digimon-api.vercel.app/api/digimon/";

function get_digimon() {
  //  let input_name = document.getElementById("input_name").value;

  fetch(`${URL_API}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let showCard = "";

      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let imgDigimon = data[i].img;
        console.log(imgDigimon);
        let digimonName = data[i].name;
        console.log(digimonName);
        let level = data[i].level;
        console.log(level);
        showCard += `
        <div class="col-md-3 ">
        <div class="fondoCard col shadow-lg p-3 mb-5 bg-body-tertiary rounded d-flex flex-column align-items-center" >
              <img src="${imgDigimon}" class="card-img-top rounded-circle" alt="Imagen de ${digimonName}" style='width:200px'>
                <div class="card-body ">
                  <h5>Name</h5>
                  <h5 class="card_title">${digimonName}</h5>
                  <p class="card-text"><b>Level:</b></p>
                  <p class="card-text">${level}</p>
                </div>
        </div>
        </div>
        `;
        document.getElementById("card").innerHTML = showCard;
      }
    })
    .catch((error) => alert("nos caimos!"));
}

function card() {}

/*fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((result) => {
    let personajes = result.data;
    let contenedor = document.getElementById("card");
    console.log(personajes);
    let tarjetas = "";
    for (let personaje in personajes) {
      tarjetas += `
            <div class="col-md-3 col-sm-12 m-5">
                <div class="card">
                    <img src="${personajes[personaje].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${personajes[personaje].title}</h5>
                      <p class="card-text">${personajes[personaje].blurb}</p>
                    </div>
                    <div class="card-back">
                        <h5>armorperlevel: ${personajes[personaje].stats.armorperlevel}</h5>
                        <h5>attackdamage: ${personajes[personaje].stats.attackdamage}</h5>
                        <h5>attackdamageperlevel: ${personajes[personaje].stats.attackdamageperlevel}</h5>
                        <h5>attackrange: ${personajes[personaje].stats.attackrange}</h5>
                        <h5>attackspeedoffset: ${personajes[personaje].stats.attackspeedoffset}</h5>
                        <h5>attackspeedperlevel${personajes[personaje].stats.attackspeedperlevel}</h5>
                    </div>
                </div>
                
            </div>
        `;
    }
    contenedor.innerHTML = tarjetas;
  })
  .catch((error) => console.log(error));*/
