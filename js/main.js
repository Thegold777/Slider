let images = [{
       url:'imgs/rostov.png'
}, {
        url:'imgs/sochi.png'
    }, {
    url:'imgs/rostov 2.png'
}
]
let info = [{
    city:'Rostov-on-Don\n' +
        'LCD admiral',
    area:'81 m2',
    time:'3.5 months'
},{
    city:'Sochi\n' +
        'Thieves',
    area:'105 m2',
    time:'4 months'
},{
    city:'Rostov-on-Don\n' +
        'Patriotic',
    area:'93 m2',
    time:'3 months'
}
]
function ChangeInfo1(){
    document.querySelector('.main__text_city').innerText= info[0].city
    document.querySelector('.main__text_area').innerText= info[0].area
    document.querySelector('.main__text_time').innerText= info[0].time
}
function ChangeInfo2(){
    document.querySelector('.main__text_city').innerText= info[1].city
    document.querySelector('.main__text_area').innerText= info[1].area
    document.querySelector('.main__text_time').innerText= info[1].time
}
function ChangeInfo3(){
    document.querySelector('.main__text_city').innerText= info[2].city
    document.querySelector('.main__text_area').innerText= info[2].area
    document.querySelector('.main__text_time').innerText= info[2].time
}
 function ChangeInfo() {
    if (i === 0) {
        ChangeInfo1()
    }
    else  if (i === 1) {
        ChangeInfo2()
    }
    else  if (i === 2) {
        ChangeInfo3()
    }
}
const rightArrow = document.querySelector('.main__slider_arrow_right');
const leftArrow = document.querySelector('.main__slider_arrow_left');
let i = 0;
async function arrowRight() {
    i = i + 1
    if (i === 3) {
        i = 0
        ChangeInfo1()
        textActive1()
        document.querySelector('.main__img').src = images[i].url;
    }
    else {
        textActive()
        ChangeInfo()
        // document.querySelector('.main__names_text_2').style.color = '#E3B873'
        document.querySelector('.main__img').src = images[i].url;
    }
}
rightArrow.addEventListener('click',arrowRight)
rightArrow.addEventListener('click',ChangeInfo)

async function arrowLeft() {
    if (i === 0) {
        ChangeInfo3()
        i = 2;
        textActive()
        document.querySelector('.main__img').src = images[i].url;
    }
    else   {
        i = i - 1;
        ChangeInfo()
        textActive()
        document.querySelector('.main__img').src = images[i].url;
    }

}
leftArrow.addEventListener('click',arrowLeft)
let c = 0;
const text1 = document.querySelector('.main__names_text_1');
const text2 = document.querySelector('.main__names_text_2');
const text3 = document.querySelector('.main__names_text_3');
function textActive() {
    if (i === 0) {
        textActive1()
    }
    if (i === 1) {
        textActive2()
        dotClick2()
    }
    if (i === 2) {
        textActive3()
        dotClick3()
    }
}
function textActive1(){
     if ( document.querySelector('.main__names_text_1').style.color !== '#E3B873') {
         i = 0
         ChangeInfo()
         document.querySelector('.main__img').src = images[i].url;
         document.querySelector('.main__names_text_1').style.color = '#E3B873'
         document.querySelector('.main__names_text_1').style.textDecoration = 'underline'
         document.querySelector('.main__names_text_2').style.color = '#FFFFFF4D'
         document.querySelector('.main__names_text_2').style.textDecoration = 'none'
         document.querySelector('.main__names_text_3').style.color = '#FFFFFF4D'
         document.querySelector('.main__names_text_3').style.textDecoration = 'none'
         dotClick1()
     }
}
function textActive2() {
    if (document.querySelector('.main__names_text_2').style.color !== '#E3B873') {
        i = 1
        ChangeInfo()
        document.querySelector('.main__img').src = images[i].url;
        document.querySelector('.main__names_text_2').style.color = '#E3B873'
        document.querySelector('.main__names_text_2').style.textDecoration = 'underline'
        document.querySelector('.main__names_text_1').style.color = '#FFFFFF4D'
        document.querySelector('.main__names_text_1').style.textDecoration = 'none'
        document.querySelector('.main__names_text_3').style.color = '#FFFFFF4D'
        document.querySelector('.main__names_text_3').style.textDecoration = 'none'
        dotClick2()
    }
}
function textActive3(){
    if ( document.querySelector('.main__names_text_3').style.color !== '#E3B873') {
        i = 2
        ChangeInfo()
        document.querySelector('.main__img').src = images[i].url;
        document.querySelector('.main__names_text_3').style.color = '#E3B873'
        document.querySelector('.main__names_text_3').style.textDecoration = 'underline'
        document.querySelector('.main__names_text_1').style.color = '#FFFFFF4D'
        document.querySelector('.main__names_text_1').style.textDecoration = 'none'
        document.querySelector('.main__names_text_2').style.color = '#FFFFFF4D'
        document.querySelector('.main__names_text_2').style.textDecoration = 'none'
        dotClick3()
    }
}
text1.addEventListener('click',textActive1)
text2.addEventListener('click',textActive2)
text3.addEventListener('click',textActive3)

const dot1 = document.querySelector('.main__slider_dots_1')
const dot2 = document.querySelector('.main__slider_dots_2')
const dot3 = document.querySelector('.main__slider_dots_3')
function dotClick1() {
    i = 0
    dot1.style.background ='white'
    dot2.style.background ='#FFFFFF4D'
    dot3.style.background ='#FFFFFF4D'
    textActive1()
}
function dotClick2() {
    i = 1
    dot2.style.background ='white'
    dot1.style.background ='#FFFFFF4D'
    dot3.style.background ='#FFFFFF4D'
    textActive2()
}
function dotClick3() {
    i = 2
    dot3.style.background ='white'
    dot1.style.background ='#FFFFFF4D'
    dot2.style.background ='#FFFFFF4D'
    textActive3()
    dot1.add('hover-style')
    dot2.add('hover-style')
}
dot1.addEventListener('click',dotClick1)
dot2.addEventListener('click',dotClick2)
dot3.addEventListener('click',dotClick3)
