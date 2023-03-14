let teamTasks = [0, 0, 0, 0, 0]; // Initialize the list of tasks for each team member

function assignTask(task) {
  // Find the index of the team member with the least amount of tasks
  const minIndex = teamTasks.indexOf(Math.min(...teamTasks));
 
  // Assign the new task to the least loaded team member
  teamTasks[minIndex] += task;
 
  // Print the updated list of tasks for each team member
  console.log(`Team tasks: ${teamTasks}`);
}

// Example usage: assign task 1 to the least loaded team member
assignTask(1);
// Assign tasks 2, 3, 3, 4, and 1 in order
assignTask(2);
assignTask(3);
assignTask(3);
assignTask(4);
assignTask(1);