var show = document.querySelector(".bx-show");
var hide = document.querySelector(".bx-hide");
var input = document.querySelector("#isenha");

hide.addEventListener('click', function() {
    hide.style.display = 'none'
    show.style.display = 'block'
    if (input.type == 'password') {
        input.setAttribute('type','text')
    } 
})

show.addEventListener('click', function() {
    show.style.display = 'none'
    hide.style.display = 'block'
    if (input.type == 'text') {
        input.setAttribute('type','password')
    }
})