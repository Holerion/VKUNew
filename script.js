








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























let CardtransP = 0;
let cardP = document.querySelectorAll(' .Products .card')
let img90degP = document.querySelectorAll(' .Products .giroscop')
let galaryContainerP = document.querySelector(' .Products .galary')
let jP=0;

galaryContainerP.addEventListener('click', function(){       
    CardtransP-=36;
    galaryContainerP.style.transform = `rotatez(${CardtransP}deg)`;
    jP--
    let i=jP;
    img90degP.forEach(e =>{
        e.style=`--j:${i}`
        i++
    })
})
















let nextCard = document.querySelector('#next-card')
let nextCard2 = document.querySelector('#next-card2')
let prevCard = document.querySelector('#prev-card')
let Cardtrans = 0;
let card = document.querySelectorAll(' .sheben .card')
let img90deg = document.querySelectorAll(' .sheben .giroscop')
let galaryContainer = document.querySelector(' .sheben .galary')
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