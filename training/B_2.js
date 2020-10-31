
const fs = require('fs');
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
});

let b = false;
let prev;

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
  if (!b) {
        b = true;
    } else {
    	if (!prev) {
        	prev = line;
        } else {
        	if (line - prev !== 0) {
            	fs.writeFileSync('output.txt', prev + '\n', 'w');
                prev = line;
            }
        }
    }
  
})
fs.writeFileSync('output.txt', prev, 'w');
