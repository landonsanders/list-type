function ok(expression, message) {
	var value = (expression)? 'Pass: ' + message: 'Fail: ' + message;

	console.log(value);
}

function test(description, callback) {
	console.log('Test Description: ' + description);

	callback.call(null);
}

function getElement() {
	return this.data[this.currentElementIndex];
}

function toString() {
	return this.data.join();
}

function addElement(value) {
	this.length = this.length + 1;

	if (this.currentElementIndex === void 0) {
		this.currentElementIndex = 0;
	} else {
	
		this.currentElementIndex = this.currentElementIndex + 1;
	}

	this.data.push(value);
}

function removeElement(){

	if (this.length === 0 || (this.length - 1) < 0) {
		this.length = 0;
	}

	this.length = this.length - 1;

	console.log('Data:');

	this.data.splice(this.currentElementIndex, 1);

	this.currentElementIndex = this.currentElementIndex - 1;

	console.log('Data: ' + this.toString());
}

function previousElement() {
	var currentIndex = this.currentElementIndex;

	if ((currentIndex - 1) < 0) {
		this.currentElementIndex = 0;
		return;
	}

	this.currentElementIndex = currentIndex - 1;

	return this.data[this.currentElementIndex];
}

function nextElement() {
	var currentIndex = this.currentElementIndex;

	if ((currentIndex + 1) > (this.length -1)) {
		this.currentElementIndex = this.length - 1;
		return;
	}

	this.currentElementIndex = this.currentElementIndex + 1;
	
	return this.data[this.currentElementIndex];
}

function ListType() {
	this.data = [];
	this.currentElementIndex = void 0;
	this.length = this.data.length;
	this.getElement = getElement;
	this.toString = toString;
	this.addElement = addElement;
	this.removeElement= removeElement;
	this.nextElement = nextElement;
	this.previousElement = previousElement;

}