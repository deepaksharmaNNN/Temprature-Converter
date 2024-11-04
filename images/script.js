document.getElementById("convert").onclick = function() {
    let temp = parseFloat(document.getElementById("input").value); // Corrected 'temp' to 'input'
    let unit = document.getElementById("unit").value;
    let convertedTemp = unit === "C" ? temp * 9 / 5 + 32 : (temp - 32) * 5 / 9;
    document.getElementById("converted").textContent = convertedTemp.toFixed(2); // Optional: toFixed(2) for 2 decimal places
}