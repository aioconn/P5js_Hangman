let words = ["PICKLE", "KEYBOARD", "ZEBRA", "SUNSET", "DIGITAL", "SPIRIT", "THEATER", "KNIFE", "POSTER", "WHALES"];
let randomWord = words[Math.floor(Math.random()*words.length)]
let splitWord = randomWord.split("");
let hiddenWord = "_".repeat(splitWord.length)
let splitHiddenWord = hiddenWord.split("");

//console.log(splitHiddenWord)
//console.log(hiddenWord)
//console.log(splitWord)
console.log(randomWord)
let textBox = document.getElementById("textBox");
textBox.style.width = 400 + "px";
textBox.style.height = 100 + "px";
textBox.style.border = "solid #0c0c0d"
textBox.style.position = "absolute";
textBox.style.left = "805px";
textBox.style.top = "408px";
textBox.style.backgroundColor = "rgb(184, 181, 174)"
textBox.style.fontSize = "50px"
textBox.style.textAlign = "Center"
textBox.innerHTML = splitHiddenWord.join(" ")

let increase = 0;
let left = 810;
let mybutton = document.getElementsByClassName("mybutton");
for(i = 0; i < mybutton.length; i++){
    mybutton[i].style.width = "30px"
    mybutton[i].style.position = "absolute"
    if(i > 12){
        mybutton[i].style.top = 570 + "px";
        mybutton[i].style.left = 810 + increase - 390 + "px";

    }else{
        mybutton[i].style.top = 540 + "px";
        mybutton[i].style.left = 810 + increase + "px";
    }
    increase += 30;
}


let reset = document.getElementById("reset");
reset.style.width = 100 + "px";
reset.style.height = 20 + "px";
reset.style.position = "absolute";
reset.style.left = "945px";
reset.style.top = "620px";


function setup(){
    createCanvas(displayWidth,displayHeight);
    //background("#000000")
    fill("#b8b5ae")
    rect(800,0,400,400);
    strokeWeight(3);
    line(900, 370, 1050, 370);
    line(980,370,980,70);
    line(980,70,1120,70);
}

let j = 0;

function check(event){
    event.target.remove();
    let letter = event.target.getAttribute("data-letter")
    if(splitWord.includes(letter)){
        //let index = splitHiddenWord
        let indexes = getAllIndexes(splitWord, letter);
        //console.log(indexes)
        for(let i = 0; i < indexes.length; i++){
            splitHiddenWord[indexes[i]] = letter;
            //console.log(splitHiddenWord)
            textBox.innerHTML = splitHiddenWord.join(" ")
        }
        if(!(splitHiddenWord.includes("_"))){
            fill("#eb0909")
            textSize(150)
            text("You Win!",100,500)
        }
    }else{
        let draw = [drawHead,drawBody,drawLeftLeg,drawRightLeg,drawLeftArm,drawRightArm]
        draw[j]();
        console.log(draw[j])
        console.log(j)
        if(j === 5){
            fill("#eb0909")
            textSize(150)
            text("You Lose!",100,500)
        }
        j++;
    }


}

function getAllIndexes(arr, val) {
    let indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) !== -1){
        indexes.push(i);
    }
    return indexes;
}

function drawHead(){
    noStroke();
    fill("#eb0909")
    circle(1110,100,60);
}

function drawBody(){
    stroke("#eb0909");
    strokeWeight(5)
    line(1110,120,1110,220)
}

function drawLeftLeg(){
    stroke("#eb0909");
    strokeWeight(5)
    line(1110,220,1090,270)
}

function drawRightLeg(){
    stroke("#eb0909");
    strokeWeight(5)
    line(1110,220,1130,270)
}

function drawLeftArm(){
    stroke("#eb0909");
    strokeWeight(5)
    line(1110,150,1080,170)
}

function drawRightArm(){
    stroke("#eb0909");
    strokeWeight(5)
    line(1110,150,1140,170)
}

function restart(){
    location.reload();
}

let hangman = document.getElementById('hangman')
hangman.style.textAlign = 'center'
