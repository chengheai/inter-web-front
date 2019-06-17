class Animal {
	constructor() {
		this.type = 'animal';
	}
	say(val) {
		setTimeout(function() {
			console.log(this); //window
			console.log(this.type + ' says ' + val);
		}, 1000);
	}
}
var animal = new Animal();
animal.say('hi'); //undefined says hi
