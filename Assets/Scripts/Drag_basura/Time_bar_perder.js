#pragma strict

import UnityEngine.UI;

var slider:Slider;
var velocidad : int;

function Start(){
	var temp  = GameObject.Find("Slider");	 
	slider = temp.GetComponent(UnityEngine.UI.Slider);
}

function Update() {
	 slider.value = slider.value - (velocidad * Time.deltaTime);
	 if(slider.value <= 0){
		GameData.cantidadVidas -= 1;
	 	GameData.cambiarJuego();
	 }
}