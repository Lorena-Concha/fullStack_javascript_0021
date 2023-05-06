
function Gasto(nombreGasto,valorGasto){
    this.nombreGasto = nombreGasto;
    this.valorGasto = valorGasto;
};

let gastos = [
]
let presupuesto = 0;


function calcularPresupuesto () {
    let montoPresupuesto = document.getElementById("presupuesto").value;
    document.getElementById("totalPresupuesto").innerHTML = "$" + montoPresupuesto;
    document.getElementById("totalGastos").innerHTML = "$" +  0;
    document.getElementById("totalSaldo").innerHTML = "$" + montoPresupuesto;
    presupuesto = montoPresupuesto;
    document.getElementById("botonCalcular").disabled = true;
    document.getElementById("reiniciar").classList.toggle('d-none')
    document.getElementById("botonCalcular").classList.toggle('d-none')
}


function ingresarGastos() {
    let totalGastos = 0;
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
    gastos.push(new Gasto(nombreGasto, valorGasto));
    let htmlTabla = "";
    gastos.forEach((gasto,i)=> {
        totalGastos += parseInt(gasto.valorGasto);
        htmlTabla += `
        <tr>
        <th scope="row"> ${gasto.nombreGasto}</th>
        <td>$ ${gasto.valorGasto}</td>
        <td><a role="button" class="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84;"><i class="fa-solid fa-trash-can" onclick="eliminarGasto(${i})"></i></a></td>
      </tr>
      `;
    })
    document.getElementById("totalGastos").innerHTML = "$" +  totalGastos;
    document.getElementById("tablaIngresoGasto").innerHTML = htmlTabla;
    document.getElementById("totalSaldo").innerHTML = "$" + (presupuesto - totalGastos);
}

function eliminarGasto(i){
    let totalGastos = 0;
    gastos.splice(i,1);
    let htmlTabla = "";
    gastos.forEach((gasto,i)=> {
        totalGastos += parseInt(gasto.valorGasto);
        htmlTabla += `
        <tr>
        <th scope="row"> ${gasto.nombreGasto}</th>
        <td>$ ${gasto.valorGasto}</td>
        <td><a role="button" class="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84;"><i class="fa-solid fa-trash-can" onclick="eliminarGasto(${i})"></i></a></td>
      </tr>
      `;
    })
    document.getElementById("totalGastos").innerHTML = "$" +  totalGastos;
    document.getElementById("tablaIngresoGasto").innerHTML = htmlTabla;
    document.getElementById("totalSaldo").innerHTML = "$" + (presupuesto - totalGastos);
}

function reiniciar () {
    document.getElementById("totalPresupuesto").innerHTML = "$" + 0;
    document.getElementById("totalGastos").innerHTML = "$" +  0;
    document.getElementById("totalSaldo").innerHTML = "$" + 0;
    presupuesto = 0;
    saldo = 0;
    document.getElementById("botonCalcular").disabled = false;
    document.getElementById("reiniciar").classList.toggle('d-none')
    document.getElementById("botonCalcular").classList.toggle('d-none')
    gastos = [];
    document.getElementById("tablaIngresoGasto").innerHTML = "";

}
