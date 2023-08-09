const nav = document.querySelector('.nav__container');
const navBig = document.querySelector('.nav__container--dad');
const iconMenu = document.querySelector('.box__model');
const imgMenu = document.querySelector('.img__menu');
const iconArrow = document.querySelectorAll('.icon__arrow');
const dropLinks = document.querySelectorAll('.drop__link');
const dropsContent = document.querySelectorAll('.dropdown__list--content');

console.log(iconArrow);

iconMenu.addEventListener('click', (e) =>{
    e.preventDefault();
    nav.classList.toggle('nav__container--active');

    if(nav.classList.contains('nav__container--active')){
        imgMenu.setAttribute('src', './images/icon-close-menu.svg');
    }else{
        imgMenu.setAttribute('src', './images/icon-menu.svg');
    }
});




dropLinks.forEach((links, index) => {
    links.addEventListener("click", (e) => {
        e.preventDefault();
        iconArrow.forEach((icon, indexIcon) => {
            if(indexIcon === index){
                icon.classList.toggle('icon__arrow--rotate');
            }
        });
        dropsContent.forEach((drops, indexDrops) => {
            if(indexDrops === index){
                drops.classList.toggle('dropdown__list--content--active');
            }
        });
    });

    let timer;
    if(window.innerWidth >= 748){
        links.addEventListener('mouseover', (e) => {
            dropsContent.forEach((drops, indexDrops) => {
                if(indexDrops === index){
                    drops.classList.add('dropdown__list--content--active');
                }
            });
        });
        links.addEventListener('mouseleave', (e) => {
            timer = setTimeout(() => {
                dropsContent.forEach((drops, indexDrops) => {
                    if(indexDrops === index){
                        drops.classList.remove('dropdown__list--content--active');
                    }
                });
            }, 200); // 500ms delay before closing the dropdown
        });
        dropsContent.forEach((drops, indexDrops) => {
            if(indexDrops === index){
                drops.addEventListener('mouseover', (e) => {
                    clearTimeout(timer);
                });
                drops.addEventListener('mouseleave', (e) => {
                    drops.classList.remove('dropdown__list--content--active');
                });
            }
        });
    }
});
