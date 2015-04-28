private  var screenPoint:Vector3 ;
private  var offset:Vector3;

private var moveSpeed = 0.2;
private var maxX = Camera.main.orthographicSize * Screen.width / Screen.height;
private var minX = -Camera.main.orthographicSize * Screen.width / Screen.height;;
private var maxY = Camera.main.orthographicSize;
private var minY = - Camera.main.orthographicSize;
private var tChange: float = 0; // force new direction in the first Update
private var randomX: float;
private var randomY: float;


function Start(){

}

function Update(){
	// change to random direction at random intervals
    if (Time.time >= tChange){
    	randomX = Random.Range(-4.0,4.0); // with float parameters, a random float
        randomY = Random.Range(-4.0,4.0); //  between -2.0 and 2.0 is returned
        // set a random interval between 0.5 and 1.5
        tChange = Time.time + Random.Range(0.5,2.5);
	}
	
	transform.Translate(Vector3(randomX,randomY,0) * moveSpeed * Time.deltaTime);
    // if object reached any border, revert the appropriate direction
    if (transform.position.x >= maxX || transform.position.x <= minX) {
    	randomX = -randomX;
    }
    if (transform.position.y >= maxY || transform.position.y <= minY) {
    	randomY = -randomY;
	}
    // make sure the position is inside the borders
    transform.position.x = Mathf.Clamp(transform.position.x, minX, maxX);
    transform.position.y = Mathf.Clamp(transform.position.y, minY, maxY);
}

function  OnMouseDown() {
	screenPoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
	offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z));
}

function OnMouseDrag(){
	var curScreenPoint:Vector3 = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
	var curPosition:Vector3   = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
	transform.position = curPosition;
}

function OnCollisionEnter2D(collision : Collision2D){
	//Destroy(gameObject);
}