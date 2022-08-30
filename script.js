const sliderItems = [...document.querySelectorAll('.hover-slider__item')];
const navItems = [...document.querySelectorAll('.hover-slider-nav__item')];

sliderItems.forEach((item, index) => {
    item.dataset.index = index;

    if (index === 0) {
        item.classList.add('active-hover');
    }
});
navItems.forEach((item, index) => {
    item.dataset.index = index;

    if (index === 0) {
        item.classList.add('active-nav');
    }
});

const toggleActivity = index => {
    for (let i = 0; i < sliderItems.length; i++) {
        if(i === Number(index)) {
            sliderItems[i].classList.add('active-hover');
            navItems[i].classList.add('active-nav');
        } else {
            sliderItems[i].classList.remove('active-hover');
            navItems[i].classList.remove('active-nav');
        }
    }
}

document.querySelector('.hover-slider-nav').addEventListener('mouseover', (event) => {
    if(event.target.classList.contains('hover-slider-nav__item')) {
        toggleActivity(event.target.dataset.index);
    }
})