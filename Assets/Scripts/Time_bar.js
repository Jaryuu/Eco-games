 #pragma strict

import UnityEngine.UI;

var slider:Slider;
var velocidad : float;
var inicio : float;

function Start(){
	inicio = Time.time;
	velocidad = GameData.velocidad;
	//slider = GameObject.Find("Slider").GetComponent(UnityEngine.UI.Slider);
}

function Update() {
	 slider.value = slider.value - (velocidad * Time.deltaTime);
	 if(slider.value <= 0){
	 	GameData.score += 100;
	 	GameData.cambiarJuego();
	 	var fin = Time.time;
	 	print (fin - inicio);
	 }
}