
console.log("Your index.js file is loaded correctly!");


const sectionOneOptions = document.querySelectorAll('fade-in');

const appearOptions = {
    threshold: 0
   
}

const faders = document.querySelectorAll("fade-in")

const sliders = document.querySelectorAll("work-item-left work-item-right")

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll

) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
appearOptions});


faders.forEach(faders => {
    appearOnScroll.observe(faders);
})

sliders.forEach(slider => {
    appearOnScroll.observe(sliders)
})