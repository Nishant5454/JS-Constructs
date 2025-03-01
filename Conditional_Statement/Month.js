const readline = require('readline');
const month= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
if (
  (month === '3' && day >= 20) ||
  (month === '4' || month === '5') ||
  (month === '6' && day <= 20)
) {
  console.log(true);
} else {
  console.log(false);
}
