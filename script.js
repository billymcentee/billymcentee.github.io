const navbarScript = () => {
    const homepageButton = document.getElementById("homepage-button")
    const journalismButton = document.getElementById("journalism-button")
    const theaterButton = document.getElementById("theater-button")
    
    const mobileHomepageButton = document.getElementById("mobile-homepage-button")
    const mobileJournalismButton = document.getElementById("mobile-journalism-button")
    const mobileTheaterButton = document.getElementById("mobile-theater-button")
    
    const homepagePage = document.getElementById("homepage-page")
    const journalismPage = document.getElementById("journalism-page")
    const theaterPage = document.getElementById("theater-page")
    
    const menuButton = document.getElementById("menu-button")
    const mobileMenu = document.getElementById("mobile-menu")
    
    const shrinkingContainer = document.getElementById("shrinking-container")
    
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
 
    journalismButton.onclick = mobileJournalismButton.onclick = () => {
        clearPages()
        journalismPage.classList.add("visible")
        mobileMenu.classList.add("nondisplay")
    }
 
    theaterButton.onclick = mobileTheaterButton.onclick = () => {
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

    document.onscroll = () => {
        const scroll = document.documentElement.scrollTop || document.body.scrollTop
        if (!shrinkingContainer) {
            return false
        }
        console.log(scroll)
        if (scroll && scroll > 900) {
            shrinkingContainer.classList.add("narrow-container")
        } else {
            shrinkingContainer.classList.remove("narrow-container")
        }
    }
}

navbarScript()