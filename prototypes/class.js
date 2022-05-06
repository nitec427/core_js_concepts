// JavaScript Classes are just syntactical sugar over the prototype method

// When it comes to inheritance, the JS only supports one construct: objects

// Each object has a PRIVATE prototype property. That prototype has another prototype and they are chained until NULL.

// By definition, NULL has no prototype, and acts as a final link.

// Nearly all object in JS are instances of Object, which has null as prototype 

// Further information is written to the notion page.


const F = function()  {
    this.a = 1;
    this.b = 2;
}

const o  = new F();
// Add if you want to property to prototype, but do not assign it to any value.
F.prototype.b = 3;
F.prototype.c = 4;

// F.prototype = b; DO NOT DO THIS
console.log(o);
y = Object.getPrototypeOf(o)
z = Object.getPrototypeOf(y)
t = Object.getPrototypeOf(z)
// t is null so the following won't work because it can't be converted to null
// m = Object.getPrototypeOf(t)
// Now inspect the prototype chain of o variable
console.log(y);
console.log(z);
console.log(t);
// console.log(m);

// INHERITING METHODS

// Inheriting method is no different than attaching a normal property to an object

const p = {
    a: 2,
    m: function(){
        return this.a + 1;
    }
};

console.log(p.m());

const q = Object.create(p);
// q is an object that is inherieted

q.a = 4;
// this pointer in the object points to the object that inherits the method
console.log(q.m());
console.log(p.m());


// Deep dive into the prototypes

// In JS fncs are able to have properties.
// All funcs have a special prop named prototype.

function doSth() {
    
    // It does not matter how you declare the function.
    /* Function in JS will always have a default prototype property - with one exception, an arrow function does not have a default prototype property*/

}

const myFunc = () => {};
console.log("As you can see arrow functions do not have a prototype binding:",myFunc.prototype);
console.log("However normal functions do have a prototype binding:",doSth.prototype);
doSth();

// Because normal functions have prototype, we can attach new props to it and create new object instances from them

const messi = new doSth();
// const salah = new myFunc(); this line won't work.

// YOU CAN NOT CREATE INSTANCES OF ARROW FUNCTIONS

console.log(messi);
console.log("The __proto__ of an instance of doSth function is doSomething.prototype", messi.__proto__);
// Until any object.prototype is found, the __proto__ chain is looked through. If no prototype property is found along the way then undefined is thrown.
console.log(salah);

var salah = function() {
    return "65";
}

function doSomething() {}
doSomething.prototype.foo = 'bar';
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = 'some value';

// Without looking at the documentation of MDN I can see that, the function doSomething has no property attached foo or bar to itself.

// Properties are attached to prototype of the function is only accesible on the inherited instances and by using func.prototype way.
console.log('doSomeInstancing.prop:      ' + doSomeInstancing.prop);
console.log('doSomeInstancing.foo:       ' + doSomeInstancing.foo);
console.log('doSomething.prop:           ' + doSomething.prop);
console.log('doSomething.foo:            ' + doSomething.foo);
console.log('doSomething.prototype.prop: ' + doSomething.prototype.prop);
console.log('doSomething.prototype.foo:  ' + doSomething.prototype.foo);


// Different ways to create objs and resulting proto chain

// obj -> Array.prototype -> Object.prototype -> null
// obj -> Func.prototype -> Object.prototype -> null
// obj -> Object.prototype -> null

function Graph() {
    this.vertices = [];
    this.edges = [];
}

Graph.prototype.add_vertex = function(v)  {
    this.vertices.push(v)
}

const g = new Graph();
console.log(g);

g.add_vertex("FB")


// Object.create, creates new object and assign its argument as the  prototype of new object

const father = {a: 1};
const child = Object.create(father);

console.log(father.a);
console.log(child.a);

child.a = 7;
console.log(father.a);
console.log(child.a);
delete child.a;

console.log(father.a);
console.log(child.a);

delete father.a;
console.log(father.a);
console.log(child.a);