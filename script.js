document.getElementById('risk-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
   
    const riskScore = Math.random().toFixed(2); 
    
    document.getElementById('risk-score').innerText = riskScore;

    const explanation = riskScore > 0.5 
        ? "High risk detected. You need to seek treatment." 
        : "Low risk detected. Continue with regular check-ups.";

    document.getElementById('explanation').innerText = explanation;
    document.getElementById('result').classList.remove('hidden');
});
