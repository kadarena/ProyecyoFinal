import gastos from "../model/ModelGastos.js";
let btnIniciar = document.getElementById("btnIniciar");
btnIniciar.addEventListener("click", inicioSesion);
function inicioSesion() {
  var usuario = document.getElementById("usuario").value;
  let contrasena=document.getElementById("contrasena").value
  if (usuario == "Sara" && contrasena == '1234') {
    document.getElementById("login").style.display = "none";
    document.getElementById("carga").style.display = "block";
    setTimeout(function () {
      document.getElementById("carga").style.display = "none";
      document.getElementById("panel").style.display = "block";
    }, 3000);
  }
}
const crear = document.getElementById('crear')
crear.addEventListener('click', ()=>{
  document.getElementById('sectionBuscar').style.zIndex='2'
  document.getElementById('sectionListar').style.zIndex='2'
  document.getElementById('sectionCrear').style.zIndex='3'
  document.getElementById('sectionCategoria').style.zIndex='2'
  document.getElementById('sectionUsuario').style.zIndex='2'
  document.getElementById('sectionMaximo').style.zIndex='2'

})
const btnCrear=document.getElementById('btnCrear')
btnCrear.addEventListener("click",()=>{
    let valor=parseFloat(document.getElementById('valor').value);
    let descripcion=document.getElementById('descripcion').value;
    let categoria=document.getElementById('categoria').value;
    if(valor>=1000){
    let objeto ={
      valor,
      descripcion,
      categoria,
    }
    console.log(objeto)
    gastos.push(objeto)
  }
})

const listar = document.getElementById('listar')

listar.addEventListener('click', ()=>{
  document.getElementById('sectionListar').style.zIndex='3'
  document.getElementById('sectionBuscar').style.zIndex='2'
  document.getElementById('sectionCrear').style.zIndex='2'
  document.getElementById('sectionCategoria').style.zIndex='2'
  document.getElementById('sectionUsuario').style.zIndex='2'
  document.getElementById('sectionMaximo').style.zIndex='2'
sectionListar.innerHTML = ''
  gastos.map((gastos)=>{
    let valor=document.createElement('p')
    let categoria=document.createElement('p')
    let descripcion=document.createElement('p')
    let usuarios=document.createElement('p')
    let card=document.createElement('article')
    valor.textContent=gastos.valor
    categoria.textContent=gastos.categoria
    descripcion.textContent=gastos.descripcion
    usuarios.textContent=gastos.usuarios
    card.append(valor,categoria,descripcion,usuarios)
    card.classList.add('card')
    document.getElementById('sectionListar').append(card)
  })
})

const listarCategoria = document.getElementById('listarCategoria')
listarCategoria.addEventListener('click', ()=>{
  document.getElementById('sectionBuscar').style.zIndex='2'
  document.getElementById('sectionListar').style.zIndex='2'
  document.getElementById('sectionCrear').style.zIndex='2'
  document.getElementById('sectionCategoria').style.zIndex='3'
  document.getElementById('sectionUsuario').style.zIndex='2'
  document.getElementById('sectionMaximo').style.zIndex='2'
})
let btnCategoria=document.getElementById('btnCategoria')
btnCategoria.addEventListener("click",()=>{
  let idCategoria=document.getElementById('idCategoria').value;
  gastos.filter(function(gastos){
    if(idCategoria==gastos.categoria){
        let valor=document.createElement('p')
        let categoria=document.createElement('p')
        let descripcion=document.createElement('p')
        let usuarios=document.createElement('p')
        let card=document.createElement('article')
        valor.textContent=gastos.valor
        categoria.textContent=gastos.categoria
        descripcion.textContent=gastos.descripcion
        usuarios.textContent=gastos.usuarios
        card.append(valor,categoria,descripcion,usuarios)
        card.classList.add('card')
        document.getElementById('sectionCategoria').append(card)
  }
  })
})


const listarUsuario = document.getElementById('listarUsuario')
listarUsuario.addEventListener('click',()=>{
  document.getElementById('sectionBuscar').style.zIndex='2'
  document.getElementById('sectionListar').style.zIndex='2'
  document.getElementById('sectionCrear').style.zIndex='2'
  document.getElementById('sectionCategoria').style.zIndex='2'
  document.getElementById('sectionUsuario').style.zIndex='3'
  document.getElementById('sectionMaximo').style.zIndex='2'
})
let btnUsuario=document.getElementById('btnUsuario')
btnUsuario.addEventListener("click",()=>{
  let idUsuario=document.getElementById('idUsuario').value;
  gastos.filter(function(gastos){
    if(idUsuario==gastos.usuarios){
        let valor=document.createElement('p')
        let categoria=document.createElement('p')
        let descripcion=document.createElement('p')
        let usuarios=document.createElement('p')
        let card=document.createElement('article')
        valor.textContent=gastos.valor
        categoria.textContent=gastos.categoria
        descripcion.textContent=gastos.descripcion
        usuarios.textContent=gastos.usuarios
        card.append(valor,categoria,descripcion,usuarios)
        card.classList.add('card')
        document.getElementById('sectionUsuario').append(card)
  }
  })
})

const maximo = document.getElementById('maximo')
maximo.addEventListener('click', ()=>{
  document.getElementById('sectionBuscar').style.zIndex='2'
  document.getElementById('sectionListar').style.zIndex='2'
  document.getElementById('sectionCrear').style.zIndex='2'
  document.getElementById('sectionCategoria').style.zIndex='2'
  document.getElementById('sectionUsuario').style.zIndex='2'
  document.getElementById('sectionMaximo').style.zIndex='3'

})
btnMaximo.addEventListener("click", () => {
  let valorMaximo = parseFloat(document.getElementById('valorMaximo').value);
  let totalGastos = parseFloat(document.getElementById('totalGastos').value);
  let porcentaje=0.9*valorMaximo
  let valorMaximoElement = document.createElement('p');
    valorMaximoElement.textContent = "Valor Máximo: $" + valorMaximo;
    let card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(valorMaximoElement);
    document.getElementById('sectionMaximo').appendChild(card)
  if (totalGastos<=porcentaje) {
    let resultado=porcentaje-totalGastos
    let faltaParaTopeElement = document.createElement('p');
    faltaParaTopeElement.textContent = "Falta $" + (resultado) + " para alcanzar el tope máximo.";
    let card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(faltaParaTopeElement);
    document.getElementById('sectionMaximo').appendChild(card)
  }
  let porcentajeColor = (totalGastos / valorMaximo) * 100;
  let porcentajeElement = document.createElement('p');
  porcentajeElement.textContent = "Porcentaje de gastos: " + porcentajeColor + "%";
  if (porcentajeColor <= 25) {
    porcentajeElement.style.color = "green";
} else if (porcentajeColor <= 50) {
    porcentajeElement.style.color = "yellow";
} else {
    porcentajeElement.style.color = "red";
}
let card1 = document.createElement('div');
card1.classList.add('card');
card1.appendChild(porcentajeElement);
sectionMaximo.appendChild(card1);
});

  document.getElementById('sectionBuscar').style.zIndex='3'
  document.getElementById('sectionListar').style.zIndex='2'
  document.getElementById('sectionCrear').style.zIndex='2'
  document.getElementById('sectionCategoria').style.zIndex='2'
  document.getElementById('sectionUsuario').style.zIndex='2'
  document.getElementById('sectionMaximo').style.zIndex='2'

  let cerrar = document.getElementById("cerrar");
cerrar.addEventListener("click", cerrarSesion);
function cerrarSesion() {
      document.getElementById("login").style.display = "block";
      document.getElementById("panel").style.display = "none";
}