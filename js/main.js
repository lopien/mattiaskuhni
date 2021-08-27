var m = document.querySelector("main"),
    h = document.querySelector(".header"),
    f = document.querySelector(".sidebar"),
    hHeight;

function onScroll() {
  window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
    var y = window.pageYOffset;
    if (y > 100) {
    h.style.cssText = "margin-top: 0px;";
    } else{
      h.style.cssText = "margin-top: -102px;";
    }
  }
}

function Scroll() {
  window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
    var y = window.pageYOffset;
    if (y > 778) {
      f.style.cssText = "margin-left: 0px;";
    } else{
      f.style.cssText = "margin-left: -90px;";
    }
  }
}
function SidebarScroll() {
  var ele = document.querySelector(".popular"), // Do not use #
    eleStyle = window.getComputedStyle(ele);
    /* Below is the width of ele */
    var eleHeight = parseInt(eleStyle.height);
    


  let sidebargift =  document.querySelector('.sidebar-gift');
  let sidebarsquare =  document.querySelector('.sidebar-square');
  let sidebarcomments = document.querySelector('.sidebar-comments');
  let sidebartools = document.querySelector('.sidebar-tools');
  let sidebargem = document.querySelector('.sidebar-gem');
  let sidebarusers = document.querySelector('.sidebar-users');
  let sidebarfile = document.querySelector('.sidebar-file');
  let sidebarhome =  document.querySelector('.sidebar-home');
  window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
    // event.preventDefault();
    var y = window.pageYOffset;
    if ((y >= 778 - 92) && (y < 1414 - 92)) {
      sidebarhome.classList.add('sidebar-active');
    } else{
      sidebarhome.classList.remove('sidebar-active');
    }
    if ((y >= 1414 - 92) && (y < 2161 - 92)) {
      sidebargift.classList.add('sidebar-active');
    } else{
      sidebargift.classList.remove('sidebar-active');
    }
    if ((y >= 2161 - 92) && (y < 2161 - 92 + eleHeight)) {
      sidebarsquare.classList.add('sidebar-active');
    } else{
      sidebarsquare.classList.remove('sidebar-active');
    }
    if ((y >= 2161 - 92 + eleHeight) && (y < 2981 - 92 + eleHeight)) {
      sidebarcomments.classList.add('sidebar-active');
    } else{
      sidebarcomments.classList.remove('sidebar-active');
    }
    if ((y >= 2981 - 92 + eleHeight) && (y < 3762 - 150 + eleHeight)) {
      sidebartools.classList.add('sidebar-active');
    } else{
      sidebartools.classList.remove('sidebar-active');
    }
    if ((y >= 3762 - 150 + eleHeight) && (y < 4493 - 92 + eleHeight)) {
      sidebargem.classList.add('sidebar-active');
    } else{
      sidebargem.classList.remove('sidebar-active');
    }
    if ((y >= 4493 - 92 + eleHeight) && (y < 5367 - 92 + eleHeight)) {
      sidebarusers.classList.add('sidebar-active');
    } else{
      sidebarusers.classList.remove('sidebar-active');
    }
    if ((y >= 5367 - 92 + eleHeight) && (y < 6258 - 92 + eleHeight)) {
      sidebarfile.classList.add('sidebar-active');
    } else{
      sidebarfile.classList.remove('sidebar-active');
    }
  }
}


Scroll();
onScroll();
SidebarScroll();


// window.onload = function() {
//   // setTopPadding();
  
// };


// создаем переменную в которую положим кнопку меню
const padding1 = document.querySelector('.padding-1');
const padding2 = document.querySelector('.padding-2');
const padding3 = document.querySelector('.padding-3');

const imghand1 = document.querySelector('.img-hand1');
const imghand2 = document.querySelector('.img-hand2');
const imghand3 = document.querySelector('.img-hand3');

const imgassemblydark1 = document.querySelector('.img-assembly-dark1');
const imgassemblydark2 = document.querySelector('.img-assembly-dark2');
const imgassemblydark3 = document.querySelector('.img-assembly-dark3');

const assemblytext1 = document.querySelector('.assembly-text1');
const assemblytext2 = document.querySelector('.assembly-text2');
const assemblytext3 = document.querySelector('.assembly-text3');

const assembly1 = document.querySelector('.assembly1');
const assembly2 = document.querySelector('.assembly2');
const assembly3 = document.querySelector('.assembly3');

const assemblyactive = document.querySelector('.assembly-active');
const activeassembly = document.querySelector('.active-assembly');
const assemblytextactive = document.querySelector('.assembly-text-active');

const whitebtn1 = document.querySelector('.white-btn1');
const whitebtn2 = document.querySelector('.white-btn2');
const activebtn1 = document.querySelector('.active-btn1');
const activebtn2 = document.querySelector('.active-btn2');
const photos1 = document.querySelector('.photos1');
const photos2 = document.querySelector('.photos2');

const slider2 = document.querySelector('.slider2');
const slider3 = document.querySelector('.slider3');
const sliderdots2 = document.querySelector('.slider-dots2');
const sliderdots3 = document.querySelector('.slider-dots3');
const whitebtn1tel = document.querySelector('.white-btn1-tel');
const whitebtn2tel = document.querySelector('.white-btn2-tel');
const activebtn1tel = document.querySelector('.active-btn1-tel');
const activebtn2tel = document.querySelector('.active-btn2-tel');

