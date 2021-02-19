// funcion for chat 
const popup = document.querySelector('.containerChat');
const chatBtn = document.querySelector('.chat-btn');
const chatBtn1 = document.querySelector('.chat-btn1');
const chatBtn2 = document.querySelector('.chat-btn2');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chatPage');
const inputElm = document.querySelector('input');


chatBtn.addEventListener('click', () => {
    popup.classList.toggle('show');
})
chatBtn1.addEventListener('click', () => {
    popup.classList.toggle('show');
})
chatBtn2.addEventListener('click', () => {
    popup.classList.toggle('show');
})
submitBtn.addEventListener('click', () => {
    let userInput = inputElm.value;
    console.log(userInput);
    let temp = `<div class="chatBox">
    <img src="/public/usuario.jpg" class="chatBox--avatar__incomemessage">
    <span class="chatBox--incomemessage">${userInput}</span>
    </div>`;
    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';
})

// function change color
function changeColor(x) {
    if (x.style.background == "rgb(253, 242, 214)") {
        x.style.background = "#EDEBEC";
    } else {
        x.style.background = "#FDF2D6";
    }
    return false;
}

