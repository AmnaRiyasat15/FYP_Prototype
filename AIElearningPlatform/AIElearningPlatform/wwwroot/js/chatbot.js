function toggleChatbot() {
    const chatbotWindow = document.getElementById("chatbot-window");
    chatbotWindow.style.display = chatbotWindow.style.display === "none" ? "block" : "none";
}

function sendMessage() {
    const inputField = document.getElementById("chatbot-input");
    const message = inputField.value.trim();
    const messagesDiv = document.getElementById("chatbot-messages");

    if (message) {
        // Add user's message
        const userMessage = document.createElement("div");
        userMessage.textContent = message;
        userMessage.style.textAlign = "right";
        userMessage.style.marginBottom = "10px";
        messagesDiv.appendChild(userMessage);

        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.textContent = "Hello! How can I assist you?";
            botMessage.style.textAlign = "left";
            botMessage.style.marginBottom = "10px";
            messagesDiv.appendChild(botMessage);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }, 1000);

        // Clear the input field
        inputField.value = "";
    }
}
