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
    mainWindow.maximize();
    mainWindow.openDevTools();    
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  let tray = new Tray(__dirname + '/image/icon.jpg');
  const contextMenu = Menu.buildFromTemplate([
    {label: '画像追加(jpgでお願いします)', type: 'normal',click: function() {
      // let request = require('request');
      // let fs = require('fs');
      
      //  let url = ;
      
      // request(
      //     {method: 'GET', url: url, encoding: null},
      //     function (error, response, body){
      //         if(!error && response.statusCode === 200){
      //             fs.writeFileSync('a.jpg', body, 'binary');
      //         }
      //     }
      // );
       console.log('')}}, //保存を考える(配列に組み込む){ファインダーを開くかドラックアンドドロップする}
    {label: 'separator', type: 'separator'},
    {label: 'about', type: 'normal'},
    {label: '終了', type: 'normal', click: function() {app.quit()}}
  ])
  tray.setToolTip('This is application.')
  tray.setContextMenu(contextMenu)
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});