var person = {
	firstName: "John",
	lastName : "Doe",
	language : "NO",
};


// Returns all properties as an array
Object.getOwnPropertyNames(person) /*?*/

// Returns enumerable properties as an array
Object.keys(person) /*?*/

// Accessing the prototype
Object.getPrototypeOf(person) /*?*/

// Prevents adding properties to an object
Object.preventExtensions(person) /*?*/
// Returns true if properties can be added to an object
Object.isExtensible(person) /*?*/

// Prevents changes of object properties (not values)
Object.seal(person) /*?*/
// Returns true if object is sealed
Object.isSealed(person) /*?*/
// Prevents any changes to an object
Object.freeze(person) /*?*/
// Returns true if object is frozen
Object.isFrozen(person) /*?*/