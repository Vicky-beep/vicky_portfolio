const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransitions(){
    // Button click event
    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){ 
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
    })
}
allSections.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        // remove selected from the other btns
        secBtns.forEach(function(btn){
            btn.classList.remove('active-btn');
        })
    }
})
}
pageTransitions();