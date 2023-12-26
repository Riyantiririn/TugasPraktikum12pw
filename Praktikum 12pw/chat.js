function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value;
  
    if (message.trim() !== '') {
      var chatMessages = document.getElementById('chat-messages');
      chatMessages.innerHTML += <div class="message">${message}</div>;
      messageInput.value = '';
  
      // Optional: Scroll to the bottom of the chat container
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }