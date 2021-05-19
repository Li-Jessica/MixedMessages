
// an array of compliments to be displayed
const compliments = [
    "You're super cute", 
    "Cutebus!",
    "YAYAYAYAYA CUTIE!",
    "Hi, I love you."
];

// randomly picks a compliment from array to display 
const numGenerator = () => {
    return randomNum = Math.floor(Math.random() * compliments.length);
}

// picks compliment to display 
const displayCompliment = () => {
    let num = numGenerator();
    return compliments[num];    
}

console.log(displayCompliment());