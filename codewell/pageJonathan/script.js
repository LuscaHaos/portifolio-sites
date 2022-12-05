btnMenu = document.querySelector('.btn-menu')
menuMobile = document.querySelector('.mobile-nav')
btnMenu.addEventListener('click', () => {
    if (menuMobile.classList.contains('open-mobile-nav')) {
        menuMobile.classList.remove('open-mobile-nav')

    } else {
        menuMobile.classList.add('open-mobile-nav')
    }
})