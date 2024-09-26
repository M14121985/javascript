

document.addEventListener('DOMContentLoaded', (event) => {
	let ventana;

	let pythonButton = document.getElementById('python');
	let javaButton = document.getElementById('java');
	let javascriptButton = document.getElementById('javascript');
	let cppButton = document.getElementById('cpp');
	let rubyButton = document.getElementById('ruby');
	let swiftButton = document.getElementById('swift');
	let goButton = document.getElementById('go');
	let phpButton = document.getElementById('php');
	let rustButton = document.getElementById('rust');
	let typescriptButton = document.getElementById('typescript');
	let abrirVentana = document.getElementById('abrirVentana');
	let cerrarVentana = document.getElementById('cerrarVentana');
	let ingresar = document.getElementById('ingresar');

	pythonButton.onclick = () => { alert('Python') };
	javaButton.onclick = () => { alert('Java') };
	javascriptButton.onclick = () => { alert('JavaScript') };
	cppButton.onclick = () => { alert('C++') };
	rubyButton.onclick = () => { alert('Ruby') };
	swiftButton.onclick = () => { alert('Swift') };
	goButton.onclick = () => { alert('Go') };
	phpButton.onclick = () => { alert('PHP') };
	rustButton.onclick = () => { alert('Rust') };
	typescriptButton.onclick = () => { alert('TypeScript') };
	abrirVentana.onclick = () => { ventana = window.open("https://www.google.com") };
	cerrarVentana.onclick = () => { if (ventana) ventana.close() };
	ingresar.onclick = () => { alert('¿Te gusta la página?') };
});
// crear elementos desde js

let elementoCreado1= document.createElement('p');
elementoCreado1.textContent = 'Elemento creado desde js';
document.body.append(elementoCreado1);

// crear elementos desde js con funcion 
crearDiv = createElement('div');
document.body.append(crearDiv);
crearDiv.textContent = 'Elemento creado desde js con funcion';

//boton de eventos funcionalidad botonDeEventos
/*let botonDeEventos1 = document.getElementById('botonDeEventos');
botonDeEventos1.onclick=()=>{alert('hiciste click en el Boton de eventos')};*/

//botonDeEventos1 = () => {alert("Evento de click");};



/*
let ancho= window.screen.availWidth;
let alto= window.screen.availHeight;


let ancho1= window.screen.width;
let alto1= window.screen.height;
console.log(ancho, alto);
console.log(alto1, ancho1);
*/

let elementoCreado1= document.createElement('p');
elementoCreado1.textContent = 'Elemento creado desde js';
document.body.append(elementoCreado1);

// crear elementos desde js con funcion 
 crearDiv = createElement('div');
document.body.append(crearDiv);
crearDiv.textContent = 'Elemento creado desde js con funcion';

//boton de eventos funcionalidad botonDeEventos
/*let botonDeEventos1 = document.getElementById('botonDeEventos');
botonDeEventos1.onclick=()=>{alert('hiciste click en el Boton de eventos')};*/

//botonDeEventos1 = () => {alert("Evento de click");};



/*
let ancho= window.screen.availWidth;
let alto= window.screen.availHeight;


let ancho1= window.screen.width;
let alto1= window.screen.height;
console.log(ancho, alto);
console.log(alto1, ancho1);
*/

