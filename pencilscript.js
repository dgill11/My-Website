const listitems = document.querySelectorAll("li");
const buttonmain = document.getElementById("returnbutton");
const home = document.getElementById('base');
console.log(listitems);

listitems.forEach(Element => {
    Element.addEventListener("click", smoothscroll);
});

function smoothscroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}

window.addEventListener('scroll', scrollfunction);
buttonmain.addEventListener('click', returnfunction);

function scrollfunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonmain.style.display = "block";
    }
    else {
        buttonmain.style.display = "none";
    } 
}

function returnfunction() {
    home.scrollIntoView({
        behavior: "smooth"
    })
}

