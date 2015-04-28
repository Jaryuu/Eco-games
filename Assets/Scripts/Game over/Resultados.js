#pragma strict
var game_over : Text;
var score : Text;
var high_score : Text;
var fact : Text;


//Obtenidos de: http://www.planetpals.com/fastfacts.html
var datos_curiosos = ["Did you know? 86% of Ocean debris is plastic",
					  "Did you know? The garbage in a landfill stays for a for about 30 years",
					  "Did you know? One third of all water is used to flush the toilet."];

function Start () {
	score.text = "Score: "+GameData.score;
	high_score.text = "High Score: "+GameData.hScore;
	fact.text = datos_curiosos[Random.Range(0, datos_curiosos.Length)];
}

function Update () {
	
}