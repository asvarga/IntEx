
window.onload = function() {
	
	IE = {};
	
	document.body.style.background = "#000000";

	makeClasses();

	IE.canvas = document.createElement("canvas");
	IE.canvas.style.position = "fixed";
	IE.canvas.style.background = "#000000";
	//IE.canvas.style.cursor = "none";
	document.body.appendChild(IE.canvas);

	IE.stage = new createjs.Stage(IE.canvas);
	IE.top = new IE.Top();
	IE.stage.addChild(IE.top);

	// IE.mask = new createjs.Shape();
	// IE.mask.graphics.beginFill("#FFF").drawCircle(50, 50, 49.8);
	// IE.stage.mask = IE.mask;

	window.onresize = function() {

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
		this.addChild(new IE.Page());
	}
	IE.Top.prototype = new createjs.Container();
	IE.Top.prototype.constructor = IE.Top;
	IE.Top.prototype.start = function(event) {
		
	}
	IE.Top.prototype.tick = function(event) {
		var dt = event.delta/1000.0;
	}

	////

	IE.Page = function(o) {

		createjs.Container.call(this);

		o = o || {};
		var name = get(o, 'name', 'noName');
		var color1 = get(o, 'color1', "#BFFF00");
		var color2 = get(o, 'color2', "#0000FF");
		var text = get(o, 'text', 'Text not found.\nUse your imagination.');
		var font = get(o, 'font', '10px Arial');
		var textColor = get(o, 'textColor', '#000000');
		var buttonColor = get(o, 'buttonColor', '#000000');
		var buttonTextColor = get(o, 'buttonTextColor', '#FFFFFF');
		var buttonFont = get(o, 'buttonFont', '3px Arial');
		var buttons = get(o, 'buttons', [
			{
				text: 'Commit Suicide',
				next: 'suicide'
			},
			{
				text: 'Commit Suicide',
				next: 'suicide'
			}
		]);

		var rect = new createjs.Shape();
		rect.graphics.beginFill(color1).drawRect(0, 0, 100, 50);
		this.addChild(rect);

		var rect2 = new createjs.Shape();
		rect2.graphics.beginFill(color2).drawRect(0, 50, 100, 50);
		this.addChild(rect2);

		var t = new createjs.Text(text, font, textColor); 
		t.textAlign = "center";
		//t.textBaseline = "middle";
		t.lineWidth = 90;
		t.width = 100; 
		t.x = 50;
		t.y = 25-t.getMeasuredHeight()/2;
		this.addChild(t);

		this.buttonSet = new IE.ButtonSet(buttons, buttonColor, buttonTextColor, buttonFont);
		this.buttonSet.y = 50;
		this.addChild(this.buttonSet);

	}
	IE.Page.prototype = new createjs.Container();
	IE.Page.prototype.constructor = IE.Page;

	////

	IE.ButtonSet = function(buttons, color, textColor, font) {

		createjs.Container.call(this);

		var child = new createjs.Container();
		this.addChild(child);

		var height = 2.5;
		var width = 0;
		for (var i=0; i<buttons.length; i++) {
			var b = buttons[i];
			var button = new IE.Button(b, color, textColor, font);
			button.x = 50-button.width/2;
			button.y = height;
			width = Math.max(width, button.width+5);
			height += button.height+2.5;
			child.addChild(button);
		}

		var scale = Math.min(1, Math.min(100.0/width, 50.0/height));
		child.scaleX = scale;
		child.scaleY = scale;

		child.x = 50-100*scale/2;
		child.y = 25-(height*scale)/2;
	}
	IE.ButtonSet.prototype = new createjs.Container();
	IE.ButtonSet.prototype.constructor = IE.ButtonSet;

	////

	IE.Button = function(o, color, textColor, font) {

		createjs.Container.call(this);

		o = o || {};

		var text = get(o, 'text', '???');
		var textColor = get(o, 'textColor', textColor || "#FFFFFF");
		var color = get(o, 'color', color || "#000000");
		var next = get(o, 'next', 'death');
		var font = get(o, 'font', font || "8px Arial");

		var t = new createjs.Text(text, font, textColor); 
		//t.textAlign = "center";
		//t.textBaseline = "middle";
		var width = t.getMeasuredWidth();
		this.width = width + 3;
		var height = t.getMeasuredHeight();
		this.height = height + 3;
		t.x = (this.width-width)/2;
		t.y = (this.height-height-1)/2;		// -1 seems to center text nicely

		var rect = new createjs.Shape();
		rect.graphics.beginFill(color).drawRect(0, 0, this.width, this.height);
		this.addChild(rect);

		this.addChild(t);
	}
	IE.Button.prototype = new createjs.Container();
	IE.Button.prototype.constructor = IE.Button;

}











