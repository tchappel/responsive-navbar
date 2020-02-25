const nav = document.querySelector('.nav')
const navCheckbox = nav.querySelector('.nav__checkbox')
const navLinks = nav.querySelector('.nav__links')
let navTransitionTimeout = null
const navTransitionTime = 300; // this must correspond to transition time in class "nav-transition"
const navBreakpoint = 600; // this should correspond to mediaQuery for navbar in css

const isNavCheckboxChecked = () => {
    if (!navCheckbox) return false
    return navCheckbox.checked
}

const addTransitionToNavLinks = () => {
    navLinks.classList.add('nav-transition')
    clearTimeout(navTransitionTimeout)
    navTransitionTimeout = setTimeout(() => {
        navLinks.classList.remove('nav-transition')
    }, navTransitionTime)
}

const openNavLinks = () => {
    if (!isNavCheckboxChecked) navCheckbox.checked = true
    navLinks.classList.add('open')
}

const closeNavLinks = () => {
    if (isNavCheckboxChecked) navCheckbox.checked = false
    navLinks.classList.remove('open')
}

navCheckbox.addEventListener('click', () => {
    if(isNavCheckboxChecked()) {
        openNavLinks()
        addTransitionToNavLinks()
    } else {
        closeNavLinks()
        addTransitionToNavLinks()
    }
})

window.addEventListener("resize", e => {
    const clientWidth = document.body.clientWidth;
    if (clientWidth > navBreakpoint) {
        closeNavLinks()
    }
});
