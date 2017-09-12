{
	var fs = require ('fs');
	var zlib = require('zlib');
	var gzip = zlib.createGzip();
	var gunzip = zlib.createGunzip();
	
/* 	var readable = fs.createReadStream('bigFile.txt');
	var compressed = fs.createWriteStream('ZippedbigFile.txt.pz');

	readable.pipe(gzip).pipe(compressed);  */
	
	var zipReadable = fs. createReadStream('ZippedbigFile.txt.pz');
	var uncompressed = fs.createWriteStream('unzippedBigFile.txt');
	
	zipReadable.pipe(gunzip).pipe(uncompressed);
}