function sendMessage() {
    var userInput = document.getElementById("user-input");
    var chatLog = document.getElementById("chat-log");

    // Append user message to the chat log
    chatLog.innerHTML += "<p>User: " + userInput.value + "</p>";

    // Clear the input field
    userInput.value = "";

    // Send user message to the ChatGPT API
    fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "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" // Replace with your actual API key
        },
        body: JSON.stringify({
            prompt: "User: " + userInput.value,
            max_tokens: 50
        })
    })
    .then(response => response.json())
    .then(data => {
        // Append ChatGPT's response to the chat log
        chatLog.innerHTML += "<p>ChatGPT: " + data.choices[0].text + "</p>";
    })
    .catch(error => {
        console.log("Error:", error);
    });
}
