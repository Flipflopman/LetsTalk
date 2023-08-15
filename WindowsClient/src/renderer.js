const { ipcRenderer } = require('electron');

ipcRenderer.on('display-text', (event, text) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = text;
});