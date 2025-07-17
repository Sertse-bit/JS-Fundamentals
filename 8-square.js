#!/usr/bin/node

const arg = process.argv[2];
const size = parseInt(arg);

if (isNaN(size)) {
  console.log('Missing size');
} else if (size > 0) {
  let i = 0;
  const line = 'X'.repeat(size);
  while (i < size) {
    console.log(line);
    i++;
  }
}
// If size <= 0, print nothing
