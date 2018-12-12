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

// Yell at the Ninja Turtles
const ninjaArray = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for(let i = 0; i < ninjaArray.length; i++) {
    console.log(ninjaArray[i].toUpperCase());

    // bonus:
    let chars = ninjaArray[i].toLowerCase().split("");
    for(let i = 0; i < chars.length; i+=2) {
        chars[i] = chars[i].toUpperCase();
    }
    chars = chars.join("");
    ninjaArray[i] = chars;

    console.log(ninjaArray[i]);
}

// Return of the Closets

// Alien Attire
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

let kristynsShoe = kristynsCloset[0];
kristynsCloset.splice(0,1);
thomsCloset[2].push(kristynsShoe);
console.log(kristynsCloset);
console.log(thomsCloset);

for(let i = 0; i < 3; i++) {
    let lengthOfKristynCloset = kristynsCloset.length;
    let lengthOfThomasCloset = thomsCloset.length;

    let randomItemOfKristyn = Math.floor(Math.random() * lengthOfKristynCloset);

    let randomCatagoryOfThomas = Math.floor(Math.random() * lengthOfThomasCloset);
    let randomItemOfCatagoryOfThomas = Math.floor(Math.random() * thomsCloset[randomCatagoryOfThomas].length);
   
    console.log("KristynsClose item: " + kristynsCloset[randomItemOfKristyn] + " and " +
                "ThomsCloset item: " + thomsCloset[randomCatagoryOfThomas][randomItemOfCatagoryOfThomas]);
}


// Dirty Laundry
for (let i = 0; i < kristynsCloset.length ; i++) {
    console.log("WHIRR: Now washing " + kristynsCloset[i]);
}

// Inventory
for(let i = 0; i < thomsCloset.length; i++) {
    console.log(thomsCloset[i]);
}


// Multiples of 3 and 5
let sum = 0;
for(let i = 1; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log("Sum of all the multiples of 3 or 5 below 1000 is: " + sum);


// Hungry for more?
// 0.
let argument = 10;

// 1.
for(let i = 1; i <= argument; i++) {
    console.log("#".repeat(i));
}

// 2.
for(let i = 1; i <= argument; i++) {
    console.log(" ".repeat(argument - i) + "#".repeat(i));
}

console.log("");

// 3.
for(let i = argument; i >= 1; i--) {
    console.log("#".repeat(i));
}

// 4.
for(let i = argument; i >= 1; i--) {
    console.log(" ".repeat(argument - i) + "#".repeat(i));
}
