#pragma strict

var fondo : SpriteRenderer;
var figura : SpriteRenderer;
var numero : int;
var identidad : int;
var prueba : Sprite;
var controlador : GameObject;

function Start () {
	figura.enabled = false;
}

function Update () {
	
}

function OnMouseUp(){
	if(!figura.enabled){
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

function seleccionarImagen(num : int){	
	figura.sprite = Resources.Load("basuras/Sprites/basura_"+num, Sprite);
	numero = num;

	figura.enabled = true;
}