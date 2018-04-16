const tip = document.querySelector('#notif');
const cb = document.querySelector('#checkbox');
const close = document.querySelector('#close-notif');
const textForTip = document.querySelector('#notif article p');
const ulList = document.querySelector('#scroll-tips ul');
const scrollBack = document.querySelector('#back');
const scrollForward = document.querySelector('#forward');

const focusedColor = 'rgb(207, 20, 20)';
const defaultColor = 'rgb(59, 58, 58)';

let focused = 0;

let tips = [`Using lorem ipsum to focus attention on graphic elements in a webpage design proposal
            In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate`,
            `The lorem ipsum text is typically a scrambled section of De finibus bonorum et malorum, a 1st-century BC Latin text by Cicero, with words
            altered, added, and removed to make it nonsensical, improper Latin.`,
            `A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by 
            advertisements for Letraset transfer sheets`,
            `Replacing the actual content with placeholder text allows designers to design the form of the content before the content`];

if (!localStorage.getItem('notification')) {
    setTimeout(() => {
        tip.hidden = false;
        textForTip.innerHTML = tips[0];
        for (let i = 0; i < tips.length; i++) {
            let newLi = document.createElement('li');
            newLi.setAttribute('tabIndex', 0);
            newLi.innerHTML = '&bull;';
            ulList.appendChild(newLi);
        }
        ulList.firstChild.style.color = focusedColor;
        focused = 0;
    }, 5000); 
}   


close.onclick = () =>{
    if (cb.checked) {
        localStorage.setItem('notification', true);
    }
    tip.hidden = true;
}

scrollForward.onclick = () =>{
    ulList.childNodes[focused].style.color = defaultColor;
    if (focused === ulList.childNodes.length - 1) {
        focused = 0;
        ulList.childNodes[focused].style.color = focusedColor;
    } else {
        ulList.childNodes[++focused].style.color = focusedColor;
    }
    textForTip.innerHTML = tips[focused];
}

scrollBack.onclick = () => {
    ulList.childNodes[focused].style.color = defaultColor;
    if (focused === 0) {
        focused = ulList.childNodes.length - 1;
        ulList.childNodes[focused].style.color = focusedColor;
    } else {
        ulList.childNodes[--focused].style.color = focusedColor;
    }
    textForTip.innerHTML = tips[focused];
}

document.onkeydown = (e) =>{
    if (e.keyCode === 39) {
        scrollForward.onclick();
    } else if(e.keyCode === 37){
        scrollBack.onclick();
    }
}






