$(document).ready(function(){
    $('#action_menu_btn').click(function(){
        $('.action_menu').toggle();
    });
        });
var privates = document.querySelectorAll(".onchat-private");
privates.forEach(private =>{
    private.onclick = function(){
        document.querySelector(".list-chat.active").classList.remove("active");
        document.querySelector(".chat-private").classList.add("active");
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
