#pragma strict

static var cantidadVidas = 5;
static var score = 0;
static var hScore = 0;
static var height : int;
static var width : int;
static var velocidad = 6.0;
static var escenas = ["drag_basura", "save_earth", "Memoria","limpiar_lago"];

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

static function cambiarJuego(){
	var eleccion = Random.Range(0,escenas.length);
	if(cantidadVidas == 0){
		if(score > hScore){
			hScore = score;
		}
		Application.LoadLevel("Game over");
	}else{
		Application.LoadLevel(escenas[eleccion]);
	}
	velocidad = velocidad * 0.98;
}