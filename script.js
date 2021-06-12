const btn = document.getElementById('button');
const msg = document.getElementById('text');
const img = document.getElementById('img');

// an array of compliments to be displayed
const compliments = [
    {
        compliment: "You're super cute", 
        image: "./images/givelove.gif"
    }, 
    {
        compliment: "Love you!",
        image: "./images/heartheart.gif"
    }, 
    {
        compliment: "Cutie :)",
        image: "./images/heart.gif"
    },
    {
        compliment: "uwu?",
        image: "./images/tenor.gif"
    },
    {
        compliment: "Listen up, you're amazing!",
        image: "./images/shout.gif"
    },
    {
        compliment: "gogogogogo :D",
        image: "./images/cheer.gif"
    }
];

// randomly picks a compliment from array to display 
const numGenerator = () => {
    return randomNum = Math.floor(Math.random() * compliments.length);
}

/*
// picks compliment to display 
const displayCompliment = () => {
    let num = numGenerator();
    //return compliments[num];
    document.getElementById("text").innerHTML=compliments[num];
}*/

const displayCompliment = () => {
    let num = numGenerator();
    let quote = compliments[num]
    msg.innerHTML = quote.compliment;
    //message.innerHTML = compliments[num];
    //img.src = compliments[num];
    img.src=quote.image;
}

btn.addEventListener('click', () => {
    displayCompliment;
});
