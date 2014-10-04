
window.onload = function() {
	
	document.body.style.background = "#BFFF00";

	IE = {};

	makeClasses();

	IE.canvas = document.createElement("canvas");
	IE.canvas.style.position = "fixed";
	IE.canvas.style.background = "#FFDF00";
	//IE.canvas.style.cursor = "none";
	document.body.appendChild(IE.canvas);

	IE.stage = new createjs.Stage(IE.canvas);
	IE.top = new IE.Top();
	IE.stage.addChild(IE.top);

	// IE.mask = new createjs.Shape();
	// IE.mask.graphics.beginFill("#FFF").drawCircle(50, 50, 49.8);
	// IE.stage.mask = IE.mask;

	window.onresize = function() {
		
		log(IE.top);

		var w = window;
		var d = document;
		var e = d.documentElement;
		var g = d.getElementsByTagName('body')[0];
		var width = w.innerWidth || e.clientWidth || g.clientWidth;
		var height = w.innerHeight|| e.clientHeight|| g.clientHeight;

		var size = Math.min(width, height);//*0.96;
		var chx = (width-size)/2.0;
		var chy = (height-size)/2.0;

		IE.canvas.style.width = width.toString()+"px";
		IE.canvas.style.height = height.toString()+"px";

		IE.canvas.width = IE.canvas.offsetWidth;
		IE.canvas.height = IE.canvas.offsetHeight;

		IE.size = 100;
		IE.top.set({x:chx, y:chy, scaleX:size/IE.size, scaleY:size/IE.size});
		//IE.mask.set({x:chx, y:chy, scaleX:size/IE.size, scaleY:size/IE.size});
		IE.stage.update();
	}

	window.onresize();

	init();
	start();
}

function init() {
	// createjs.Ticker.setInterval(40);
	// createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
	// IE.top.tick(event);
	// IE.stage.update();
}

function start() {
	// IE.top.start();
}

function makeClasses() {
	IE.Top = function() {
		createjs.Container.call(this);

		var back = new createjs.Shape();
		back.graphics.beginFill("#BFFF00").drawRect(0, 0, 100, 100);
		this.addChild(back);
	}
	IE.Top.prototype = new createjs.Container();
	IE.Top.prototype.constructor = IE.Top;
	IE.Top.prototype.start = function(event) {
		
	}
	IE.Top.prototype.tick = function(event) {
		var dt = event.delta/1000.0;
	}
}




