#pragma strict
private var posicion:Vector3;
private var basurasDestruidas = 0;
static var basurasADestruir = 1;

function Start () {
	posicion = this.transform.position;
}

function Update () {
	this.transform.position = posicion;
}

function OnCollisionEnter2D(collision : Collision2D){
	Destroy(collision.gameObject);
	basurasDestruidas++;
	//Ese 5 hay que cambiarlo a un global
	if(basurasDestruidas == basurasADestruir){
		GameData.score += 100;
		GameData.cambiarJuego();
	}
}