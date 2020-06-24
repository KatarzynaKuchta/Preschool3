
import './../sass/style.scss'; // adres do głównego pliku SASS

// menu

const hamburger = document.querySelector('.hamburger');
const navList2 = document.querySelector('.navList2');
const hamburgerStrap = document.querySelectorAll('.hamburgerStrap')

hamburger.addEventListener('click', function () {
    if (navList2.classList.contains("click")) {
        navList2.classList.toggle("click");
        navList2.classList.add('showList');
        navList2.style.display = 'block';
        for (let i = 0; i < hamburgerStrap.length; i++) {
            hamburgerStrap[i].classList.add('showCross');
        }

    }
    else {
        navList2.classList.add("click");
        navList2.style.display = 'none';
        navList2.classList.remove('showList');
        for (let i = 0; i < hamburgerStrap.length; i++) {
            hamburgerStrap[i].classList.remove('showCross');
        }

    }
})

// counting Part

const form1 = document.querySelector('.form1');
const extraHours = form1.querySelector('.extraHoursInput')
const balletOption1 = form1.querySelector('#balletOption1');
const balletOption2 = form1.querySelector('#balletOption2');
const footballOption1 = form1.querySelector('#footballOption1');
const footballOption2 = form1.querySelector('#footballOption2');
const pianoOption1 = form1.querySelector('#pianoOption1');
const pianoOption2 = form1.querySelector('#pianoOption2');
const countingPart = document.querySelector('.countingPart');

const extraFee = document.querySelector('.extraFee');
const balletFee = document.querySelector('.balletFee');
const footballFee = document.querySelector('.footballFee');
const pianoFee = document.querySelector('.pianoFee');
const totalFee = document.querySelector('.totalFee');


const priceForHours = extraFee.querySelector('div');
const priceForBallet = balletFee.querySelector('div');
const priceForFootball = footballFee.querySelector('div');
const priceForPiano = pianoFee.querySelector('div');
const totalPrice = totalFee.querySelector('div')

const countingButton = document.querySelector('.countingButton')
const countingButton2 = document.querySelector('.countingButton2')

// counting

extraHours.addEventListener('blur', function() {
    if(extraHours.value <0 ) {
        extraHours.value = extraHours.value *(-1)
    }
    if(!Number.isInteger(extraHours.value)){
        extraHours.value = Math.ceil(extraHours.value)
    }
    if(isNaN(extraHours.value)) {
        extraHours.value = 0
    }
})


countingButton.addEventListener('click', function () {
    countingPart.style.display = 'flex';
    priceForHours.innerText = extraHours.value * 10 + "zł"

    // price for ballet lessons
    if (balletOption1.checked === true) {
        priceForBallet.innerText = "40zł"
    }
    else if (balletOption2.checked === true) {
        priceForBallet.innerText = "70zł"
    }
    else {
        priceForBallet.innerText = "0zł"
    }
    // price for football lessons
    if (footballOption1.checked === true) {
        priceForFootball.innerText = "40 zł"
    }
    else if (footballOption2.checked === true) {
        priceForFootball.innerText = "70zł"
    }
    else {
        priceForFootball.innerText = "0zł"
    }
    // price for piano lessons
    if (pianoOption1.checked === true) {
        priceForPiano.innerText = "40zł"
    }
    else if (pianoOption2.checked === true) {
        priceForPiano.innerText = "70zł"
    }
    else {
        priceForPiano.innerText = "0zł"
    }
    // total price
    totalPrice.innerText = parseFloat(priceForHours.innerText) + parseFloat(priceForBallet.innerText) + parseFloat(priceForFootball.innerText) + parseFloat(priceForPiano.innerText) + 700 + 'zł'
})

countingButton2.addEventListener('click', function () {
    priceForHours.innerText = extraHours.value * 10 + "zł"


    // price for ballet lessons
    if (balletOption1.checked === true) {
        priceForBallet.innerText = "40zł"
    }
    else if (balletOption2.checked === true) {
        priceForBallet.innerText = "70zł"
    }
    else {
        priceForBallet.innerText = "0zł"
    }
    // price for football lessons
    if (footballOption1.checked === true) {
        priceForFootball.innerText = "40 zł"
    }
    else if (footballOption2.checked === true) {
        priceForFootball.innerText = "70zł"
    }
    else {
        priceForFootball.innerText = "0zł"
    }
    // price for piano lessons
    if (pianoOption1.checked === true) {
        priceForPiano.innerText = "40zł"
    }
    else if (pianoOption2.checked === true) {
        priceForPiano.innerText = "70zł"
    }
    else {
        priceForPiano.innerText = "0zł"
    }
    // total price
    totalPrice.innerText = parseFloat(priceForHours.innerText) + parseFloat(priceForBallet.innerText) + parseFloat(priceForFootball.innerText) + parseFloat(priceForPiano.innerText) + 700 + 'zł'
})


