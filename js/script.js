document.getElementById("drawButton").addEventListener("click", function() {
    fetch("data/lottery.json")
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            document.getElementById("result").textContent = data[randomIndex].text;
        })
        .catch(error => console.error("Error loading the lottery data:", error));
});
    