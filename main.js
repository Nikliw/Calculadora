const { app, BrowserWindow } = require('electron');
const path = require('node:path');

function createWindow() {
    const window = new BrowserWindow({
        width: 340,
        height: 480,
        resizable: false,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    window.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
