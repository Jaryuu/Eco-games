#pragma strict

var speed :float;
var cambio :float;
var num : int;

var bateria : SpriteRenderer;

function Start () {
	speed = 20;
	cambio = 0;
	num = 0;
}

function Update () {
   transform.Rotate(0, 0, speed * Time.deltaTime, Space.World);
}


function OnMouseDown(){
	speed += 20;
	cambio += 1;
	if(cambio > 6){
		cambio = 0;
		num += 1;
		bateria.sprite = Resources.Load("Turbina/bateria/bateria_"+num, typeof(Sprite));
	}
	if(num == 5){
		yield WaitForSeconds (0.5);
		GameData.score += 100;
		GameData.cambiarJuego();
	}
}