// Moving letters in logo

let tekst = "Magiczny  Las    ";
let logo = document.querySelector('.logo')

let i = 0;
let idInteval = setInterval(function () {
    if (i < tekst.length) {
        i++;
    }
    else {
        i = 0;
        if (i < tekst.length) {
            i++;
        }
    }
    logo.innerText = tekst.substring(0, i)
}, 170)


// Gallery

const prevPicture = document.querySelector('#prevPicture');
const nextPicture = document.querySelector('#nextPicture');
const photo = document.querySelectorAll('.section5 li');

let index = 0;
photo[0].classList.add('visible');

function next() {
    if (index < photo.length - 1) {
        photo[index].classList.remove('visible');
        index++;
        photo[index].classList.add('visible', 'fade');
    }
    else {
        photo[index].classList.remove('visible');
        index = 0;
        photo[index].classList.add('visible', 'fade');
    };

}

nextPicture.addEventListener('click', function () {
    next();
    resetTimer()

})

prevPicture.addEventListener('click', function () {
    if (index == 0) {
        photo[index].classList.remove('visible');
        index = 5;
        photo[index].classList.add('visible', 'fade')
    }

    else {
        photo[index].classList.remove('visible');
        index--;
        photo[index].classList.add('visible', 'fade')
    };
    resetTimer()
})


let timer = setInterval(function () {
    next()
}, 3500)


function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
        next()
    }, 3500)
}

// Validation

const contactForm = document.querySelector('.contactForm');
const formData = document.querySelectorAll('.formData');

contactForm.setAttribute('novalidate', true);

contactForm.addEventListener('submit', function () {
    event.preventDefault();

    formData.forEach(elem => {

        let errorField = document.createElement('div');
        errorField.classList.add('errorField');

        if (!elem.checkValidity() && elem.nextElementSibling === null) {
            elem.parentElement.appendChild(errorField);
            let attr = elem.getAttribute('data-error');
            if (elem.value === "") {
                elem.nextElementSibling.textContent = "Uzupełnij pole";
                elem.style.boxShadow = '0px 1px 4px #ec407a';
            } else {
                elem.nextElementSibling.textContent = attr;
                elem.style.boxShadow = '0px 1px 4px #ec407a';
            }
        } else if (!elem.checkValidity() && elem.nextElementSibling !== null) {
            let attr = elem.getAttribute('data-error');
            if (elem.value === "") {
                elem.nextElementSibling.textContent = "Uzupełnij pole";
                elem.style.boxShadow = '0px 1px 4px #ec407a'
                errorField.classList.add('errorField');;
            } else {
                elem.nextElementSibling.textContent = attr;
                elem.style.boxShadow = '0px 1px 4px #ec407a';
                
            }
        } else if (elem.checkValidity() && elem.nextElementSibling !== null) {
            elem.nextElementSibling.remove();
            elem.style.backgroundColor = 'white';
          
        }

    })

    let formDataSiblngs = [...formData].map(elem => elem.nextElementSibling);

    function isNotNull(item) {
        return item != null
    }
    let filtered = formDataSiblngs.filter(isNotNull);

    if (filtered.length === 0) {
        this.submit()
    }
});


