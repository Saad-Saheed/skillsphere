let menuToggle = document.querySelector('.menuToggle');
let sMenuToggle = document.querySelector('.s-menuToggle');
let navigation = document.querySelector('.navigation');
let sNavigation = document.querySelector('.s-nav');
let sNavCollapse = document.querySelector('.s-nav-collapse');
let logo = document.querySelector('.logo-reduced');
let listSpan= document.querySelectorAll('.nav-items a span');
let listItem= document.querySelectorAll('.item');
let collapsebg = document.querySelector('.s-nav-collapsebg');
let menuItems = document.querySelectorAll('.menu-item');
let menuActive = document.querySelector('.item a:active');
let saveCompany = document.getElementById('c-save');
let applyCompany = document.getElementById('c-apply');


menuToggle.onclick = function() {
    navigation.classList.toggle('active');
    logo?.classList.toggle('logo-large');
    
    listSpan.forEach(
        (item)=>{
            item.classList.toggle('hide');
        }
    )
    listItem.forEach(
        (item)=>{
            item.classList.toggle('list-item-p');
        }
    )
}
sMenuToggle.onclick = function() {
    sNavigation.classList.add('active');
    collapsebg.classList.remove('d-none')
    collapsebg.classList.toggle('s-nav-bgactive')
    sNavCollapse.classList.remove('s-nav-hide');
    sNavCollapse.classList.add('show');
}

function activeLink(){
    listItem.forEach(
        (item)=>{
            item.classList.remove('active')
            this.classList.add ('active')
        }
    )
}

listItem.forEach((item)=>{
    item.addEventListener('click', activeLink)
});

function activeMenu(){
    menuItems.forEach(
        (item)=>{
            item.classList.remove('active')
            this.classList.add ('active')
        }
    )
}

menuItems.forEach((item)=>{
    item.addEventListener('click', activeMenu)
});

collapsebg.addEventListener('click', function(){
    collapsebg.classList.remove('s-nav-bgactive')
    sNavigation.classList.remove('active');
    sNavCollapse.classList.add('s-nav-hide');
    collapsebg.classList.add('d-none')
});


saveCompany.onclick = function(){
    if (saveCompany.innerHTML==='Save'){
        saveCompany.innerHTML += 'd'
        saveCompany.classList.add('btn-saved')
    }
    else{
        saveCompany.innerHTML = 'Save';
        saveCompany.classList.remove('btn-saved')
    }
}
saveCompany.onclick = function(){
    if (saveCompany.innerHTML==='Save'){
        saveCompany.innerHTML += 'd'
        saveCompany.classList.add('btn-saved')
    }
    else{
        saveCompany.innerHTML = 'Save';
        saveCompany.classList.remove('btn-saved')
    }
}



document.getElementById('c-apply').addEventListener('click', function(e){
   
    if (e.target.innerHTML === 'Applied') {
        e.target.innerHTML='Apply'
        document.querySelector('.question').classList.remove('d-none');
        document.querySelector('.question').classList.add('d-block');
        document.querySelector('.question').nextElementSibling.classList.add('d-none');
        document.querySelector('.question').nextElementSibling.classList.remove('d-flex');
    }
    else {
        document.getElementById('no').parentElement.parentElement.parentElement.parentElement.classList.add('d-flex');
        document.getElementById('no').parentElement.parentElement.parentElement.parentElement.classList.remove('d-none');
    }

})

document.getElementById('yes').addEventListener('click', function(e){
    if (applyCompany.innerHTML === 'Applied'){
        applyCompany.innerHTML = 'Apply';
        e.target.parentElement.parentElement.classList.add('d-flex');
        e.target.parentElement.parentElement.nextElementSibling.classList.remove('d-block');
        e.target.parentElement.parentElement.nextElementSibling.classList.add('d-none');
    } else {
        e.target.parentElement.parentElement.classList.add('d-none');
        e.target.parentElement.parentElement.nextElementSibling.classList.remove('d-none');
        e.target.parentElement.parentElement.nextElementSibling.classList.add('d-flex');
        setTimeout(function(){
            e.target.parentElement.parentElement.parentElement.parentElement.classList.add('d-none');
            e.target.parentElement.parentElement.parentElement.parentElement.classList.remove('d-flex');
        }, 2000)

        applyCompany.innerHTML ='Applied';
    }
    
});


document.querySelector('.question').addEventListener('click', function(e){
    if (e.target.classList.contains('no')){
        // console.log(e.target.classList)
            e.target.parentElement.parentElement.parentElement.parentElement.classList.add('d-none');
            e.target.parentElement.parentElement.parentElement.classList.remove('d-flex');
    }
    
});