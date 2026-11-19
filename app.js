document.getElementById("action-btn").addEventListener("click", function() {
    const resultDiv = document.getElementById("result-container");
    console.log("Button clicked! Starting to print sentences...");
    
    resultDiv.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        resultDiv.innerHTML += i + ". I am awesome!<br>";
        console.log("Printed sentence number: " + i);
    }
    
    console.log("Done! All 10 sentences successfully displayed.");
});