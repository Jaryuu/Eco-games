#pragma strict
var game_over : Text;
var score : Text;
var high_score : Text;
var fact : Text;


//Obtenidos de: http://www.planetpals.com/fastfacts.html
var datos_curiosos = ["Did you know? 86% of Ocean debris is plastic",
					  "Did you know? The garbage in a landfill stays for about 30 years",
					  "Did you know? One third of all water is used to flush the toilet."];

function Start () {
	if (GameData.score > PlayerPrefs.GetInt("highScore")){
		PlayerPrefs.SetInt("highScore",GameData.score);
	}
	score.text = "Score: "+GameData.score;
	high_score.text = "High Score: "+PlayerPrefs.GetInt("highScore");
	fact.text = datos_curiosos[Random.Range(0, datos_curiosos.Length)];
	
}

function Update () {
	
}