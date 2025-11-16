function encodeBase64() {
    const input = document.getElementById('base64Input').value;
    document.getElementById('base64Output').value = btoa(input);
}

function decodeBase64() {
    try {
        const input = document.getElementById('base64Input').value;
        document.getElementById('base64Output').value = atob(input);
    } catch {
        document.getElementById('base64Output').value = "Invalid Base64!";
    }
}
