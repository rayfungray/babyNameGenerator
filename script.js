var lastNameInput = document.querySelector('#last-name-input');
var genNameBtn = document.querySelector('.generate-name');
var displayDiv = document.querySelector('.name-display');
var audio = new Audio('./click.wav');

genNameBtn.addEventListener('click',function(){
    audio.play();
    var input = checkLetterOnly();
    var gender = getGender();    
    if(input !== undefined){
        genNameInDom(input, gender);
    }
});


function checkLetterOnly(){
    var letters = /^[A-Za-z]+$/;
    if(lastNameInput.value.match(letters)){
        return lastNameInput.value;
    }else{
        alert('Please input characters only');
    }
}

function genNameInDom(name, type){
     if(type === "boy"){
        outputName(boyNames, name);
    }else {
        outputName(girlNames, name);
    }       
}



function getGender(){
    return document.querySelector('input[type="radio"]:checked').value;
}

function outputName(arr, name){
    var randFirstName = getRandEl(arr);
    var middleName = randFilterElem(arr, randFirstName)
    displayDiv.innerHTML = randFirstName + ' ' + middleName + ' ' + name;
    displayDiv.style.textShadow = '2px 2px blue';
}

function randFilterElem(arr, filter){
    var randomElem = getRandEl(arr);
    while(filter === randomElem){
        randomElem = getRandEl(arr);
    }
    return randomElem;
}

function getRandEl(arr) {
    return arr[getRandNum(0 , arr.length -1)];
}

function getRandNum(min,max) {
    return Math.floor(Math.random()*(max+1-min) + min);
}

