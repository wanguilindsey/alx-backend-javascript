/**
 * Prompts the user for their name, reads the input from STDIN,
 * and displays the name entered.
 *
 * A closing message is displayed when the program ends.
 *
 * @example
 * // Welcome to Holberton School, what is your name?
 * // Alice
 * // Your name is: Alice
 * // This important software is now closing
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
