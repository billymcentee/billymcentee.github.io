const navbarScript = () => {
    const homepageButton = document.getElementById("homepage-button")
    const journalismButton = document.getElementById("journalism-button")
    const theaterButton = document.getElementById("theater-button")
    const journalismLink = document.getElementById("journalism-link")
    const theaterLink = document.getElementById("theater-link")
    
    const mobileHomepageButton = document.getElementById("mobile-homepage-button")
    const mobileJournalismButton = document.getElementById("mobile-journalism-button")
    const mobileTheaterButton = document.getElementById("mobile-theater-button")
    
    const homepagePage = document.getElementById("homepage-page")
    const journalismPage = document.getElementById("journalism-page")
    const theaterPage = document.getElementById("theater-page")
    
    const menuButton = document.getElementById("menu-button")
    const mobileMenu = document.getElementById("mobile-menu")
        
    const pages = [
        homepagePage,
        journalismPage,
        theaterPage
    ]

    homepageButton.onclick = mobileHomepageButton.onclick = () => {
        clearPages()
        homepagePage.classList.add("visible")
        mobileMenu.classList.add("nondisplay")
    }
 
    journalismButton.onclick = mobileJournalismButton.onclick = journalismLink.onclick = () => {
        clearPages()
        journalismPage.classList.add("visible")
        mobileMenu.classList.add("nondisplay")
    }
 
    theaterButton.onclick = mobileTheaterButton.onclick = theaterLink.onclick = () => {
        clearPages()
        theaterPage.classList.add("visible")
        mobileMenu.classList.add("nondisplay")
    }

    menuButton.onclick = () => {
        if (mobileMenu.className.includes("nondisplay")) {
            mobileMenu.classList.remove("nondisplay")
        } else {
            mobileMenu.classList.add("nondisplay")
        }
    }
    
    const clearPages = () => {
        pages.forEach(page => {
            page.classList.remove("visible")
        })
    }
}

const carouselScript = () => {
    const carousels = document.getElementsByClassName("photo-carousel")
    for (let i = 0; i < carousels.length; i++) {
        const carousel = carousels[i];
        const images = []
        const circles = []
        let photoIndex = 0
        const childNodes = carousel.childNodes[1].childNodes
        const circleChildNodes = carousel.childNodes[3].childNodes

        const moveToNext = () => {
            photoIndex += 1
            if (photoIndex > 2) { photoIndex -= 3 }
            clearImages()
            clearCircles()
            images[photoIndex].classList.add("focus")
            circles[photoIndex].classList.add("selected")
        }

        for (let j = 0; j < childNodes.length; j++) {
            const element = childNodes[j];
            if (element.tagName === "IMG") {
                images.push(element)
                element.onclick = moveToNext
            }
        }
        for (let j = 0; j < circleChildNodes.length; j++) {
            const element = circleChildNodes[j];
            if (element.className && element.className.includes("circle")) {
                circles.push(element)
            }
        }

        const clearImages = () => {
            images.forEach(image => {
                image.classList.remove("focus")
            })
        }

        const clearCircles = () => {
            circles.forEach(circle => {
                circle.classList.remove("selected")
            })
        }

        circles.forEach((circle, index) => {
            circle.onclick = () => {
                clearImages()
                clearCircles()
                photoIndex = index
                images[index].classList.add("focus")
                circle.classList.add("selected")
            }
        })
    }
}

navbarScript()
carouselScript()