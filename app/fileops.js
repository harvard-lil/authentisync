var fs = require('fs');
var path = require('path');
var md5 = require('md5');
var file = require('file');

getAllFiles = function getAllFiles (path, callback) {

	file.walk("/Users/asilva/Code/repos/fewd", callback)

}


getMd5 = function getMd5 (path) {
	fs.readFile(path, function(err, buf) {
  		console.log(md5(buf))
  		return(md5(buf));

	});
}

getFiles = function getFiles (path, callback) {
	return callback(path);
}




module.exports = [ getFiles, getMd5, getAllFiles ];