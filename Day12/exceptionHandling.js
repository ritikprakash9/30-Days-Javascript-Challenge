// ======================= Activity 1 ========================

// Task 1
const num1 = 5;
const num2 = 0;

try {
  console.log(result(num1 / num2));
} catch (error) {
  console.log(error.message);
}

// Task 2

let division = (numerator, denominator) => {
  try {
    if (denominator == 0) {
      throw error;
    } else {
      console.log(numerator / denominator);
    }
  } catch (error) {
    console.log(error.message);
  }
};

division(2, 0);
