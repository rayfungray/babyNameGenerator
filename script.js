var lastNameInput = document.querySelector('#last-name-input');
var genNameBtn = document.querySelector('.generate-name');
var displayDiv = document.querySelector('.name-display');
var audio = new Audio('./click.wav');

genNameBtn.addEventListener('click',function(){
    audio.play();
    var input = checkLetterOnly();
    var type = getCritterType();    
    if(input !== undefined){
        genNameInDom(input, type);
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

    var boyName, girlName;
    if(type === "boy"){
        boyName = getRandEl(boyNames);
        displayDiv.innerHTML = boyName + ' ' + name;
        displayDiv.style.textShadow = '2px 2px blue';
    }else {
        girlName = getRandEl(girlNames);
        displayDiv.innerHTML = girlName + ' ' + name;
        displayDiv.style.textShadow = '2px 2px pink';
    }   
    
}

function getCritterType(){
    return document.querySelector('input[type="radio"]:checked').value;
}

function getRandEl(arr) {
    return arr[getRandNum(0 , arr.length -1)];
}

function getRandNum(min,max) {
    return Math.floor(Math.random()*(max+1-min) + min);
}

