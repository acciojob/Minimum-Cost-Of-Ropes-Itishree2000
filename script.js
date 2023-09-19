function calculateMinCost() {
   // Get the input string of rope lengths from the input field
  const inputElement = document.getElementById("rope-lengths");
  const inputString = inputElement.value;

  // Split the input string into an array of rope lengths and convert to numbers
  const ropeLengths = inputString.split(",").map(Number);

  // Ensure there are at least two ropes to connect
  if (ropeLengths.length < 2) {
    alert("Please enter at least two rope lengths.");
    return;
  }

  // Sort the rope lengths in ascending order
  ropeLengths.sort((a, b) => a - b);

  // Initialize the total cost to 0
  let totalCost = 0;

  // Connect ropes one by one, adding their lengths to the total cost
  while (ropeLengths.length > 1) {
    // Take the two shortest ropes
    const rope1 = ropeLengths.shift();
    const rope2 = ropeLengths.shift();

    // Calculate the cost of connecting these two ropes
    const cost = rope1 + rope2;

    // Add the cost to the total cost
    totalCost += cost;

    // Insert the merged rope back into the sorted array
    ropeLengths.push(cost);

    // Re-sort the array (only necessary if you want to keep it sorted)
    ropeLengths.sort((a, b) => a - b);
  }

  // Display the minimum cost in the result div
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Minimum cost: ${totalCost}`;
}  