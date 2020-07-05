const shareBtn = document.querySelector('.article--share');
const shareIcons = document.querySelector('.oneAndOnlyDiv');
const svg = document.querySelector('.svg-path');
const footer = document.querySelector('.article-content__footer');

shareBtn.addEventListener("mouseover", onHover);
shareBtn.addEventListener("mouseout", onRemoveHover);
shareBtn.addEventListener("click", onClick);
// footer.addEventListener("click", mobileClick);
// footer.addEventListener("mouseover", mobileClick);
// footer.addEventListener("mouseout", mobileHoverOut);


function onHover(){
    shareBtn.classList.add('active-share');
    svg.classList.add('active-svg');
    shareIcons.classList.add('shareIcon-active');
}

function onRemoveHover(){
    shareBtn.classList.remove('active-share');
    svg.classList.remove('active-svg');
    shareIcons.classList.remove('shareIcon-active');
}

function onClick(){
    shareBtn.classList.toggle('active-share');
    svg.classList.toggle('active-svg');
    shareIcons.classList.toggle('shareIcon-active');
}
