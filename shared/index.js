const aboutBtn = document.querySelector(".about-btn")
const donateBtn = document.querySelector(".donate-btn")
const newsContainer = document.querySelector(".news-container")

const backdrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const mainHeader = document.querySelector('.main-header');

if (aboutBtn) {
    aboutBtn.addEventListener('click', function () {
        location.href = "about.html";
    })
}
if (donateBtn) {
    donateBtn.addEventListener('click', function () {
        location.href = "donate.html";
    })
}
if (newsContainer) {
    newsContainer.addEventListener('click', function () {
        location.href = "events.html";
    })
}
backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    closeModal()
})

const closeModal = function () {
    backdrop.classList.remove('open');
    mainHeader.style = "display: block"
}

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open')
    backdrop.classList.add('open');
    mainHeader.style = "display: none"

})

