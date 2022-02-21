process.stdin.on('data', (chunk) => {
  console.log("Chunk read: ", String(chunk))
}).on('end', () => {
  process.stdout.write('End of stream');
});