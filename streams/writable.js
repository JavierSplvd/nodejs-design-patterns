var chance = require('chance').Chance();

require('http').createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); //[1]
  while (chance.bool({ likelihood: 95 })) { //[2]
    res.write(chance.string() + '\n'); //[3]
  }
  res.end('\nThe end...\n'); //[4]
  res.on('finish', () => { //[5]
    console.log('All data was sent');
  });
}).listen(8080, () => {
  console.log('Listening');
});