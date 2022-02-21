process.stdin.on('readable', () => {
  var chunk;
  while ((chunk = process.stdin.read()) !== null) {
    console.log("Chunk read", chunk.toString())
  }
}).on('end', () => {
  process.stdout.write('End of stream');
});