// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Este array guardará los nombres de los amigos.
let listaAmigos = [];
// Esta función se encargara de agregar un amigo al array.
function agregarAmigo() {
  let inputAmigo = document.getElementById('amigo');
  let nombre = inputAmigo.value;
 //Verificar que el campo no este vacío.
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
  listaAmigos.push(nombre);
  let listaHTML= document.getElementById('listaAmigos');
  let nuevoAmigo= document.createElement('li');
  nuevoAmigo.textContent=nombre;
  mostrarLista();
  console.log('lista actual de amigos:', listaAmigos);
  //Limpiar el campo de texto para el próximo nombre.
  inputAmigo.value = "";
}

function mostrarLista(){
  const ul=document.getElementById('listaAmigos');
  ul.innerHTML="";
  
  listaAmigos.forEach(amigo=>{
    const li= document.createElement("li");
    li.textContent=amigo;
    ul.appendChild(li);
  });
}

function sortearAmigos(){
  //Verificar si hay al menos un amigo para sortear.
  if(listaAmigos.length===0){
    alert('No hay amigos para sortear.');
    return;
  }

//Generar un índice aleatorio
  let indiceAleatorio=Math.floor(Math.random()*listaAmigos.length);
// Seleccionar el nombre del amigo con el índice aleatorio.
  let amigoSorteado=listaAmigos[indiceAleatorio];
// Obtener el elemento donde se mostrara el resultado.
  let resultadoHTML= document.getElementById('resultado');

// Mostrar el nombre del amigo sorteado en la página.
// Uso innerHTML para poder poner un texto personalizado
  resultadoHTML.innerHTML=(`<p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`);
}
