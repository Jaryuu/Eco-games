var t0;
var tf;
function Start () {
	t0 = Time.fixedTime; 
}

function Update () {
	
}

function OnMouseUp (){
	t0 = Time.fixedTime; 
	tf = Time.fixedTime;
}

function OnMouseDrag(){
	tf = Time.fixedTime;
	gameObject.GetComponent.<Renderer>().color.a = 1 - (tf-t0)/6.0f;	
	if ((tf-t0)>6.0f){
		GameData.score += 100;
		GameData.cambiarJuego();
	}
}