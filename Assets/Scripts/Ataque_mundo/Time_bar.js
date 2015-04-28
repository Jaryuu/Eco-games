 #pragma strict

import UnityEngine.UI;

var velocidad : int;
var slider:Slider;

function Start(){
	var temp  = GameObject.Find("Slider");	
	slider = temp.GetComponent(UnityEngine.UI.Slider);
}

function Update() {
	 slider.value = slider.value - Time.deltaTime*velocidad;
	 if(slider.value <= 0){
	 	GameData.score += 100;
	 	GameData.cambiarJuego();
	 }
}