var array = ["яблоко", "груша", "банан", ()=>console.log("Привет мир")];


array[10] = "киви";
console.log(array.toString());
array[3]();

//

if (false && print()){

}

function print() {
    console.log("print");
}

///

let message1 = "hi";
let message2 = message1;

message1 = "hay";
console.log(message2);

let user1 = {"name": "Jan"};
let user2 = user1;

user2.age = 27;
console.log(user1);


const man = {age:27}
man.age = 127;
console.log(man.age);
