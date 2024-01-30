let telegram_bot_id = "6969746477:AAHLSRkmWZz6wTQwTQwA568oVr8jP74ZnHQ"; 
let chat_id = 6969746477; 
let u_name, lname, phone, message;
let ready = function() {
    u_name = document.getElementById("name").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("tel").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nTelfon raqami: " +  "\nIzoh: " + message;
    // "Familiyasi:" + lname + 
};
let sendtelegram = function() {
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("message").value = "";
    return false;
};