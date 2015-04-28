#pragma strict

function Start () {

}

function Update () {

}

function OnMouseUp(){
	GameData.cantidadVidas = 5;
	GameData.score = 0;
	GameData.cambiarJuego();
}