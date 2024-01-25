//your JS code here. If required.
for (let i = 1; i <= 20; i++) {
  let output = '';

  if (i % 3 === 0) {
    output += 'Fizz';
  }

  if (i % 5 === 0) {
    output += 'Buzz';
  }

  // If not a multiple of 3 or 5, append the number itself
  if (output === '') {
    output = i.toString();
  }

  // Display the output using alert
  alert(output);
}
