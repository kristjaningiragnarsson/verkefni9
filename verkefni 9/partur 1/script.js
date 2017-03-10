function whichButton(event) {
	var x = event.keyCode;           
    var y = String.fromCharCode(x)
    document.getElementById("bla").innerHTML = "numer: " + x + " = stafur: " + y;
}