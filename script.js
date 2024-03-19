function sendMessage() {
  var usernameInput = document.getElementById("username-input");
  var messageInput = document.getElementById("message-input");
  var username = usernameInput.value;
  var message = messageInput.value;
  
  if (username.trim() !== "" && message.trim() !== "") {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerText = username + ": " + message;
    chatBox.appendChild(messageElement);
    
    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

