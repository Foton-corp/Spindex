/****** Author page ******/
const collapseBtn = document.querySelectorAll('.handleCahnge');
const collapseH2 = document.querySelector('.handleCheck');


for (let i = 0; i < collapseBtn.length; i++) {
    collapseBtn[i].addEventListener('click', () => {
        if (collapseBtn[i].firstElementChild.innerHTML.includes('Раскрыть') === true) {
            setTimeout(() => {
                collapseBtn[i].firstElementChild.innerHTML = `
                    Скрыть
                `;
            }, 0);
        } else {
            setTimeout(() => {
                collapseBtn[i].firstElementChild.innerHTML = `
                    Раскрыть
                `;
            }, 0);
        }
    });
}

const collapseBtn2 = document.querySelectorAll('.handlechange2');



for (let i = 0; i < collapseBtn2.length; i++) {
    collapseBtn2[i].addEventListener('click', () => {
        if (collapseBtn2[i].querySelector('img')) {
            setTimeout(() => {
                collapseBtn2[i].firstElementChild.innerHTML = `
                    Скрыть
                `;
            }, 0);
        } else {
            setTimeout(() => {
                collapseBtn2[i].firstElementChild.innerHTML = `
                    Подробнее <img src="./assets/img/icons/arrow-down.svg" style="margin-left: 6px;" alt="">

                `;
            }, 0);
        }
    });
}


/***** Bonus program ******/
const questionCollapseBtn = document.querySelectorAll('.handleCol');
let a = document.createElement('img');

a.classList.contains
questionCollapseBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        this.parentElement.classList.toggle('isOpen');
        if (this.parentElement.classList.contains('isOpen')) {
            this.firstElementChild.src = './assets/img/icons/minus-symb.svg';
            this.previousElementSibling.firstElementChild.src = './assets/img/icons/q-symb-blue.svg';
        } else {
            this.firstElementChild.src = './assets/img/icons/plus-symb-white.svg';
            this.previousElementSibling.firstElementChild.src = './assets/img/icons/q-symb-white.svg';
        }
    });
});

/****** side bar ******/
const sideBarBtn = document.querySelector('.side-bar-btn');
const sideBar = document.querySelector('.profile-page_left');

sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('side-bar-opened');
    sideBarBtn.classList.toggle('side-bar-opened');
});


/*** cabinet edit ***/
const secondPopUp = document.querySelector('#add-pub2');
const popUps = document.querySelectorAll('.cstm-modal-check');
const popUpNextBtns = document.querySelectorAll('.cstmcheck-modal-btn');

popUpNextBtns.forEach(popNextUpBtn => {
    popNextUpBtn.addEventListener('click', () => {
        setTimeout(() => {
            document.body.classList.add('modal-open');
            document.body.style.paddingRight = '17px';
        }, 1000);
    });
});



// adding author rights
const rightObjectTypeMonograph = document.querySelector('.type-monograph');
const rightObjectTypeState = document.querySelector('.type-state');
const rightObjectTypeChoose = document.querySelector('.objectType-choose');


rightObjectTypeChoose.addEventListener('change', () => {
    let currentOption = rightObjectTypeChoose.options[rightObjectTypeChoose.selectedIndex].innerText;
    // const pagesQunatity = document.createElement('input');
    // pagesQunatity.setAttribute('class', 'add-right-pages-quantity form-control cstm-input');
    // pagesQunatity.setAttribute('type', 'text');

    const rightAddForm = document.querySelector('.add-right-form');
    const beforeElement = document.querySelector('.add-right-edition');

    const pagesQunatity = document.querySelector('.add-right-pages-quantity');

    if(currentOption === 'Монография') {
        pagesQunatity.style.display = 'block';
    } else if(currentOption === 'Научная статья') {
        pagesQunatity.style.display = 'none';

    }
});