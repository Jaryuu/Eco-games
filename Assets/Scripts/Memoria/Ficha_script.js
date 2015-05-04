#pragma strict

var fondo : SpriteRenderer;
var figura : SpriteRenderer;
var numero : int;
var identidad : int;
var prueba : Sprite;
var controlador : GameObject;
var ratioAnterior : float;

function Start () {
	figura.enabled = false;
	ratioAnterior = 10000.0;
}

function Update () {
}

function OnMouseUp(){
	if(!figura.enabled && !Controlador_memoria.ocupado){
		figura.enabled = true;
		controlador.SendMessage("levantaron", identidad);
	}
}

function setControlador(cont : GameObject){
	controlador = cont;
}

function setIdentidad(ident : int){
	identidad = ident;
}

function esconder(){
	figura.enabled = false;
}

function cambiarEscala(ratio : float){
	if(ratioAnterior > ratio){
		gameObject.GetComponent.<Transform>().localScale = new Vector3(ratio, ratio, 1);
		ratioAnterior = ratio;
	}
}

function seleccionarImagen(num : int){	
	figura.sprite = Resources.Load("basuras/Sprites/basura_"+num, Sprite);
	numero = num;
	figura.enabled = true;
}