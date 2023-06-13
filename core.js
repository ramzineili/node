const path = require('node:path');


var fs = require('fs');
 
fs.rename(path.join(__dirname, 'test', 'welcome.txt'),'./test/hello.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed.');
  fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });


});
