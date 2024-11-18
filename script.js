let left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let train = document.querySelector('.train');
let text = document.querySelector('p');
train.style.display = "none"; 


left.addEventListener('click', function(){
    leftRight.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    train.style.display = "block"; 
     text.innerHTML = "Click to leave";
});
