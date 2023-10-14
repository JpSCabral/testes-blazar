var menuIten = document.querySelectorAll('.iten-menu');
var menuIcon = document.querySelectorAll('.icon-menu');

function select() {
    menuIten.forEach((iten) =>
        iten.classList.remove('ativo')
    )
    this.classList.add('ativo')

    // menuIcon.forEach((icon) => 
    // icon.classList.remove('alter')
    // )
    // this.classList.add('alter')
}

// function mudaicon() {
//     menuIcon.forEach((icon) =>
//         icon.classList.remove('alter')
//     )
//     this.classList.add('alter')
// }

menuIten.forEach((iten) =>
    iten.addEventListener('click', select)
)

// menuIcon.forEach((icon) =>
//     icon.addEventListener('click', mudaicon)
// )
// selecionar iten menu



// expandir menu
var btnExpande = document.querySelector('#btn-exp')
var menuLateral = document.querySelector('.menu-lateral')
var logotipo = document.querySelector('#logo-encurtada');

btnExpande.addEventListener('click', function () {
    menuLateral.classList.toggle('expand')
    
    
})

function alternarLogo() {
    const logoExpandida = document.getElementById("logo-expandida");
    const logoEncurtada = document.getElementById("logo-encurtada");
    
    if (logoEncurtada.style.display === "none") {
        logoEncurtada.style.display = "block";
        logoExpandida.style.display = "none";
    } else {
        logoEncurtada.style.display = "none";
        logoExpandida.style.display = "block";
    }
}