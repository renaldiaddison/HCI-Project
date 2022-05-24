const carouselImages = document.querySelector('.carousel-images')
const carouselButtons = document.querySelectorAll('.carousel-button')
const totalImages = document.querySelectorAll('.carousel-images img').length
console.log(totalImages)
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
        console.log(currentImage)
        carouselImages.style.transform = `translateX(${translateX}vw)`
        console.log(translateX)
    })
})