process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  console.log(`Your name is: ${name}`);
});

console.log('Welcome to Holberton School, what is your name?');
process.stdin.resume();

process.stdin.on('end', () => {
  console.log('This important software is now closing')
});
