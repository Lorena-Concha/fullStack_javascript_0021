let actividades = document.getElementById('actividades');


actividades.addEventListener("change", function(){
    let valor = actividades.value;
    let img = document.querySelector("img")
    let actividad = document.getElementById("actividad")
    let info = document.getElementById("info")

    switch (valor) {
        case "Trecking":
            img.setAttribute("src","./assets/trekking.jpg")
            actividad.innerHTML = "TRECKING"
            info.innerHTML = `<i class="fa-solid fa-location-dot"></i> Volcan de villarica`
        break;
        case "Natación":
            img.setAttribute("src","./assets/natacion.jpg")
            actividad.innerHTML = "NATACIÓN"
            info.innerHTML =`<i class="fa-solid fa-location-dot"></i> Lago de Cochrane`
        break;
        case "Ferry":
            img.setAttribute("src","./assets/volcan.jpg")
            actividad.innerHTML = "Ferry"
            info.innerHTML = `<i class="fa-solid fa-location-dot"></i> Lago Llanquihue`
        break;
        default:
        break;
    }
})