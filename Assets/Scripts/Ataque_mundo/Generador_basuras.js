#pragma strict
var basurita: GameObject;
var contador = 0;

function Start () {
	
	Instanciar();
}

function Update () {
	contador++;
	if(contador >= 35 && Time.timeScale != 0){
		Instanciar();
		contador = 0;
	}
}

function Instanciar(){
	var eleccion = Random.Range(1,7);
	basurita = Instantiate(Resources.Load("basuras/con_gravedad/gravedad_"+eleccion),
										  Vector3 (Random.Range(-5.0,5.0),
										   6.05, -7), Quaternion.identity);
	basurita.GetComponent.<Rigidbody2D>().gravityScale *= (6.0/GameData.velocidad); 
}