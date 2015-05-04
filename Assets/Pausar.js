#pragma strict

var pausado : boolean;
var escalaTiempo : float;

function Start () {
	transform.position = Camera.main.ViewportToWorldPoint(new Vector3(0.1, 0.9, 1));
}

function Update () {

}

function OnMouseUp(){
	//Pausar y despausar
	if(pausado){
		desPausar();
	}
	else{
		pausar();	
	}
	pausado = !pausado;
	this.enabled = true;
}

function pausar(){
    escalaTiempo = Time.timeScale;
    Time.timeScale = 0;
    switchEnable(false);
    var propio = gameObject.GetComponent(BoxCollider2D) as BoxCollider2D;
    propio.enabled = true;
}

function desPausar(){
    Time.timeScale = escalaTiempo;
    switchEnable(true);
}

function switchEnable(disponible : boolean){
	switchEnableCaja(disponible);
	switchEnablePoli(disponible);
	switchEnableCirculo(disponible);
}

function switchEnableCaja(disponible : boolean){
 	var colisionadores : BoxCollider2D[] = FindObjectsOfType(BoxCollider2D) as BoxCollider2D[];
	for(var colisionador:BoxCollider2D in colisionadores) {
		colisionador.enabled = disponible;
	}
}

function switchEnablePoli(disponible : boolean){
 	var colisionadores : PolygonCollider2D[] = FindObjectsOfType(PolygonCollider2D) as PolygonCollider2D[];
	for(var colisionador:PolygonCollider2D in colisionadores) {
		colisionador.enabled = disponible;
	}
}

function switchEnableCirculo(disponible : boolean){
 	var colisionadores : CircleCollider2D[] = FindObjectsOfType(CircleCollider2D) as CircleCollider2D[];
	for(var colisionador:CircleCollider2D in colisionadores) {
		colisionador.enabled = disponible;
	}
}