const body = document.querySelector("body");

function init() {

  activebtn1tel.addEventListener('click', (event) => {
    event.preventDefault();
    if(body.style.width <= "768px"){
      activebtn1tel.style.display = "block";
      activebtn2tel.style.display = "none";
      whitebtn1tel.style.display = "none";
      whitebtn2tel.style.display = "block";
      slider2.style.display = "block";
      slider3.style.display = "none";
      sliderdots2.style.display = "block";
      sliderdots3.style.display = "none";
    }
    
  });
  activebtn2tel.addEventListener('click', (event) => {
    event.preventDefault();
    if(body.style.width <= "768px"){
    activebtn2tel.style.display = "block";
    activebtn1tel.style.display = "none";
    whitebtn2tel.style.display = "none";
    whitebtn1tel.style.display = "block";
    slider3.style.display = "block";
    slider2.style.display = "none";
    sliderdots3.style.display = "block";
    sliderdots2.style.display = "none";
    }
  });
  whitebtn1tel.addEventListener('click', (event) => {
    event.preventDefault();
    if(body.style.width <= "768px"){
    activebtn1tel.style.display = "block";
    activebtn2tel.style.display = "none";
    whitebtn1tel.style.display = "none";
    whitebtn2tel.style.display = "block";
    slider2.style.display = "block";
    slider3.style.display = "none";
    sliderdots2.style.display = "block";
    sliderdots3.style.display = "none";
    }
  });
  whitebtn2tel.addEventListener('click', (event) => {
    event.preventDefault();
    if(body.style.width <= "768px"){
    activebtn2tel.style.display = "block";
    activebtn1tel.style.display = "none";
    whitebtn2tel.style.display = "none";
    whitebtn1tel.style.display = "block";
    slider3.style.display = "block";
    slider2.style.display = "none";
    sliderdots3.style.display = "block";
    sliderdots2.style.display = "none";
    }
  });




  // //////////////

  activebtn1.addEventListener('click', (event) => {
    // event.preventDefault();
    activebtn1.style.display = "block";
    activebtn2.style.display = "none";
    whitebtn1.style.display = "none";
    whitebtn2.style.display = "block";
    photos1.style.display = "block";
    photos2.style.display = "none";
    
  });
  activebtn2.addEventListener('click', (event) => {
    // event.preventDefault();
    activebtn2.style.display = "block";
    activebtn1.style.display = "none";
    whitebtn2.style.display = "none";
    whitebtn1.style.display = "block";
    photos2.style.display = "block";
    photos1.style.display = "none";
  });
  whitebtn1.addEventListener('click', (event) => {
    // event.preventDefault();
    activebtn1.style.display = "block";
    activebtn2.style.display = "none";
    whitebtn1.style.display = "none";
    whitebtn2.style.display = "block";
    photos1.style.display = "block";
    photos2.style.display = "none";
  });
  whitebtn2.addEventListener('click', (event) => {
    // event.preventDefault();
    activebtn2.style.display = "block";
    activebtn1.style.display = "none";
    whitebtn2.style.display = "none";
    whitebtn1.style.display = "block";
    photos2.style.display = "block";
    photos1.style.display = "none";
  });

  padding1.addEventListener('click', (event) => {
    event.preventDefault();
    imgassemblydark1.classList.add('assembly-active');
    imgassemblydark2.classList.remove('assembly-active');
    imgassemblydark3.classList.remove('assembly-active');

    assemblytext1.classList.add('assembly-text-active');
    assemblytext2.classList.remove('assembly-text-active');
    assemblytext3.classList.remove('assembly-text-active');
    
    assembly1.classList.add('active-assembly');
    assembly2.classList.remove('active-assembly');
    assembly3.classList.remove('active-assembly');
    
    imghand1.style.display = "none";
    imghand2.style.display = "block";
    imghand3.style.display = "block";
  });
  padding2.addEventListener('click', (event) => {
    event.preventDefault();
    imgassemblydark1.classList.remove('assembly-active');
    imgassemblydark2.classList.add('assembly-active');
    imgassemblydark3.classList.remove('assembly-active');

    assemblytext1.classList.remove('assembly-text-active');
    assemblytext2.classList.add('assembly-text-active');
    assemblytext3.classList.remove('assembly-text-active');

    assembly1.classList.remove('active-assembly');
    assembly2.classList.add('active-assembly');
    assembly3.classList.remove('active-assembly');
    
    imghand1.style.display = "block";
    imghand2.style.display = "none";
    imghand3.style.display = "block";
  });
  padding3.addEventListener('click', (event) => {
    imgassemblydark1.classList.remove('assembly-active');
    imgassemblydark2.classList.remove('assembly-active');
    imgassemblydark3.classList.add('assembly-active');

    assemblytext1.classList.remove('assembly-text-active');
    assemblytext2.classList.remove('assembly-text-active');
    assemblytext3.classList.add('assembly-text-active');

    assembly1.classList.remove('active-assembly');
    assembly2.classList.remove('active-assembly');
    assembly3.classList.add('active-assembly');
    
    imghand1.style.display = "block";
    imghand2.style.display = "block";
    imghand3.style.display = "none";
  });
}

init();




