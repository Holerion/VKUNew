let slider = document.querySelector('.centre')
let sliderRevers = document.querySelector('.centre-revers')
let deg =0
let slotsItems = document.querySelectorAll('.slots-item')


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let rand =0;
setInterval(() => {
    RandomImg(rand =getRandomInt(8));
    ActiveSlotItem();
}, 10000);

const RandomImg = function(rand){    
    slider.style.transform = `translateY(${rand*-1000}px)`;
    sliderRevers.style.transform = `translateY(${-7000-(rand*-1000) }px)`;
}

const ActiveSlotItem = function(){
    slotsItems.forEach(function(item,index){
        if (item.classList.contains('active')) 
            item.classList.remove('active')
            
        if (index == rand) 
            item.classList.add('active')            
    })
}


let arrNext =document.querySelector('#next')
let arrPrew =document.querySelector('#prew')
arrNext.addEventListener('click', function(){
    rand==7? rand=0:rand++;
    RandomImg(rand);
    
    ActiveSlotItem();
})
arrPrew.addEventListener('click', function(){
    rand==0? rand=7:rand--;
    RandomImg(rand);    
    ActiveSlotItem();
})












let propertyContainer =document.querySelector('.property-container')
let property =document.querySelector('.property')
let degr = 18;
setInterval(() => {      
    degr+=36;
    property.style.transform = `rotatez(${degr}deg)`;
}, 5000);

propertyContainer.addEventListener('click',function(){
    degr+=36;
    console.log(degr)
    property.style.transform = `rotatez(${degr}deg)`;
})



















let nextCard = document.querySelector('.next-card')
let prevCard = document.querySelector('.prev-card')
let Cardtrans = 0;
let card = document.querySelectorAll('.card')
let img90deg = document.querySelectorAll('.giroscop')
let galaryContainer = document.querySelector('.galary')
let j=0;
prevCard.addEventListener('click', function(){ 
    Cardtrans+=45;
    galaryContainer.style.transform = `rotatez(${Cardtrans}deg)`;
    j++
    let i=j;
    img90deg.forEach(e =>{
        e.style=`--j:${i}`
        i++
    })
})
nextCard.addEventListener('click', function(){       
    Cardtrans-=45;
    galaryContainer.style.transform = `rotatez(${Cardtrans}deg)`;
    j--
    let i=j;
    img90deg.forEach(e =>{
        e.style=`--j:${i}`
        i++
    })
})











let nav = document.querySelector('nav')
window.addEventListener('scroll', function(){

   
    if (scrollY>=780){    
        nav.classList.add('blac')
    }     
    else{
        nav.classList.remove('blac')
    }

    
  })