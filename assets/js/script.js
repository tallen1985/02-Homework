const workSection = document.getElementsByClassName('work');
const workCards = document.getElementsByClassName('workCard');
const navLinks = document.querySelectorAll('.navLink')
const articles = document.querySelectorAll('article')

function makeVisible(element){
    element.style.visibility = "visible";
        element.style.opacity = "1";
        element.closest('.workCard').dataset.active = "true";
}

for (const link of navLinks){
    link.addEventListener('click', e => {
        articles.forEach(article => {
            if (article.id == e.target.dataset.link) {
                article.style.display = 'flex';
            } else {
            article.style.display = 'none';
            }
    })
})
}

for (const section of workSection) {
    section.addEventListener('click', function(e){
        for (let x = 0; x < workCards.length; x++) {
            if (workCards[x].dataset.active == "true") {
                workCards[x].lastElementChild.style.opacity = "0";
                workCards[x].lastElementChild.style.visibility = 'hidden'
                workCards[x].dataset.active = "false";
            }
        }
        if (e.target.matches('.workCard')) {
            const element = e.target.lastElementChild;
            makeVisible(element);
            return;
        }
        if (e.target.closest('.workCard')) {
            const element = e.target.parentElement.nextElementSibling
            makeVisible(element);
            return;
        }
    })
}