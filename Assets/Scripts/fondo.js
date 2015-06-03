#pragma strict

var fondo: SpriteRenderer;

var red: float;
var green: float;
var blue: float;
var tChange : float;

function Start () {	
	tChange = 0;
}

function Update () {
	var limite = 0.005;

    if (Time.time >= tChange){
    	red = Random.Range(0.0, limite) * Mathf.Sign(red);
		green = Random.Range(0.0, limite) * Mathf.Sign(green);
		blue = Random.Range(0.0, limite) * Mathf.Sign(blue);
		
        tChange = Time.time + Random.Range(1.0,2.0);
	}

	if(fondo.color.r >= 1 || fondo.color.r <= 0){
		red = -red;
	}
	if(fondo.color.g >= 1 || fondo.color.g <= 0){
		green = -green;
	} 
	if(fondo.color.b >= 1 || fondo.color.b <= 0){
		blue = -blue;
	}    	       

	fondo.color = new Color(fondo.color.r + red, 
						  	fondo.color.g + green,
						  	fondo.color.b + blue,
						  	fondo.color.a);
					  	 
	print("-r: " + red +
		  " -g: " + green + 
		  " -b: " + blue);

	print("r: " + fondo.color.r +
	  " g: " + fondo.color.g + 
	  " b: " + fondo.color.b  + 
	  " a: " + fondo.color.a);	
					  	 
	}
	
function OnMouseDown(){
	
	fondo.color = new Color(Random.Range(0.0,1.0), 
					  	 	Random.Range(0.0,1.0),
					  	 	Random.Range(0.0,1.0),
					  	 	fondo.color.a);
}