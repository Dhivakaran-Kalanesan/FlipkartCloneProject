







let img = document.getElementById("slimage");

let prebtn = document.querySelector(".pre");

let nxtbtn = document.querySelector(".nxt");




let images = ["banner/b1.webp","banner/b5.webp"] ;

let index_no = 0 ;

function load() {

    img.src = images[index_no] ;
}
load(index_no)


function nxt() {

if (index_no < images.length-1) {
    
    index_no += 1 ;
    load(index_no) ;
} else {

    index_no = 0 ;
    load(index_no);
    
}

}

function pre() {
    

    if (index_no > 0) {
    
        index_no -= 1 ;
        load(index_no) ;
    } else {
    
        index_no = images.length-1 ;
        load(index_no);
        
    }

}

setInterval(nxt , 3000) ;



let btns1 = document.getElementsByClassName("btns1") ;

let btns2 = document.getElementsByClassName("btns2") ;

let elecon = document.getElementById("eleproducts");
btns1[0].style.visibility="hidden";

function tnxt() {
    
    elecon.style.transform = "translateX(-600px)" ;
    elecon.style.transition ="0.5s";
    btns2[0].style.visibility="hidden";
    btns1[0].style.visibility="visible";

}
function tpre() {
    
    elecon.style.transform = "translateX(0px)" ;
    elecon.style.transition ="0.5s"
    btns1[0].style.visibility="hidden";
    btns2[0].style.visibility="visible";
}

let btns11 = document.getElementsByClassName("btns11") ;

let btns22 = document.getElementsByClassName("btns22") ;

let elecon1 = document.getElementById("eleproducts1");

btns11[0].style.visibility="hidden";
function tnxt1() {
    
    elecon1.style.transform = "translateX(-600px)" ;
    elecon1.style.transition ="0.5s";
    btns22[0].style.visibility="hidden";
    btns11[0].style.visibility="visible";

}
function tpre1() {
    
    elecon1.style.transform = "translateX(0px)" ;
    elecon1.style.transition ="0.5s";
    btns11[0].style.visibility="hidden";
    btns22[0].style.visibility="visible";
}


let btns13 = document.getElementsByClassName("btns13") ;

let btns23 = document.getElementsByClassName("btns23") ;

let elecon3 = document.getElementById("eleproducts3");
btns13[0].style.visibility="hidden";
function tnxt3() {
    
    elecon3.style.transform = "translateX(-600px)" ;
    elecon3.style.transition ="0.5s";
    btns23[0].style.visibility="hidden";
    btns13[0].style.visibility="visible";
}
function tpre3() {
    
    elecon3.style.transform = "translateX(0px)" ;
    elecon3.style.transition ="0.5s";
    btns13[0].style.visibility="hidden";
    btns23[0].style.visibility="visible";

}


