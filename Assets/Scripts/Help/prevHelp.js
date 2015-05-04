#pragma strict

function Start () {

}

function Update () {

}

function OnMouseUp (){
	var screen : GameObject;
	
	if(gameHelp.currentScreen!=1){
		gameHelp.currentScreen-=1;
	}
	
	for (var i=1;i<=5;i++){
		if (i!=gameHelp.currentScreen){
			screen = GameObject.Find("help_"+i);
			screen.GetComponent.<Renderer>().material.color.a = 0;
		}
	}
	screen = GameObject.Find("help_"+gameHelp.currentScreen);
	screen.GetComponent.<Renderer>().material.color.a = 1;
	
	
}
