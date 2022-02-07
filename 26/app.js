//let mainHeading=document.getElementById('main-heading')
//console.log(mainHeading.innerHTML)


//let newHeading-prompt('введите новый заголовок')
//mainHeading.innerHTML=newHeading


let mainLeft=document.querySelector('.main-left')



function addDiv(){
let newDiv=document.createElement('div')
newDiv.className='circle'
newDiv.style.width='100px'
newDiv.style.height='100px'
newDiv.style.backgroundColor='red'
newDiv.style.borderRadius='50%'


mainLeft.append(newDiv)
console.log(newDiv)


}

function delDiv(){
    let div=document.querySelector('.circle')
    document.querySelector('.circle').remove(div)
}





let mainRight=document.querySelector('.main-right')


function adDiv(){
    let nowDiv=document.createElement('div')
    nowDiv.className='square'
    nowDiv.style.width='100px'
    nowDiv.style.height='100px'
    nowDiv.style.backgroundColor='green'
    nowDiv.style.borderRadius='10%'


   mainRight.append(nowDiv)
   console.log(nowDiv)

}

function deleDiv(){
    let div=document.querySelector('.square')
    document.querySelector('.square').remove(div)
}