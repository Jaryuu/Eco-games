#pragma strict
private var posicion:Vector3;
private var vidas = 2;
private var colisiones = 0;

function Start () {
	posicion = this.transform.position;
}

function Update () {
	this.transform.position = posicion;
}

function OnCollisionEnter2D(collision : Collision2D){
	Destroy(collision.gameObject);
	colisiones++;
	//Ese 5 hay que cambiarlo a un global
	if(colisiones == vidas){
		GameData.cantidadVidas -= 1;
		GameData.cambiarJuego();
	}
}