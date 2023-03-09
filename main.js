let drawingTab = document.getElementById('drawingsHeading');
let jewelryTab = document.getElementById('jewelryHeading');
let paintTab = document.getElementById('paintHeading');
let yarnTab = document.getElementById('yarnHeading');

let drawingSection=document.getElementById('drawingSection');
let jewelrySection=document.getElementById('jewelrySection');
let paintSection=document.getElementById('paintSection');
let yarnSection=document.getElementById('yarnSection');

drawingTab.addEventListener('click', showDrawingSection);
jewelryTab.addEventListener('click', showJewelrySection);
paintTab.addEventListener('click', showPaintSection);
yarnTab.addEventListener('click', showYarnSection);

function showDrawingSection(){
    jewelrySection.classList.remove('arts');
    paintSection.classList.remove('arts');
    yarnSection.classList.remove('arts');

    drawingSection.classList.add('arts');
}
function showJewelrySection(){
    drawingSection.classList.remove('arts');
    paintSection.classList.remove('arts');
    yarnSection.classList.remove('arts');

    jewelrySection.classList.add('arts');
}
function showPaintSection(){
    jewelrySection.classList.remove('arts');
    drawingSection.classList.remove('arts');
    yarnSection.classList.remove('arts');

    paintSection.classList.add('arts');
}
function showYarnSection(){
    jewelrySection.classList.remove('arts');
    paintSection.classList.remove('arts');
    drawingSection.classList.remove('arts');
    
    yarnSection.classList.add('arts');
}