formData.forEach(elem => {
    let errorField = document.createElement('div');
    errorField.classList.add('errorField');
    let attr = elem.getAttribute('data-error');
    let phoneNumber = document.querySelector('.inputPhone');

    // event focus
    elem.addEventListener('focus', function () {
        elem.style.boxShadow = '#2196F3 0px 1px 4px';
    })

    // event blur
    elem.addEventListener('blur', function () {
        phoneNumber.value = phoneNumber.value.replace(/-| |\+/g, '');
        if (!this.checkValidity() && this.nextElementSibling !== null && elem.value === "") {
            elem.nextElementSibling.textContent = 'Uzupełnij pole';
            elem.style.boxShadow = '0px 1px 4px #ec407a';
         
        }

        else if (!this.checkValidity() && this.nextElementSibling !== null && elem.value !== "") {
            elem.nextElementSibling.textContent = attr;
            elem.style.boxShadow = '0px 1px 4px #ec407a';
           
        }

        else if (!this.checkValidity() && this.nextElementSibling === null && elem.value === "") {
            elem.parentElement.appendChild(errorField);
            elem.nextElementSibling.textContent = 'Uzupełnij pole';
            elem.style.boxShadow = '0px 1px 4px #ec407a';
          
            
            
        }

        else if (!this.checkValidity() && this.nextElementSibling === null && elem.value !== "") {
            elem.parentElement.appendChild(errorField);
            elem.nextElementSibling.textContent = attr;
            elem.style.boxShadow = '0px 1px 4px #ec407a';
            elem.style.background = 'white';
           
            
        }

        else if (this.checkValidity() & this.nextElementSibling != null) {
            elem.style.boxShadow = '0px 1px 5px #8BC34A';
            elem.nextElementSibling.remove()
            
          
        }
        else {
            elem.style.boxShadow = '0px 1px 5px #8BC34A';
        
        }

    })

    // event input

    elem.addEventListener('input', function () {
        if (elem.value === "" && this.nextElementSibling == null) {
            elem.parentElement.appendChild(errorField);
            elem.nextElementSibling.textContent = "Uzupełnij pole";
            elem.style.boxShadow = '0px 1px 4px #ec407a';
        }
        else if (!this.checkValidity() && elem.value === "" && this.nextElementSibling !== null) {
            elem.nextElementSibling.textContent = "Uzupełnij pole";
            elem.style.boxShadow = '0px 1px 4px #ec407a';

        }

        else if (!this.checkValidity() && elem.value !== "" && this.nextElementSibling === null) {
            elem.style.boxShadow = '#2196F3 0px 1px 4px';
            
        }

        else if (this.checkValidity() && this.nextElementSibling !== null) {
            elem.nextElementSibling.remove();
            elem.style.boxShadow = ' 0px 1px 5px #8BC34A';
            elem.style.background = 'white';
            errorField.classList.add('errorField');
           
        }

        else if (this.checkValidity() && this.nextElementSibling === null) {
            elem.style.boxShadow = '0px 1px 5px #8BC34A'; 
            

        }
    })
})

// Appearing elements

let animation_elements = document.querySelectorAll('.photoBox');

function check_if_in_view() {
    const window_height = window.innerHeight;
    const window_top_position = window.pageYOffset;
    const window_bottom_position = (window_top_position + window_height);

    animation_elements.forEach(function (element) {
        const element_height = element.offsetHeight;
        const element_top_position = element.offsetTop;
        const element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            element.classList.add('in-view');


        } else {
            element.classList.remove('in-view');
        }
    })
}

window.onscroll = function () {
    check_if_in_view();

}

window.onresize = check_if_in_view;

window.onload = function () {
    check_if_in_view()
}


// TurningButtons

let cube = document.querySelectorAll('#cube');
let parentOfCube = document.querySelectorAll('.perspective')
let moreInfoContainer = document.querySelectorAll('.moreInfoContainer');
let closeMoreInfo = document.querySelectorAll('.closeMoreInfo');
let circle = document.querySelectorAll('circle')

for (let i = 0; i < parentOfCube.length; i++) {
    parentOfCube[i].addEventListener('mouseover', function () {
        cube[i].classList.remove('mouseLeave');
        cube[i].classList.add('mouseOver')
    })
}

for (let i = 0; i < parentOfCube.length; i++) {
    parentOfCube[i].addEventListener('mouseout', function () {
        cube[i].classList.remove('mouseOver')
        cube[i].classList.add('mouseLeave')
    })
}

for (let i = 0; i < parentOfCube.length; i++) {
    parentOfCube[i].addEventListener('click', function () {
        cube[i].classList.add('mouseClicked');
        moreInfoContainer[i].style.display = "block";
        cube[i].classList.remove('mouseLeave');

    })
}

for (let i = 0; i < closeMoreInfo.length; i++) {
    closeMoreInfo[i].addEventListener('click', function () {
    
        new Promise((resolve,reject) => {
            circle[i].classList.add('circleDrawing');
            resolve()
        })
        .then(()=>{
            setTimeout(function() {
                moreInfoContainer[i].style.display = "none",
                cube[i].classList.remove('mouseClicked'),
                circle[i].classList.remove('circleDrawing');
            }, 500)
            
        })

    })
}

// Scroll to top Button

let scrollBtn = document.querySelector('.upArrow');
let scrollBtnContainer = document.querySelector('.backToTopBtn')

scrollBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior:'smooth'
    })
})

function showBackToTopBtn() {
    if (document.documentElement.scrollTop >= 50) {
        scrollBtnContainer.classList.add('showButton2');
        scrollBtnContainer.classList.remove('hideButton2');
        scrollBtn.classList.add('showButton');
        scrollBtn.classList.remove('hideButton')
    }
    else {
        scrollBtn.classList.add('hideButton');
        scrollBtnContainer.classList.add('hideButton2')
    }
}

window.onscroll = function(){
    check_if_in_view();   //calling function from previous part: 'Appearing elements' 
    showBackToTopBtn()
}