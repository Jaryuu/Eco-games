#pragma strict

var pausar : GameObject;

function Start () {
	pausar = GameObject.Find("Pause");
}

function Update () {

}

function OnMouseDown(){
	pausar.SendMessage("OnMouseUp");
}