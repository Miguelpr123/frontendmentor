
window.addEventListener('load', toggle_menu)
window.addEventListener('scroll', scrollMenu)

function toggle_menu() {
    const btn_toggler = document.querySelector('#btn-toggle-menu')
    const toggle_navigation = document.querySelector('#toggle-navigation')
    const menu = document.querySelector('#menu')

    menu.style.transition = 'ease all 600ms'
    toggle_navigation.style.transition = 'ease all 600ms'
    btn_toggler.style.transition = 'ease all 600ms'

    btn_toggler.addEventListener('click', (e) => {
        toggle_navigation.classList.toggle('hidden')
        btn_toggler.classList.toggle('active')

        if (btn_toggler.classList.contains('active')) {
            btn_toggler.innerHTML = '<img src="images/icon-close.svg" alt="">'
        } else {
            btn_toggler.innerHTML = '<img src="images/icon-hamburger.svg" alt="">'
        }
    })

    // scroll menu    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            menu.classList.add('bg-neutral-100')
            menu.classList.add('shadow-lg')
        }
        else{
            menu.classList.remove('bg-neutral-100')
            menu.classList.remove('shadow-lg')
        }
    })


}


function scrollMenu() {

}


