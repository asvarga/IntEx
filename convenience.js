
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

function isFunction(functionToCheck) {
	var getType = {};
	return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

function fullScreen(elem) {
	var requestMethod = 
		elem.requestFullScreen || 
		elem.webkitRequestFullScreen || 
		elem.mozRequestFullScreen || 
		elem.msRequestFullscreen;

    if (requestMethod) { // Native full screen.
    	log(requestMethod);
        requestMethod.call(elem);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }

    //window.onresize();
}


