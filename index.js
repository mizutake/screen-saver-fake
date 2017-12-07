'use strict';

let electron = require('electron');
let app = electron.app;
let Tray = electron.Tray;
let Menu = electron.Menu;
let BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
app.on('window-all-closed', function() {
  app.quit();
})

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
  app.quit();
});

app.on('ready', function() {
  const size = electron.screen.getPrimaryDisplay().size;
  let mainWindow = new BrowserWindow({
      left: 0,
      top: 0,
      width: size.width,
      height: size.height,
      transparent: true,
      resizable: false,
      titleBarStyle: 'hidden',
      webPreferences: {
        nodeIntegration: false
      }
    });
   // mainWindow.setIgnoreMouseEvents(true);
    mainWindow.maximize();
    mainWindow.openDevTools();    
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  let tray = new Tray(__dirname + '/image/icon.jpg');
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '画像追加', type: 'normal', click: function() { 
      let save = new BrowserWindow({ width: 400, height: 300 });
      save.loadURL('file://' + __dirname + '/file.html');
      save.show();
      }
    },
    {label: '終了', type: 'normal', click: function() {app.quit()}},
  ])
  tray.setToolTip('This is application.')
  tray.setContextMenu(contextMenu)
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});