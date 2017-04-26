var electron = require('electron');
var fileops = require('./fileops')
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;

app.on('window-all-closed', () => {
  app.quit()
})

app.on('ready', function() {
	var appWindow, splashScreen;
	appWindow = new BrowserWindow({
		show: false
	});
	appWindow.loadURL('file://' + __dirname + '/index.html');

	splashScreen = new BrowserWindow({
		width: 400,
		height: 400,
		frame: false,
		transparent: true,
		show: false
	})

	splashScreen.loadURL('file://' + __dirname + '/splash.html')

	appWindow.once('ready-to-show', function() {
		setTimeout(function(){
			splashScreen.show();
			setTimeout(function() {
				splashScreen.close();
			}, 1500)
		}, 200);
		appWindow.show();
	});

});