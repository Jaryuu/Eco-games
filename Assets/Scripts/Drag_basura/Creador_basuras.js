#pragma strict
var basurita: GameObject;
var cantidad = 5;
function Start () {
	Basurero.basurasADestruir = cantidad;
	
	for(var i = 0; i < cantidad; i++){
		var eleccion = Random.Range(1,7);
		basurita = Resources.Load("basuras/no_gravedad/basurita_"+eleccion);		
		
		Instantiate(basurita, Vector3 (Random.Range(-5.0,5.0), Random.Range(-5.0,5.0), -7), Quaternion.identity);
	}

}

function Update () {

}