const contact = document.querySelector(".contact-header");

const about = document.querySelector(".about-header");

const work = document.querySelector(".work-header")

about.addEventListener("click", scrollAbout);

work.addEventListener("click", scrollWork);

contact.addEventListener("click", scrollContact);

function scrollAbout() {
    window.scrollTo(0, window.innerHeight);
}

let workPos = 2 * window.innerHeight;

function scrollWork() {
    window.scrollTo(0, workPos);
}

let contactPos = 3 * window.innerHeight;

function scrollContact() {
    window.scrollTo(0, contactPos);
}
