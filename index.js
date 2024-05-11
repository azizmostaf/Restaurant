// alert("Hello Wellcome Resturant");
var heading = document.getElementsByClassName('accordion');

var i ;
for (i = 0 ; i < heading.length ; i++){
    heading[i].addEventListener('click',function() {
        this.classList.toggle('active')
        
        var des = this.nextElementSibling;
        if(des.style.maxHeight) {
            des.style.maxHeight = null;
        }
        else {
            des.style.maxHeight = des.scrollHeight + "px";

        }
    });
}

var i = 0;
var slidesImage = ["images/pexels-andrea-piacquadio-761854 (4).jpg" , "images/pexels-andrea-piacquadio-761854 (3).jpg" ,"images/pexels-andrea-piacquadio-761854 (1).jpg" ,"images/pexels-andrea-piacquadio-761854 (2).jpg" ];

var slideShow = function () {
    document.slideshow.src = slidesImage [i];
    if( i < slidesImage.length -1 ) {
        i++;
    }else {
        i = 0;
    }
    setTimeout("slideShow()",2000);

}
slideShow();

// let x = prompt("write your name");
// if (x == "Abdallah") 
//     window.location ="https://www.youtube.com/";
//     else {
//         alert (" Please Add Your Name To bypass The Problem ");
//     }























