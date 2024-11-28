function calculateNumber(a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  console.log(`Rounded inputs: ${a} -> ${roundedA}, ${b} -> ${roundedB}`);
  return roundedA + roundedB;
}

module.exports = calculateNumber;
