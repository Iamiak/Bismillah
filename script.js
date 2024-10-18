function saveCode() {
    var code = document.getElementById('codeInput').value;
    localStorage.setItem('savedCode', code);
    document.getElementById('output').innerText = "Code saved successfully!";
}

function loadCode() {
    var savedCode = localStorage.getItem('savedCode');
    if(savedCode) {
        document.getElementById('codeInput').value = savedCode;
        document.getElementById('output').innerText = "Code loaded successfully!";
    } else {
        document.getElementById('output').innerText = "No saved code found!";
    }
}
