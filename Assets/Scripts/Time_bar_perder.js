#pragma strict

import UnityEngine.UI;

var slider:Slider;
var velocidad : float;
var inicio : float;

function Start(){
	inicio = Time.time;
	velocidad = GameData.velocidad;
}

function Update() {
	 slider.value = slider.value - (velocidad * Time.deltaTime);
	 if(slider.value <= 0){
		GameData.cantidadVidas -= 1;
	 	GameData.cambiarJuego();
	 	var fin = Time.time;
	 }
}