// Homeword_W01d03

// Easy Going
for(let i = 1; i <= 20; i++) {
    console.log(i);
}

// Get Even
for(let i = 0; i <= 200; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

// Excited Kitten
for(let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
    
    if(i % 2 === 0) {
        let msgArray = ["...human...why you taking pictures of me?...",
        "...the catnip made me do it...",
        "...why does the red dot always get away..."];

        console.log(msgArray[Math.floor(Math.random() * 3)]);
    }
}

// Fizz Buzz
function fizzBuzz(number) {
    if(number % 5 === 0 && number % 3 === 0 ) {
        console.log("FizzBuzz");
    } else if(number % 5 === 0){
        console.log("Buzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    }
}

// Getting to Know You
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];

// 1.
shahzad[0] = "Gameboy";
console.log(shahzad);
// 2.
daniel[1] += 1;
console.log(daniel);
// 3.
ryan[2] = "Gotham City";
console.log(ryan);
// 4.
reuben.pop();
reuben.push("Chicago");
console.log(reuben);
// 5.
jim.pop();
jim.push('Madrid', 'Paris', 'San Jose');
console.log(jim);
// 6.
jim.splice(2,1);
let remove = console.log(jim);
