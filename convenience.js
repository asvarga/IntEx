
function log(x) {
	console.log(x);
}

function get(o, key, def) {
	return (key in o) ? o[key] : def;
}

function any(O) {
	for (var k in O) {
	    return O[k];
	}
}

function isString(x) {
	return (typeof x == 'string' || x instanceof String);
}

function rgb(r, g, b) {
	return 'rgb('+r+', '+g+', '+b+')'
}

function randRGB() {
	return rgb(
		Math.floor(Math.random()*255), 
		Math.floor(Math.random()*255), 
		Math.floor(Math.random()*255)
	);
}



