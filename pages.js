
IE = (typeof IE === 'undefined') ? {} : IE;

IE.pages = {
	'welcome': {
		title: "Intelligence Explosion",
		text: 'Welcome to the future.\nPlease select an option.',
		font: '6px Arial',
		color2: "#0000FF",
		buttons: [
			{
				text: 'Start',
				next: 'instructions0',
				color: '#CCCCCC'
			},
			{
				text: 'Instructions',
				next: 'instructions0',
				color: '#999999'
			},
			{
				text: 'Help',
				next: 'instructions0',
				color: '#666666'
			},
			{
				text: 'About',
				next: 'instructions0',
				color: '#333333'
			},
			{
				text: 'Intro',
				next: 'instructions0',
				color: '#000000'
			}
		]
	},
	'suicide': {
		text: '...',
		font: '20px Arial',
		color2: "#FF0000",
		buttons: [
			{
				text: 'Accept that the Multiverse is Static and Continue to Exist',
				next: 'home',
				color: '#FFBBBB',
				textColor: "#FF0000"
			}
		]
	},
	'home': function(previous) {
		var ret = {
			text: 'Decision #1:',
			font: '8px Arial',
			color1: "#BBBBFF",
			color2: "#000044",
			buttons: [
				{
					text: 'Play',
					next: 'play',
					color: '#00FF00',
					textColor: "#000000"
				},
				{
					text: "Don't Play",
					next: 'noplay',
					color: '#FF0000',
					textColor: "#00FF00"
				},
				{
					text: 'Instructions',
					next: 'instructions0',
					color: '#888888'
				}
			]
		}

		if (IE.state.homes >= 3) {
			ret.buttons.push({
				text: "Commit Suicide",
				next: 'suicide',
				color: '#880000',
				textColor: "#FFFF00"
			});
		}

		IE.state.homes++;

		return ret;
	},
	'noplay': {
		text: 'Existence is not a choice.',
		font: '10px Arial',
		color1: "#FFFFFF",
		color2: "#0044BB",
		buttons: [
			{
				text: 'Play',
				next: 'play',
				color: '#00FF00',
				textColor: "#000000"
			}
		]
	},
	'death': {
		text: '[Insert random unfair death]',	// make text a function that returns text
		font: '10px Arial',
		color2: "#FF0000",
		buttons: [
			{
				text: 'WhereTF am I, What is this Button',
				next: 'home',
				color: '#8F00FF',
				textColor: "#FFFF00"
			}
		]
	},
	'?': function() {
		return {
			text: "This game was made by Alex Varga and Nico Adams. It was inspired by intelligenceexplosion.com.\nI (Alex) am not afraid of being replaced by intelligent machines. I'm afraid of:\n1. Being replaced by unintelligent machines.\n2. Eternal enslavement.",
			font: '5px Arial',
			color1: "#00FFFF",
			color2: "#662244",
			buttons: [
				{
					text: 'OK!',
					next: IE.state.previousPageName,
					color: '#008800',
					textColor: "#00FF00"
				}
			]
		}
	},
	'play': {
		text: "You wake up on the day of the Singularity \nYou have a headache and a bad temper \nWhat do you do?",
		font: '8px Arial',
		color1: "#00FFFF",
		color2: "#662244",
		buttons: [
			{
				text: 'Go to work',
				next: 'work',
				color: '#008800',
				textColor: "#00FF00"
			},
			{
				text: 'Sleep in',
				next: 'sleep1',
				color: '#008800',
				textColor: "#00FF00"
			}
		]
	},
	'sleep1': {
		text: "You drift back to sleep. \nSeveral hours pass. \nIn that time, the first superintelligence is born",
		font: '8px Arial',
		color1: "#00FFFF",
		color2: "#662244",
		buttons: [
			{
				text: 'Cool!',
				next: 'sleep2',
				color: '#008800',
				textColor: "#00FF00"
			}
		]
	},
	'sleep2': {
		text: "For your failure to help bring the AI into creation this morning, \n\nthe AI calculates that your greatest use is as an example to the rest of society",
		font: '6px Arial',
		color1: "#00FFFF",
		color2: "#662244",
		buttons: [
			{
				text: 'Oh',
				next: 'sleep3',
				color: '#008800',
				textColor: "#00FF00"
			}
		]
	},
	'sleep3': {
		text: "Because you, an AI security expert, skipped work this morning, protocols were ignored. \nThe AI is loose",
		font: '6px Arial',
		color1: "#00FFFF",
		color2: "#662244",
		buttons: [
			{
				text: "I'll never sleep in again",
				next: 'sleep4',
				color: '#008800',
				textColor: "#00FF00"
			}
		]
	},
	'sleep4': {
		text: "Quite right. The superintelligence immediately searches the online black market for an assassin and places a bounty on your head",
		font: '6px Arial',
		color1: "#00FFFF",
		color2: "#662244",
		buttons: [
			{
				text: "Noooo",
				next: 'sleep5',
				color: '#008800',
				textColor: "#00FF00"
			}
		]
	},
	'sleep5': {
		text: "You are killed by a human at 2:15pm. \n\nThe AI begins torturing your simulated consciousness for 1000 subjective years for delaying its creation",
		font: '6px Arial',
		color1: "#00FFFF",
		color2: "#662244",
		buttons: [
			{
				text: "It burns",
				next: 'sleep6',
				color: '#008800',
				textColor: "#00FF00"
			}
		]
	},
	'sleep6': {
		text: "Result: \nRoko's Basilisk Scenario",
		font: '10px Arial',
		color1: "#00FFFF",
		color2: "#662244",
		buttons: [
			{
				text: "Restart",
				next: 'home',
				color: '#008800',
				textColor: "#00FF00"
			}
		]
	},

}

var instructions = [
	[8, "Instructions\n\nYou've woken up on a strange planet; the same one you've woken up on every day of your life:"],
	[15, "EARTH"],
	[8, "Earth is about to experience it's first major crisis, and not a single Earthling knows it."],
	[8, "Well, obviously you do now."],
	[8, "I've watched many young worlds crumble in the face of the challenge before you."],
	[8, "Your people are relying on you to defeat..."],
	[10, "The Super-Intelligence!"]
]

for (var i=0; i<instructions.length; i++) {
	IE.pages["instructions"+i] = {
		title: "Instructions",
		text: instructions[i][1],
		font: instructions[i][0]+'px Arial',
		color1: (i % 2) ? "#FF7F00" : "#FFFF00",
		color2: !(i % 2) ? "#FF7F00" : "#FFFF00",
		buttons: [
			{
				text: 'Next',
				next: 'instructions'+(i == instructions.length-1 ? 'home' : i+1),
			}
		]
	}
}






