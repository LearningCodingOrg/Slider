const pictureArr = ['bicycle1-640.jpg', 'bicycle2-640.jpg', 'bicycle3-640.jpg', 'bicycle4-640.jpg', 'bicycle5-640.jpg', 'bicycle6-640.jpg', 'bicycle7-640.jpg', 'bicycle8-640.jpg', 'bicycle9-640.jpg', 'bicycle10-640.jpg', 'bicycle11-640.jpg', ];
let photoNr = 0;
const classNames = ['btnLeft', 'btnA-L'];

const circleArrows = document.querySelectorAll('.btnCircleArrow');
const angleArrows = document.querySelectorAll('.btnAngle')
const mainPhoto = document.querySelector('.mainPhoto img');
const currentDisplay = document.querySelector('.currentDisplay');
const prevMiniature = document.querySelector('.prevMin');
const currentMiniature = document.querySelector('.currMin');
const nextMiniature = document.querySelector('.nextMin');


function update() {
    document.querySelector('.allPictures').textContent = pictureArr.length;
    prevMiniature.src = `./Photos/${pictureArr[photoNr -1]}`;
    currentMiniature.src = `./Photos/${pictureArr[photoNr]}`;
    nextMiniature.src = `./Photos/${pictureArr[photoNr +1]}`;
    mainPhoto.src = `./Photos/${pictureArr[photoNr]}`;
    currentDisplay.textContent = photoNr + 1;
}

function changePhotoByArrow() {
    if (classNames.some(className => this.classList.contains(className))) {
        photoNr--;
    } else {
        photoNr++
    }
    checkEndArr();
    update()
}

function changePhotoByKey(e) {
    if (e.keyCode === 39) {
        if (photoNr !== pictureArr.length - 1) {
            photoNr++;
        }
        checkEndArr()
    } else if (e.keyCode === 37) {
        if (photoNr !== 0) {
            photoNr--;
        }
        checkEndArr()
    }
    update()
}

function checkEndArr() {
    if (photoNr === 0) {
        circleArrows[0].classList.add('opacity');
        circleArrows[0].setAttribute('disabled', 'true');
        angleArrows[0].classList.add('opacity');
        angleArrows[0].setAttribute('disabled', 'true');
        prevMiniature.parentElement.classList.add('invisible')
    } else if (photoNr === pictureArr.length - 1) {
        circleArrows[1].setAttribute('disabled', 'true');
        circleArrows[1].classList.add('opacity');
        angleArrows[1].classList.add('opacity');
        angleArrows[1].setAttribute('disabled', 'true');
        nextMiniature.parentElement.classList.add('invisible')
    } else {
        circleArrows.forEach(circleArrow => circleArrow.classList.remove('opacity'));
        circleArrows.forEach(circleArrow => circleArrow.removeAttribute('disabled'));
        angleArrows.forEach(angleArrow => angleArrow.classList.remove('opacity'));
        angleArrows.forEach(circleArrow => circleArrow.removeAttribute('disabled'));
        prevMiniature.parentElement.classList.remove('invisible');
        nextMiniature.parentElement.classList.remove('invisible');
    }
}

update()
// Listener
circleArrows.forEach(circleArrow => circleArrow.addEventListener('click', changePhotoByArrow));
angleArrows.forEach(angleArrow => angleArrow.addEventListener('click', changePhotoByArrow));
document.addEventListener('keydown', changePhotoByKey);