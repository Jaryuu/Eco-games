#pragma strict

function Start () {

}

function Update () {

}

function setPosicion(num: int){
	transform.Translate(Vector3(-num*0.5, 0,0));
	print("Me llamaron con num: "+num);
}