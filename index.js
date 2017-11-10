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
      titleBarStyle: 'hidden'
    });
    mainWindow.maximize();
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  let tray = new Tray(__dirname + '/image/icon.jpg');
  const contextMenu = Menu.buildFromTemplate([
    {label: '画像読み込み(jpegでお願いします)', type: 'normal',click: function() { console.log('')}},
    {label: 'separator', type: 'separator'},
    {label: 'about', type: 'normal'},
    {label: 'quit', type: 'normal', click: function() {app.quit()}}
  ])
  tray.setToolTip('This is application.')
  tray.setContextMenu(contextMenu)
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});