
// Define the input image as a 2D array
const inputImage = [
    [2,4,7,6,5],
    [9,7,1,2,6],
    [8,3,4,5,7],
    [4,3,3,8,4],
    [5,2,1,1,2]
  ];
  
  // Define the kernel as a 2D array
  const kernel = [
    [1, 0, -1],
    [1, 0, -1],
    [1, 0, -1]
  ];
  
  // Define the output array as a 2D array of zeros
  const output = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  
  // Loop over the input image
  for (let i = 1; i < inputImage.length - 1; i++) {
    for (let j = 1; j < inputImage[i].length - 1; j++) {
      // Loop over the kernel
      let sum = 0;
      for (let k = 0; k < kernel.length; k++) {
        for (let l = 0; l < kernel[k].length; l++) {
          // Multiply corresponding kernel and input image pixels and accumulate the result
          sum += kernel[k][l] * inputImage[i + k - 1][j + l - 1];
        }
      }
      // Add the result to the output array
      output[i - 1][j - 1] = sum;
    }
  }
  
  // Print the output array to the console
  console.log(output);