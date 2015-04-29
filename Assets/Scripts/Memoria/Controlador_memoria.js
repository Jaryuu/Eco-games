#pragma strict

var listaElementos : Array;
var listaNumero : Array;
var alto : int;
var ancho : int;
var ultimoLevantado : int;
var objeto : GameObject;

var lista = new Array(1,2,3,4,5,6,5,4,2,1,3,6);

function Start () {
	ultimoLevantado = -1;

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
			//Borrarla de las opciones
			lista.RemoveAt(eleccion);
		
			objeto = Instantiate(Resources.Load("Tile"), Vector3 (baseX - 3*j,baseY - 3*i, 1), Quaternion.identity);
			objeto.SendMessage("setControlador", gameObject);
			objeto.SendMessage("seleccionarImagen", num);
			objeto.SendMessage("setIdentidad", contador);
			listaElementos.push(objeto);
			listaNumero.push(num);
		}
	}
}

function Update () {

}

function levantaron(ident : int){
	if (ultimoLevantado == -1)
	{
		ultimoLevantado = ident;
		
	}
	else
	{
		
		if(listaNumero[ident] == listaNumero[ultimoLevantado])
		{
			Destroy(listaElementos[ident]);
			Destroy(listaElementos[ultimoLevantado]);
		}
		else
		{
			(listaElementos[ident] as GameObject).SendMessage("esconder");
			(listaElementos[ultimoLevantado] as GameObject).SendMessage("esconder");
		}
		ultimoLevantado = -1;

	}
}