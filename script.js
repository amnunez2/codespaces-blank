let left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let train = document.querySelector('.train');
let text = document.querySelector('p');
let home = document.querySelector('.home');
let body = document.querySelector('.body');
let group = document.querySelector('.group');
let over = document.querySelector('.over');
let cheer = document.querySelector('.cheer');
let homee = document.querySelector('.homee');
let computer = document.querySelector('.computer');
train.style.display = "none"; 
home.style.display = "none";
body.style.display = "none";
group.style.display = "none";
over.style.display = "none";
cheer.style.display = "none";
homee.style.display = "none";
computer.style.display = "none";


left.addEventListener('click', function(){
    console.log ("left was clicked");
    leftRight.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    train.style.display = "block"; 
    homee.style.display = "block";
    text.innerHTML = "The towns people tell you about the forest and the dangers. You can either go in forest and search on your own by double clicking or you can hoover over the house to leave on a train back to your home.";
});

train.addEventListener('dblclick', function(){
    console.log ("double clicked");
    body.style.display = "block"; 
    train.style.display = "none"; 
    homee.style.display = "none";
     text.innerHTML = "Going in by yourself failed. You got strandad and this lead to your death.";
});

homee.addEventListener('mouseenter', function(){
    console.log ("hoovered");
    homee.style.display = "none"; 
    home.style.display = "block";
    train.style.display = "none"; 
     text.innerHTML = "You made it home safetly but you still hear the whispers of the forest";
});


right.addEventListener('click', function(){
    console.log ("right was clicked");
    leftRight.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    group.style.display = "block"; 
    computer.style.display = "block";
    text.innerHTML = "The towns people tell you about the forest and the dangers. You and  your group can enter the forest and start your adventure by double clicking or you can make a plan with the town people before searching by hoovering over the computer";
});

group.addEventListener('dblclick', function(){
    console.log ("double clicked");
    over.style.display = "block"; 
    group.style.display = "none"; 
    computer.style.display = "none";
     text.innerHTML = "Without a plan, the watcher took over your body and now posseses your soul";
});

computer.addEventListener('mouseenter', function(){
    console.log ("hoover");
    cheer.style.display = "block"; 
    group.style.display = "none"; 
    computer.style.display = "none";
     text.innerHTML = "Making a plan allowed you and the towns people to defeat the watcher!";
});