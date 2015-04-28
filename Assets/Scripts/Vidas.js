#pragma strict

function Start () {	
	for (var i = 0; i < GameData.cantidadVidas; i++){
		var objetoVida : GameObject;
		objetoVida = Instantiate(Resources.Load("Life"));
		objetoVida.SendMessage("setPosicion", i);
	}
}

function Update () {

}