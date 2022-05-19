function foo() {
    console.log(this.bar);
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo,
};

var obj2 = {
    bar: "obj2",
};
                            // node             browser
foo();                      // undefined        global      (this -> window object, when a global variable is declared it is assigned to window object, therefore this.bar -> window.bar -> "global")
obj1.foo();                 // obj1             obj1        (when a function is declared inside a object this referes to that object, therefore this.bar -> obj1.bar -> "obj1")
foo.call(obj2);             // obj2             obj2        (with call we can assign an owner to the function, therefore this.bar -> obj2.bar -> "obj2")
console.log(new foo());     // foo {}           foo {}      (this will create an object with the blueprint of foo, in this case it will create an empty object)
