function formatJSON() {
    try {
        const input = document.getElementById('jsonInput').value;
        const parsed = JSON.parse(input);
        document.getElementById('jsonOutput').value = JSON.stringify(parsed, null, 4);
    } catch (error) {
        document.getElementById('jsonOutput').value = "Invalid JSON!";
    }
}

function minifyJSON() {
    try {
        const input = document.getElementById('jsonInput').value;
        const parsed = JSON.parse(input);
        document.getElementById('jsonOutput').value = JSON.stringify(parsed);
    } catch (error) {
        document.getElementById('jsonOutput').value = "Invalid JSON!";
    }
}
