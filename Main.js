const { app, BrowserWindow } = require("electron");

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  //win.webContents.openDevTools();
  win.loadFile("index.html");
  win.focus();
}
app.whenReady().then(createWindow);
