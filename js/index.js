
const toggleller = document.querySelector('.collapse-btn');
const smNavbar = document.querySelector('.sm-navb');
toggleller.addEventListener('click', function (e) {
    smNavbar.classList.toggle('s-gr-hide');
    smNavbar.classList.toggle('gr-show');
});

document.addEventListener('click', function (e) {
    if (smNavbar.classList.contains('gr-show')
        && (!e.target.isEqualNode(toggleller) && !e.target.parentNode.isEqualNode(toggleller))
        && !e.target.isEqualNode(smNavbar) && !smNavbar.contains(e.target)) {
        smNavbar.classList.replace('gr-show', 's-gr-hide');
    }
});


const navbar = document.querySelector('.h-nav');
const hero = document.querySelector('.h-hero-main');
const body = document.querySelector('body');
const brandLogo = document.querySelector('#brand-logo');
const brandLogoText = document.querySelector('#brand-logo-text');

body.addEventListener('scroll', () => {
    if (body.scrollTop >= (hero.offsetHeight - 45)) {
        navbar.classList.add('sticky');
        navbar.classList.add('bg-white');
        navbar.children[1].children[0].classList.add('sticky');
        navbar.children[3].children[0].classList.add('sticky');

        // change brand image
        brandLogo.src = "./images/icons/skillsphere_full_black.png";
        // brandLogoText.src = "./images/icons/skillsphere_text_black.png";
    } else {
        navbar.classList.remove('sticky');
        navbar.classList.remove('bg-white');
        navbar.children[1].children[0].classList.remove('sticky');
        navbar.children[3].children[0].classList.remove('sticky');

        // change brand image
        brandLogo.src = "./images/icons/skillsphere_full_white.png";
        // brandLogoText.src = "./images/icons/skillsphere_text_white.png";

    }
});