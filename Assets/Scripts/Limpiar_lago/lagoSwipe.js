var t0 : float;
var tf : float;
var estaPresionado: boolean;
function Start () {
	t0 = Time.fixedTime; 
}

function Update () {
	if(!estaPresionado){
		t0 += Time.deltaTime;
		var transparency = (1 - (tf-t0)/6.0f);
		gameObject.GetComponent.<Renderer>().material.color.a = transparency;
	}
}

function OnMouseDown(){
	estaPresionado = true;
}

function OnMouseUp (){
	estaPresionado = false;
	//t0 = Time.fixedTime; 
	tf = Time.fixedTime;
}

function OnMouseDrag(){
	tf = Time.fixedTime;
	
	var transparency;
	transparency = (1 - (tf-t0)/6.0f);
	gameObject.GetComponent.<Renderer>().material.color.a = transparency;	
	if ((tf-t0)>6.0f){
		GameData.score += 100;
		GameData.cambiarJuego();
	}
}