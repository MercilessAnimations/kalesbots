document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.querySelector(".switch input[type='checkbox']");
    const messageInput = document.querySelector(".message-input");
    const messageContainer = document.querySelector(".message-container");

    // Initialize arrays to keep track of used responses
    let usedBusinessResponses = [];
    let usedPickupLines = [];

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
                        "Business Bot: Don't be afraid to take calculated risks in pursuit of growth.",
                        "Business Bot: The highest form of wealth is the ability to wake up every morning and say 'I can do whatever I want to do.' This means that the ultimate goal of earning money is the freedom of your own time."
                    ];

                    // Filter out used responses
                    const availableBusinessResponses = businessResponses.filter(response => !usedBusinessResponses.includes(response));
                    
                    // If all responses have been used, reset the array
                    if (availableBusinessResponses.length === 0) {
                        usedBusinessResponses = [];
                    }
                    
                    // Randomly select a response from the available responses
                    response = availableBusinessResponses[Math.floor(Math.random() * availableBusinessResponses.length)];
                    usedBusinessResponses.push(response);
                } else {
                    // Rizzful mode
                    const pickupLines = [
                        "Rizz Bot: Are you a magician? Because whenever I look at you, everyone else disappears.",
                        "Rizz Bot: Do you have a name, or can I call you mine?",
                        "Rizz Bot: Do you believe in love at first sight, or should I walk by again?",
                        "Rizz Bot: Is it hot in here, or is it just you?",
                        "Rizz Bot: I must be a snowflake because I've fallen for you.",
                        "Rizz Bot: Can I follow you home? Cause my parents always told me to follow my dreams.",
                        "Rizz Bot: Are you a bank loan? Because you've got my interest.",
                        "Rizz Bot: I ought to complain to Spotify for you not being named this week’s hottest single."
                    ];

                    // Filter out used responses
                    const availablePickupLines = pickupLines.filter(response => !usedPickupLines.includes(response));
                    
                    // If all responses have been used, reset the array
                    if (availablePickupLines.length === 0) {
                        usedPickupLines = [];
                    }
                    
                    // Randomly select a response from the available responses
                    response = availablePickupLines[Math.floor(Math.random() * availablePickupLines.length)];
                    usedPickupLines.push(response);
                }
                messageContainer.innerHTML += `<div class='message'>You: ${message}</div>`;
                messageContainer.innerHTML += `<div class='message'>${response}</div>`;
                messageInput.value = "";
                messageContainer.scrollTop = messageContainer.scrollHeight;
            }
        }
    });
});
