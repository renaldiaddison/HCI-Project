const carouselImages = document.querySelector('.carousel-images')
const carouselButtons = document.querySelectorAll('.carousel-button')
const totalImages = document.querySelectorAll('.carousel-images img').length
let currentImage = 1
let translateX = 0

carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        
        if(event.target.id === 'prev') {
            if(currentImage !== 0) {
                currentImage--
                translateX += 100
            }
            if(currentImage === 0) {
                currentImage = totalImages
                translateX = -600
            }
        }
        else {
            if(currentImage !== totalImages+1) {
                currentImage++
                translateX -= 100
            }
            if(currentImage === totalImages+1) {
                currentImage = 1
                translateX = 0
            }
        }
        carouselImages.style.transform = `translateX(${translateX}vw)`
    })
})

setInterval(() => {
    if(currentImage !== totalImages+1) {
        currentImage++
        translateX -= 100
    }
    if(currentImage === totalImages+1) {
        currentImage = 1
        translateX = 0
    }
    carouselImages.style.transform = `translateX(${translateX}vw)`
}, 8000);