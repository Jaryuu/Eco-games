﻿#pragma strict

var listaElementos : Array;
var listaNumero : Array;
var alto : int;
var ancho : int;
var parejasEncontradas: int;
var ultimoLevantado : int;
var objeto : GameObject;
static var ocupado : boolean;

var lista = new Array(1,1,2,2,3,3);

function Start () {
	ocupado = false;
	ultimoLevantado = -1;
	parejasEncontradas = 0;

	var baseX = 0.9 * ancho;
	var baseY = 0.9 * alto;
	var contador = -1;
	
	listaElementos = new Array();
	listaNumero = new Array();
	
	for (var i = 0; i < alto; i++){
		for (var j = 0; j < ancho; j++){
			contador++;
			
			//Elegir imagen		
			var eleccion = Random.Range(0,lista.length);	
			//Obtenerla
			var num = lista[eleccion];
		
			objeto = Instantiate(Resources.Load("Tile"), Vector3 (baseX - 3*j,baseY - 3*i, 1), Quaternion.identity);
			objeto.SendMessage("setControlador", gameObject);
			objeto.SendMessage("seleccionarImagen", num);
			objeto.SendMessage("setIdentidad", contador);
			listaElementos.push(objeto);
			listaNumero.push(num);
			//Borrarla de las opciones
			lista.RemoveAt(eleccion);
			}
	}
}

function Update () {

}

function levantaron(ident : int){
	ocupado = true;
	if (ultimoLevantado == -1)
	{
		ultimoLevantado = ident;
		
	}
	else
	{
		
		if(listaNumero[ident] == listaNumero[ultimoLevantado])
		{
			Destroy(listaElementos[ident], 0.3);
			Destroy(listaElementos[ultimoLevantado], 0.3);
			parejasEncontradas++;
			if(parejasEncontradas == 3){
				GameData.score += 100;
				GameData.cambiarJuego();
			}
		}
		else
		{
			yield WaitForSeconds (0.3);
			(listaElementos[ident] as GameObject).SendMessage("esconder");
			(listaElementos[ultimoLevantado] as GameObject).SendMessage("esconder");
		}
		ultimoLevantado = -1;

	}
	ocupado = false;
}