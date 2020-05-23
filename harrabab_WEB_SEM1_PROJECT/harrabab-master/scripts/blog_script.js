document.querySelectorAll(".showmore").forEach(function(p) {
    p.querySelector("a").addEventListener("click", function() {
        p.classList.toggle("show");
        this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
    });
});
const $ = document.querySelector.bind(document);
const sc = $(".sc");
const r = $(".r");
const o = $(".o");
const ll = $(".ll");

function transformLetters() {
    const scroll = window.scrollY;

    sc.style.transform = `translate3d(0, ${scroll*1.4}px, 0) rotateY(${-scroll*0.03}deg)`;

    r.style.transform = `translate3d(${-scroll*0.45}px, ${scroll*0.95}px, 0) rotate(${-scroll*0.1}deg)`;

    o.style.transform = `translate3d(${scroll*0.65}px, ${scroll*1.05}px, 0) rotate(${scroll*0.2}deg)`;

    ll.style.transform = `translate3d(0, ${scroll*0.5}px, 0) rotateY(${scroll*0.04}deg)`;
}

window.addEventListener("scroll", transformLetters);

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlidesChange");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}