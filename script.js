const subject = [
  {
    name: "GitHub & HTML",
    taskScores: [85, 92, 78, 88, 90],
  },
  {
    name: " HTML forms",
    taskScores: [40, 98, 27, 89, 45],
  },
  {
    name: "CSS",
    taskScores: [12, 9, 37, 16, 51],
  },
  {
    name: "Responsive web design",
    taskScores: [32, 45, 28, 39, 41],
  },
  {
    name: "Interactive Quiz App",
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

subject.forEach(function (subject) {
  let averageScore = calculateAverage(subject.taskScores);
  console.log(subject.name, averageScore);
});
