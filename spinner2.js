process.stdout.write('hello from spinner1.js... \rheyyy\n');
let delay = 300;
let clock = "|-\|/-\|";
for (const char of clock) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delay += 200);
}

// ... fill in the rest yourself ...;