const interns = [
  {
    name: "John Doe",
    taskScores: [85, 92, 78, 88, 90],
  },
  {
    name: "Bright Ezeribe",
    taskScores: [40, 98, 27, 89, 45],
  },
  {
    name: "Jane Smith",
    taskScores: [12, 9, 37, 16, 51],
  },
  {
    name: "Alice Johnson",
    taskScores: [32, 45, 28, 39, 41],
  },
  {
    name: "Bob Brown",
    taskScores: [75, 82, 68, 80, 77],
  },
];

// Function to calculate average score
function calculateAverage(taskScores) {
  let sum = 0;
  for (let i = 0; i < taskScores.length; i++) {
    sum = sum + taskScores[i];
  }

  let average = sum / taskScores.length;
  return average;
}

interns.forEach(function (intern) {
  let averageScore = calculateAverage(intern.taskScores);
  console.log(intern.name, averageScore);
});
