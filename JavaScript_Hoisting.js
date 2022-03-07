console.log(hello); // undefined                                
var hello = 'world';                              

var needle = 'haystack'; 
test(); 
function test(){
    var needle = 'magnet';
    console.log(needle); // magnet
}

                                
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // super cool... print() is never called



var food = 'chicken';
console.log(food); // chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); // half-chicken
    var food = 'gone';
}


mean(); // this is not a function
console.log(food);
var mean = function() { 
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);



console.log(genre); // undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); // rock
    var genre = "r&b";
    console.log(genre); // r&b
}
console.log(genre); // disco


dojo = "san jose";
console.log(dojo); // san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); // seattle 
    var dojo = "burbank";
    console.log(dojo); // burbank
}
console.log(dojo); // san jose 



console.log(makeDojo("Chicago", 65)); // 'Chicago', students: 65, hiring: true
console.log(makeDojo("Berkeley", 0)); // error because of the dojo = closed for now  since dojo is a const
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
