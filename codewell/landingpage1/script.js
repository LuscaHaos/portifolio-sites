productsBtn = document.querySelector('.products')
productsMenu = document.querySelector('.products-menu')

productsBtn.addEventListener('click', () => {
    if (productsMenu.classList.contains('open')) {
        productsMenu.classList.remove('open')
    } else {
        productsMenu.classList.add('open')
    }
    

})

menuMobileBtn = document.querySelector('.menu-icon')
menuMobile = document.querySelector('.menu-mobile')

menuMobileBtn.addEventListener('click', () => {
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
})

productsBtn = document.querySelector('.products-mobile')
productsMenuMobile = document.querySelector('.products-menu-mobile')

productsBtn.addEventListener('click', () => {
    if (productsMenuMobile.classList.contains('open')) {
        productsMenuMobile.classList.remove('open')
    } else {
        productsMenuMobile.classList.add('open')
    }
    

})

