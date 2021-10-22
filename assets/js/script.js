const workSection = document.getElementById('work');
const workCards = document.getElementsByClassName('workCard');

function makeVisible(element){
    element.style.visibility = "visible";
        element.style.opacity = "1";
        element.closest('.workCard').dataset.active = "true";
}

workSection.addEventListener('click', function(e){
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