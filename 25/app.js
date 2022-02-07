let mainHeading=document.querySelector('h1')
let mainBtn=document.querySelector('button')
let mainBlock=document.querySelector('div')

mainHeading.style.color='yellow'
mainHeading.style.fontSize='40px'
mainHeading.style.textAlign='center'

mainBlock.style.backgroundColor='red'
mainBlock.style.height='200px'
mainBlock.style.width='200px'


function changeColor(){
    mainHeading.style.color='black'
   
}
function changeBackgroundColor(){

    mainBlock.style.backgroundColor='blue'
}

function TextAlingLeft(){
    mainHeading.style.textAlign='left'
}
function TextAlingRight(){
    mainHeading.style.textAlign='right'
}
function TextAlingCentre(){
    mainHeading.style.textAlign='center'
}
function ChangeHight(){
    mainBlock.style.height='400px'
}
function Cancel(){
    mainHeading.style.color='yellow'
mainHeading.style.fontSize='40px'
mainHeading.style.textAlign='center'

mainBlock.style.backgroundColor='red'
mainBlock.style.height='200px'
mainBlock.style.width='200px'
}
