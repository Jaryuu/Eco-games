#pragma strict

static var cantidadVidas = 5;
static var score = 0;
static var hScore = 1100;
static var height : int;
static var width : int;
static var escenas = ["drag_basura", "save_earth"];

function Start () {
	height = Screen.height;
	width = Screen.width;
	print("H: "+height);
	print("W: "+width);
}

function Update () {

}

static function cambiarJuego(){
	var eleccion = Random.Range(0,escenas.length);
	if(cantidadVidas == 0){
		Application.LoadLevel("Game over");
	}else{
		Application.LoadLevel(escenas[eleccion]);
	}

}