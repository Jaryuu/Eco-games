#pragma strict
var basurita: GameObject;
var contador = 0;

function Start () {
	
	Instanciar();
}

function Update () {
	contador++;
	if(contador >= 35){
		Instanciar();
		contador = 0;
	}
}

function Instanciar(){
	var eleccion = Random.Range(1,7);
	basurita = Resources.Load("basuras/con_gravedad/gravedad_"+eleccion);
	Instantiate(basurita, Vector3 (Random.Range(-5.0,5.0), 6.05, -7), Quaternion.identity);
}