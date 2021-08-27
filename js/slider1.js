// ! СЛАЙДЕР

/* Индекс слайда по умолчанию */
var slideIndex = 1;
show(slideIndex);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plus() {
    show(slideIndex += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minus() {
    show(slideIndex -= 1);  
}
/* Устанавливает текущий слайд */
function current(n) {
    show(slideIndex = n);
}
/* Основная функция слайдера */
function show(n) {
    var i;
    var slides = document.getElementsByClassName("item1");
    var dots = document.getElementsByClassName("slider-dots_item1");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

// 2 СЛАЙДЕР


/* Индекс слайда по умолчанию */
var slideIndex1 = 1;
showSlides(slideIndex1);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex1 += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex1 -= 1);  
}
/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex1 = n);
}
/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1 - 1].style.display = "block";
    dots[slideIndex1 - 1].className += " active";
}


/* Индекс слайда по умолчанию */
var slideIndex2 = 1;
showSlides1(slideIndex2);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide1() {
    showSlides1(slideIndex2 += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide1() {
    showSlides1(slideIndex2 -= 1);  
}
/* Устанавливает текущий слайд */
function currentSlide1(n) {
    showSlides1(slideIndex2 = n);
}
/* Основная функция слайдера */
function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("item2");
    var dots = document.getElementsByClassName("slider-dots_item2");
    if (n > slides.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active1";
}



/* Индекс слайда по умолчанию */
var slideIndex3 = 1;
showSlides2(slideIndex3);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide2() {
    showSlides2(slideIndex3 += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide2() {
    showSlides2(slideIndex3 -= 1);  
}
/* Устанавливает текущий слайд */
function currentSlide2(n) {
    showSlides2(slideIndex3 = n);
}
/* Основная функция слайдера */
function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("item3");
    var dots = document.getElementsByClassName("slider-dots_item3");
    if (n > slides.length) {
        slideIndex3 = 1
    }
    if (n < 1) {
        slideIndex3 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3 - 1].style.display = "block";
    dots[slideIndex3 - 1].className += " active";
}



function myFunction(imgs) {
var expandImg = document.getElementById("expandedImg");
expandImg.src = imgs.src;
expandImg.parentElement.style.display = "block";
}
function myFunction1(imgs) {
var expandImg1 = document.getElementById("expandedImg1");
expandImg1.src = imgs.src;
expandImg1.parentElement.style.display = "block";
}
function myFunction2(imgs) {
var expandImg2 = document.getElementById("expandedImg2");
expandImg2.src = imgs.src;
expandImg2.parentElement.style.display = "block";
}
function myFunction3(imgs) {
var expandImg3 = document.getElementById("expandedImg3");
expandImg3.src = imgs.src;
expandImg3.parentElement.style.display = "block";
}
function myFunction4(imgs) {
var expandImg4 = document.getElementById("expandedImg4");
expandImg4.src = imgs.src;
expandImg4.parentElement.style.display = "block";
}
function myFunction5(imgs) {
var expandImg5 = document.getElementById("expandedImg5");
expandImg5.src = imgs.src;
expandImg5.parentElement.style.display = "block";
}





function myFunction01(imgs) {
var expandImg01 = document.getElementById("expandedImg01");
expandImg01.src = imgs.src;
expandImg01.parentElement.style.display = "block";
}
function myFunction02(imgs) {
var expandImg02 = document.getElementById("expandedImg02");
expandImg02.src = imgs.src;
expandImg02.parentElement.style.display = "block";
}
function myFunction03(imgs) {
var expandImg03 = document.getElementById("expandedImg03");
expandImg03.src = imgs.src;
expandImg03.parentElement.style.display = "block";
}
function myFunction04(imgs) {
var expandImg04 = document.getElementById("expandedImg04");
expandImg04.src = imgs.src;
expandImg04.parentElement.style.display = "block";
}
function myFunction05(imgs) {
var expandImg05 = document.getElementById("expandedImg05");
expandImg05.src = imgs.src;
expandImg05.parentElement.style.display = "block";
}
function myFunction06(imgs) {
var expandImg06 = document.getElementById("expandedImg06");
expandImg06.src = imgs.src;
expandImg06.parentElement.style.display = "block";
}
function myFunction07(imgs) {
var expandImg07 = document.getElementById("expandedImg07");
expandImg07.src = imgs.src;
expandImg07.parentElement.style.display = "block";
}
function myFunction08(imgs) {
var expandImg08 = document.getElementById("expandedImg08");
expandImg08.src = imgs.src;
expandImg08.parentElement.style.display = "block";
}
function myFunction09(imgs) {
var expandImg09 = document.getElementById("expandedImg09");
expandImg09.src = imgs.src;
expandImg09.parentElement.style.display = "block";
}
function myFunction10(imgs) {
var expandImg10 = document.getElementById("expandedImg10");
expandImg10.src = imgs.src;
expandImg10.parentElement.style.display = "block";
}
function myFunction11(imgs) {
var expandImg11 = document.getElementById("expandedImg11");
expandImg11.src = imgs.src;
expandImg11.parentElement.style.display = "block";
}
function myFunction12(imgs) {
var expandImg12 = document.getElementById("expandedImg12");
expandImg12.src = imgs.src;
expandImg12.parentElement.style.display = "block";
}
function myFunction13(imgs) {
var expandImg13 = document.getElementById("expandedImg13");
expandImg13.src = imgs.src;
expandImg13.parentElement.style.display = "block";
}
function myFunction14(imgs) {
var expandImg14 = document.getElementById("expandedImg14");
expandImg14.src = imgs.src;
expandImg14.parentElement.style.display = "block";
}
function myFunction15(imgs) {
var expandImg15 = document.getElementById("expandedImg15");
expandImg15.src = imgs.src;
expandImg15.parentElement.style.display = "block";
}
function myFunction16(imgs) {
var expandImg16 = document.getElementById("expandedImg16");
expandImg16.src = imgs.src;
expandImg16.parentElement.style.display = "block";
}
function myFunction17(imgs) {
var expandImg17 = document.getElementById("expandedImg17");
expandImg17.src = imgs.src;
expandImg17.parentElement.style.display = "block";
}
function myFunction18(imgs) {
var expandImg18 = document.getElementById("expandedImg18");
expandImg18.src = imgs.src;
expandImg18.parentElement.style.display = "block";
}




function myFunction001(imgs) {
var expandImg001 = document.getElementById("expandedImg-01");
expandImg001.src = imgs.src;
expandImg001.parentElement.style.display = "block";
}
function myFunction002(imgs) {
var expandImg002 = document.getElementById("expandedImg-02");
expandImg002.src = imgs.src;
expandImg002.parentElement.style.display = "block";
}
function myFunction003(imgs) {
var expandImg003 = document.getElementById("expandedImg-03");
expandImg003.src = imgs.src;
expandImg003.parentElement.style.display = "block";
}
function myFunction004(imgs) {
var expandImg004 = document.getElementById("expandedImg-04");
expandImg004.src = imgs.src;
expandImg004.parentElement.style.display = "block";
}
function myFunction005(imgs) {
var expandImg005 = document.getElementById("expandedImg-05");
expandImg005.src = imgs.src;
expandImg005.parentElement.style.display = "block";
}
function myFunction006(imgs) {
var expandImg006 = document.getElementById("expandedImg-06");
expandImg006.src = imgs.src;
expandImg006.parentElement.style.display = "block";
}
function myFunction007(imgs) {
var expandImg007 = document.getElementById("expandedImg-07");
expandImg007.src = imgs.src;
expandImg007.parentElement.style.display = "block";
}
function myFunction008(imgs) {
var expandImg008 = document.getElementById("expandedImg-08");
expandImg008.src = imgs.src;
expandImg008.parentElement.style.display = "block";
}
function myFunction009(imgs) {
var expandImg009 = document.getElementById("expandedImg-09");
expandImg009.src = imgs.src;
expandImg009.parentElement.style.display = "block";
}
function myFunction010(imgs) {
var expandImg010 = document.getElementById("expandedImg-10");
expandImg010.src = imgs.src;
expandImg010.parentElement.style.display = "block";
}
function myFunction011(imgs) {
var expandImg011 = document.getElementById("expandedImg-11");
expandImg011.src = imgs.src;
expandImg011.parentElement.style.display = "block";
}
function myFunction012(imgs) {
var expandImg012 = document.getElementById("expandedImg-12");
expandImg012.src = imgs.src;
expandImg012.parentElement.style.display = "block";
}
function myFunction013(imgs) {
var expandImg013 = document.getElementById("expandedImg-13");
expandImg013.src = imgs.src;
expandImg013.parentElement.style.display = "block";
}
function myFunction014(imgs) {
var expandImg014 = document.getElementById("expandedImg-14");
expandImg014.src = imgs.src;
expandImg014.parentElement.style.display = "block";
}
function myFunction015(imgs) {
var expandImg015 = document.getElementById("expandedImg-15");
expandImg015.src = imgs.src;
expandImg015.parentElement.style.display = "block";
}
function myFunction016(imgs) {
var expandImg016 = document.getElementById("expandedImg-16");
expandImg016.src = imgs.src;
expandImg016.parentElement.style.display = "block";
}
function myFunction017(imgs) {
var expandImg017 = document.getElementById("expandedImg-17");
expandImg017.src = imgs.src;
expandImg017.parentElement.style.display = "block";
}
function myFunction018(imgs) {
var expandImg018 = document.getElementById("expandedImg-18");
expandImg018.src = imgs.src;
expandImg018.parentElement.style.display = "block";
}

let popupquality = document.querySelectorAll('.video-quality');
let popupvideo1 = document.querySelectorAll('.video1');
let popupvideo2 = document.querySelectorAll('.video2');
let popupvideo3 = document.querySelectorAll('.video3');
let popupvideo4 = document.querySelectorAll('.video4');
let popupvideo5 = document.querySelectorAll('.video5');
let videoconsultation = document.querySelectorAll('.video-consultation');

let video = document.querySelector('.video-content-quality');
let content1 = document.querySelector('.video-content1');
let content2 = document.querySelector('.video-content2');
let content3 = document.querySelector('.video-content3');
let content4 = document.querySelector('.video-content4');
let content5 = document.querySelector('.video-content5');
let consultation = document.querySelector('.video-content-consultation');


function init() {

popupquality.forEach(element => {
    element.addEventListener('click', (event) => {
    video.innerHTML = "<iframe src='https://www.youtube.com/embed/NxxQxwqAttU?autoplay=0' scrolling='no' style='width: 100%; height: 450px;' allow='autoplay'></iframe>";
    });
});

popupvideo1.forEach(element => {
    element.addEventListener('click', (event) => {
    content1.innerHTML = '<iframe width="100%" height="450px" src="https://www.youtube.com/embed/TWAgV_JfN0I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    });
});

popupvideo2.forEach(element => {
    element.addEventListener('click', (event) => {
    content2.innerHTML = '<iframe width="100%" height="450px" src="https://www.youtube.com/embed/N2W_mto0yE0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    });
});

popupvideo3.forEach(element => {
    element.addEventListener('click', (event) => {
    content3.innerHTML = '<iframe width="100%" height="450px" src="https://www.youtube.com/embed/tCECsNRNqd0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    });
});

popupvideo4.forEach(element => {
    element.addEventListener('click', (event) => {
    content4.innerHTML = '<iframe width="100%" height="450px" src="https://www.youtube.com/embed/K9h2ygT3s5Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    });
});

popupvideo5.forEach(element => {
    element.addEventListener('click', (event) => {
    content5.innerHTML = '<iframe width="100%" height="450px" src="https://www.youtube.com/embed/K9h2ygT3s5Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    });
});

videoconsultation.forEach(element => {
    element.addEventListener('click', (event) => {
    consultation.innerHTML = '<iframe width="100%" height="450px" src="https://www.youtube.com/embed/aCWpShgw_Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    });
});

}


init();