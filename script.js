document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.querySelector(".switch input[type='checkbox']");
    const messageInput = document.querySelector(".message-input");
    const messageContainer = document.querySelector(".message-container");

    messageInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const message = messageInput.value;
            if (message.trim() !== "") {
                let response;
                if (toggleSwitch.checked) {
                    // Business mode
                    const businessResponses = [
                        "Business Bot: Diversify your portfolio to minimize risk.",
                        "Business Bot: Keep an eye on market trends and invest wisely.",
                        "Business Bot: Consider long-term investments for steady growth.",
                        "Business Bot: Remember, the key to success is continuous learning and adaptation.",
                        "Business Bot: Efficiency is doing things right; effectiveness is doing the right things.",
                        "Business Bot: Always prioritize customer satisfaction for long-term success.",
                        "Business Bot: Network strategically to open doors for new opportunities.",
                        "Business Bot: Don't be afraid to take calculated risks in pursuit of growth."
                    ];
                    response = businessResponses[Math.floor(Math.random() * businessResponses.length)];
                } else {
                    // Rizzful mode
                    const pickupLines = [
                        "Rizzful Bot: Are you a magician? Because whenever I look at you, everyone else disappears.",
                        "Rizzful Bot: Do you have a name, or can I call you mine?",
                        "Rizzful Bot: Do you believe in love at first sight, or should I walk by again?",
                        "Rizzful Bot: Is it hot in here, or is it just you?",
                        "Rizzful Bot: I must be a snowflake because I've fallen for you.",
                        "Rizzful Bot: Can I follow you home? Cause my parents always told me to follow my dreams.",
                        "Rizzful Bot: Are you a bank loan? Because you've gyatt my interest."

                    ];
                    response = pickupLines[Math.floor(Math.random() * pickupLines.length)];
                }
                messageContainer.innerHTML += `<div class='message'>You: ${message}</div>`;
                messageContainer.innerHTML += `<div class='message'>${response}</div>`;
                messageInput.value = "";
                messageContainer.scrollTop = messageContainer.scrollHeight;
            }
        }
    });

    let konamiCode = "";
    const konamiSequence = "38384040373937396665";
    document.addEventListener("keydown", function(event) {
        konamiCode += event.keyCode;
        if (konamiCode === konamiSequence) {
            document.body.style.backgroundImage = "url('jackharlow.png')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundAttachment = "fixed";
            konamiCode = "";
        }
    });
});
