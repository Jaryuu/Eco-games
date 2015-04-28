#pragma strict
private var moveSpeed = 0.5;
private var maxX = 30.0;
private var minX = -maxX;
private var tChange: float = 0; // force new direction in the first Update
private var randomX: float;

function Start () {
	var curPos:Vector3 = this.transform.position;
	var offset:Vector3 = new Vector3(Random.Range(-5.0,5.0), 0, 0);
	this.transform.position = curPos + offset;
}

function Update () {
	if(gameObject.transform.position.y <= -5){
		Destroy(gameObject);
	}
	// change to random direction at random intervals
    if (Time.time >= tChange){
        randomX = Random.Range(-2.0,2.0); //  between -2.0 and 2.0 is returned
        // set a random interval between 0.5 and 1.5
        tChange = Time.time + Random.Range(0.5,1.5);
	}
	
	transform.Translate(Vector3(randomX, 0,0) * moveSpeed * Time.deltaTime);
    // if object reached any border, revert the appropriate direction
    if (transform.position.x >= maxX || transform.position.x <= minX) {
    	randomX = -randomX;
    }

    // make sure the position is inside the borders
    transform.position.x = Mathf.Clamp(transform.position.x, minX, maxX);
}

function  OnMouseDown() {
	Destroy(gameObject);
}