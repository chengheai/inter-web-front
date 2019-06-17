class Animal {
	constructor() {
		this.type = 'animal';
	}
	say(val) {
		setTimeout(() => {
			console.log(this); //Animal
			console.log(this.type + ' says ' + val);
		}, 1000);
	}
}
var animal = new Animal();
animal.say('hi'); //animal says hi
