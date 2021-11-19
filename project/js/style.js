const modlout = document.getElementById('modal-out');
const closemod = document.getElementById('closemod');
const closeget = document.getElementById('closeget');
const closeCOntact = document.getElementById('closeContact');
const closePortfolio = document.getElementById('closePortfolio');
const closeCross = document.getElementsByClassName('close-cross');
const clicksec = document.querySelectorAll('.clicksec');
const openSec = document.querySelectorAll('.openSec');

for(let i=0; i<clicksec.length; i++){
    clicksec[i].addEventListener('click',function(){
        openSec[i].classList.remove('closItem');
        openSec[i].classList.add('shoanim');
    })
}

for ( let i=0; i<closeCross.length ; i++){
    let clsall = closeCross[i];
    console.log(clsall);
    clsall.addEventListener('click', function(){
         closemainall ()
     })
 }
 function closemainall (){
    openSec[0].classList.remove('shoanim');
    openSec[0].classList.add('closItem');
    openSec[1].classList.remove('shoanim');
    openSec[1].classList.add('closItem');
    openSec[2].classList.remove('shoanim');
    openSec[2].classList.add('closItem');
 }
// text moov
const aboutover = document.getElementById('aboutover');
aboutover.addEventListener('mouse',function(){
    aboutover.classList.add('shoanim');
})
let experienceBtn = document.getElementById('experienceBtn');
let educationBtn = document.getElementById('educationBtn');
let skillsBtn = document.getElementById('skillsBtn');
let experiance = document.getElementById('experiance');
let education = document.getElementById('education');
let skills = document.getElementById('skills');

experienceBtn.addEventListener('click',showFun1);
educationBtn.addEventListener('click',showFun2);
skillsBtn.addEventListener('click',showFun3);
education.addEventListener('click',showFun2);
experiance.addEventListener('click',showFun1);
skills.addEventListener('click',showFun3);
firstshowFun ();

function showFun1 (){
    firstshowFun ()
}
function firstshowFun (){
    educationFun ()
    skillsFun ()
    experiance.classList.add('active');
    education.classList.add('notActive');
    skills.classList.add('notActive2');
}
function showFun2 (){
    experianceFun ()
    skillsFun ()
    experiance.classList.add('notActive2');
    education.classList.add('active');
    skills.classList.add('notActive');
}
function showFun3 (){
    experianceFun ()
    educationFun ()
    experiance.classList.add('notActive');
    education.classList.add('notActive2');
    skills.classList.add('active');
}
function experianceFun (){
    experiance.classList.remove('active');
    education.classList.remove('notActive');
    skills.classList.remove('notActive2'); 
}

function educationFun (){
    experiance.classList.remove('notActive2');
    education.classList.remove('active');
    skills.classList.remove('notActive');
}
function skillsFun (){
    experiance.classList.remove('notActive');
    education.classList.remove('notActive2');
    skills.classList.remove('active');
}
// title chnage

// let personText = document.getElementById('title-text');
// let personTitle = document.getElementsByClassName('title');
// let titleLength = personTitle.length;
// let currentValue = 1;
// let i =1
// let textArray = ['web designer', 'Developer', 'blogger','traveler'];
// function changeTitle (){
    
//     window.setTimeout(function(){
//         currentValue++
//         if(currentValue>3){
//             currentValue=0;
//         }
//         console.log(currentValue)
//         personTitle[0].textContent = textArray[currentValue]; 
//         if(currentValue%2 == 0){
//             personTitle[0].style.color= '#FFB400'
//         }else{
//             personTitle[0].style.color= 'white'

//         }
         
//         changeTitle();

// },3000)
// }
let personText = document.getElementsByClassName('title');
let a = 0;
function changeTitle (){
    personText[a].classList.add('title-open')
    personText[a].classList.remove('title-closed')
    window.setTimeout(function(){
        personText[a].classList.remove('title-open')
        personText[a].classList.add('title-closed')
        if(a < (personText.length-1)){
            a++
        }else{
            a = 0
        }
        changeTitle();
},3000)
}
let imgcout = 0;
function imgFun(){
window.setTimeout(function (){
    if(imgcout == 0){
        document.getElementById('mainimg').src="images/main3.jpg"
        imgcout = 1;
    }else{
        document.getElementById('mainimg').src="images/main2-01.jpeg"
        imgcout = 0;
    }  
    imgFun();
},9200)
}
// portfolio sub sec
let portfolioMainSec = document.getElementById('portfolio-main-sec');
let closePortfolioSubcls = document.getElementsByClassName('closePortfolioSubcls');
const prtSub = document.querySelectorAll('.prtSub');
const prtSubShow = document.querySelectorAll('.prtSubShow')

for (let p = 0; p<prtSub.length; p++){
    prtSub[p].addEventListener('click', function(){
        prtSubShow[p].classList.remove('hidden')
        portfolioMainSec.classList.add('hidden')
    })

}
for ( let j=0; j<closePortfolioSubcls.length ; j++){
   let myElement = closePortfolioSubcls[j];
   myElement.addEventListener('click', function(){
        clsPortSUBFun ()
    })
}
 function clsPortSUBFun (){
    portfolioMainSec.classList.remove('hidden');
    prtSubShow[0].classList.add('hidden')
    prtSubShow[1].classList.add('hidden')
    prtSubShow[2].classList.add('hidden')
    prtSubShow[3].classList.add('hidden')
    prtSubShow[4].classList.add('hidden')
    prtSubShow[5].classList.add('hidden')
    prtSubShow[6].classList.add('hidden')
    prtSubShow[7].classList.add('hidden')
    prtSubShow[8].classList.add('hidden')
 }
//  counter
const counters =document.querySelectorAll('.counter')
        counters.forEach(counter => {

            counter.innerText ='0'

            const updateCounter = () => {
                const target = counter.getAttribute('data-target')
                console.log('target: '+target)
                const c = +counter.innerText
                const increment = target /10000
                if(c<target){
                    counter.innerText= `${Math.ceil(c + increment)}`
                   setTimeout(updateCounter,1)
                } else{
                    counter.innerText=target
                }
            }
            updateCounter()
        })