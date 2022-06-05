
// ----- TOGGLE BURGER -----
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const sideBar = document.querySelector('.sidebar');

    burger.addEventListener('click', () => {
        sideBar.classList.toggle('side-active');
    })
}
navSlide();


const activeSection = () => {
    const navLink = document.querySelector('.nav-links');
    const navItem = document.querySelector('.nav-item');

    navLink.addEventListener('click', () => {
        if (navItem.classList.contains('is-active')) {
            navItem.classList.remove('is-active');
        } else {
            navItem.classList.add('is-active');
        }
    })
}

activeSection();