function encodeURL() {
    const input = document.getElementById('urlInput').value;
    document.getElementById('urlOutput').value = encodeURIComponent(input);
}

function decodeURL() {
    try {
        const input = document.getElementById('urlInput').value;
        document.getElementById('urlOutput').value = decodeURIComponent(input);
    } catch {
        document.getElementById('urlOutput').value = "Invalid URL encoding!";
    }
}
