#pragma strict

static var cantidadVidas = 5;
static var score = 0;
static var hScore = 0;
static var height : int;
static var width : int;
static var velocidad = 6.0;
static var escenas = ["drag_basura", "save_earth", "Memoria","limpiar_lago","Turbina"];
static var ultimaEleccion : int;

function Start () {
	height = Screen.height;
	width = Screen.width;
	print("H: "+height);
	print("W: "+width);
	
}

function Update () {

}

static function nuevoJuego(){
	cantidadVidas = 5;
	score = 0;
	velocidad = 6.0;
	cambiarJuego();
}

static function obtenerNivel(){
	var eleccion = Random.Range(0,escenas.length);
	while(eleccion == ultimaEleccion){
		eleccion = Random.Range(0,escenas.length);
	}
	ultimaEleccion = eleccion;
	return escenas[eleccion];
}

static function cambiarJuego(){
	if(cantidadVidas == 0){
		if(score > hScore){
			hScore = score;
		}
		Application.LoadLevel("Game over");
	}else{
		Application.LoadLevel(obtenerNivel());
	}
	velocidad = velocidad * 0.98;
}