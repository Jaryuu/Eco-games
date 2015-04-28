#pragma strict

function Start () {

}

function Update () {

}

function setPosicion(num: int){
	 transform.position = Camera.main.ViewportToWorldPoint(new Vector3(0.9-(num*0.02),0.9,1));
	print("Me llamaron con num: "+num);
}