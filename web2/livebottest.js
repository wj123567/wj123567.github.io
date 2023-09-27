const msgForm = document.querySelector(".userform");
const msgInput = document.querySelector(".userinput");
const msgChat = document.querySelector(".main-chat");

const bot_msg = [
    "Hi, how are you?",
    "Ohh... I can't understand what you trying to say. Sorry!",
    "I like to play games... But I don't know how to play!",
    "Sorry if my answers are not relevant. :)",
    "Yo! Whats up!",
    "Here is live bot chat, we will be contact in you soon!"];

const bot_img = "gamesenseiimage/bot.png";
const user_img = "gamesenseiimage/user.png";
const bot_name = "GAmeR MAnagerZ";
const user_name = "User";

function empty() {
    if (msgInput.value == ""){
        alert("Please key in some things!");
    }
}


msgForm.addEventListener("submit", event => {
    //When the form is submitted prevent the page refresh
    event.preventDefault();

    const msgText = msgInput.value;
    if(!msgText) return;

    appendMessage(user_name, user_img, "right", msgText);
    msgInput.value = "";

    botResponse();
});

function appendMessage(name, img, side, text) {
    const msgHTML = `
    <div class="${side}-chat">
                    <div class="userimg">
                        <img src="${img}" alt="user">
                    </div>
                    <div class="usermsg">
                        <div class="userinfo">
                            <div class="username">
                                ${name}
                            </div>
                            <div class="time">
                                &nbsp;&nbsp;${formatDate(new Date())}
                            </div>
                        </div>
                        <div class="usertext">
                            ${text}
                        </div>
                    </div>
                </div>
    `;

    msgChat.insertAdjacentHTML("beforeend", msgHTML);
    msgChat.scrollTop += 500;
    window.scrollBy(0, 120);
}

function botResponse() {
    const rand = random(0, bot_msg.length - 1);
    const msgText = bot_msg[rand];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
        appendMessage(bot_name, bot_img, "left", msgText);
    }, delay);
}

function formatDate(now) {
    // Get the hours and minutes from the Date object
    const hour = "0" + now.getHours();
    const minute = "0" + now.getMinutes();

    return `${hour.slice(-2)}:${minute.slice(-2)}`;

}

function random(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

