$(document).ready(function(){
    $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
    });
        });
var privates = document.querySelectorAll(".onchat-private");
privates.forEach(private =>{
    private.onclick = function(){
        document.querySelector(".list-chat").style.display = "none";
        document.querySelector(".chat-private").style.display = "block";
    }
})

function backToMeunu(){           
    document.querySelector(".list-chat").style.display = "block";;
    document.querySelector(".chat-private").style.display = "none";;
}
function closeModalGroup(){
    document.querySelector(".modal-group").style.display = "none";
}
function showModalGroup(){
    document.querySelector(".modal-group").style.display = "block";
}
function showModalSent(){
    document.querySelector(".modal-sent").style.display = "block";
}
function closeModalSent(){
    document.querySelector(".modal-sent").style.display = "none";
}

var selects = document.querySelectorAll(".select-user.active");
const afterSelects = document.querySelectorAll(".after-select");
selects.forEach((select,index) =>{
    const afterSelect = afterSelects[index];
    select.onclick = function(){
        select.style.display ="none";
        afterSelect.style.display ="block";
    }
})

var closes = document.querySelectorAll(".close-select");
closes.forEach((close,index) =>{
    const select = selects[index];
    const afterSelect = afterSelects[index];
    close.onclick = function(){
        afterSelect.style.display ="none";
        select.style.display = "block";
    }
})
var selectSents = document.querySelectorAll(".sent-user");
const afterSents = document.querySelectorAll(".after-sent");
selectSents.forEach((selectSent,index) =>{
    const afterSent = afterSents[index];
    selectSent.onclick = function(){
        selectSent.style.display ="none";
        afterSent.style.display ="block";
    }
})

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});







