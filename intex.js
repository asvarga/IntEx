
window.onload = function() {
	
	IE = (typeof IE === 'undefined') ? {} : IE;
	
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
}

function init() {
	IE.state = {
		homes: 0
	}
	IE.currentPage = null;
	IE.pages = IE.pages || {};
	IE.top.showPage('welcome');
}

function makeClasses() {
	IE.Top = function() {
		createjs.Container.call(this);

		this.pageHolder = new createjs.Container();
		this.addChild(this.pageHolder);

		this.addChild(new IE.Question());
	}
	IE.Top.prototype = new createjs.Container();
	IE.Top.prototype.constructor = IE.Top;
	IE.Top.prototype.showPage = function(pageName) {
		IE.state.previousPageName = IE.state.currentPageName;
		IE.state.currentPageName = pageName;
		this.pageHolder.removeChild(IE.currentPage);
		IE.currentPage = new IE.Page(pageName);
		this.pageHolder.addChild(IE.currentPage);
		IE.stage.update();
	}

	////

	IE.Page = function(pageName) {

		createjs.Container.call(this);

		o = get(IE.pages, pageName, {});
		o = isFunction(o) ? o(IE.state.currentPageName) : o;
		//var name = get(o, 'name', 'noName');
		var title = get(o, 'title', "%%%%%%%%%%%%%%%%");
		var titleFont = get(o, 'titleFont', '8px Arial');
		var titleColor = get(o, 'titleColor', '#000000');
		var color1 = get(o, 'color1', "#BFFF00");
		var color2 = get(o, 'color2', "#0000FF");
		var color = get(o, 'color', color2);
		var text = get(o, 'text', 'Text not found.\nUse your imagination.');
		var font = get(o, 'font', '10px Arial');
		var textColor = get(o, 'textColor', '#000000');
		var buttonColor = get(o, 'buttonColor', '#000000');
		var buttonTextColor = get(o, 'buttonTextColor', '#FFFFFF');
		var buttonFont = get(o, 'buttonFont', '3px Arial');
		var buttons = get(o, 'buttons', [
			{
				text: 'Mind Own Business',
				next: 'death'
			}
		]);

		var rect = new createjs.Shape();
		rect.graphics.beginFill(color).drawRect(0, 0, 100, 16);
		this.addChild(rect);

		var rect2 = new createjs.Shape();
		rect2.graphics.beginFill(color1).drawRect(0, 15, 100, 46);
		this.addChild(rect2);

		var rect3 = new createjs.Shape();
		rect3.graphics.beginFill(color2).drawRect(0, 60, 100, 40);
		this.addChild(rect3);

		var t = new createjs.Text(title, titleFont, titleColor); 
		t.textAlign = "center";
		//t.textBaseline = "middle";
		t.lineWidth = 90;
		t.width = 100; 
		t.x = 50;
		t.y = 8-t.getMeasuredHeight()*0.6;
		this.addChild(t);

		var t2 = new createjs.Text(text, font, textColor); 
		t2.textAlign = "center";
		//t.textBaseline = "middle";
		t2.lineWidth = 90;
		t2.width = 100; 
		this.addChild(t2);

		var height = t2.getMeasuredHeight();
		var scale = Math.min(1, 35.0/height);
		t2.scaleX = scale;
		t2.scaleY = scale;
		t2.x = 50;
		t2.y = 38-(height*scale)*0.5;

		this.buttonSet = new IE.ButtonSet(buttons, buttonColor, buttonTextColor, buttonFont);
		this.buttonSet.y = 60;
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

		var scale = Math.min(1, Math.min(100.0/width, 40.0/height));
		child.scaleX = scale;
		child.scaleY = scale;

		child.x = 50-100*scale/2;
		child.y = 20-(height*scale)/2;
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
		var font = get(o, 'font', font || "8px Arial");
		var next = get(o, 'next', 'death');

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

		this.addEventListener("click", function(event) { 
			IE.top.showPage(next);
		});
	}
	IE.Button.prototype = new createjs.Container();
	IE.Button.prototype.constructor = IE.Button;

	IE.Question = function() {

		createjs.Container.call(this);

		var circle = new createjs.Shape();
		circle.graphics
			.beginFill("#FFFFFF")
			.beginStroke("#000000")
			.setStrokeStyle(0.25)
			.drawCircle(97, 3, 1.5, 1.5);
		this.addChild(circle);

		var t = new createjs.Text('?', '2px Arial', "#000000"); 
		t.textAlign = "center";
		t.x = 97;
		t.y = 1.7;
		this.addChild(t);

		this.addEventListener("click", function(event) { 
			if (IE.state.currentPageName == '?') {
				IE.top.showPage(IE.state.previousPageName);
			} else {
				IE.top.showPage('?');
			}
		});
	}
	IE.Question.prototype = new createjs.Container();
	IE.Question.prototype.constructor = IE.Question;
}











