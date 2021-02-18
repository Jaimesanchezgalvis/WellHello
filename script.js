const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chatPage');
const inputElm = document.querySelector('input');


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

