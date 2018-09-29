//students score, total possible score
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const studentScore = 78;
const totalScore = 95;
const computeGrade = function(studentScore, totalScore) {
  if (typeof studentScore !== "number") {
    throw Error("Error: Argument studentScore is not a valid number.");
  } else if (typeof totalScore !== "number") {
    throw Error("Error: Argument totalScore is not a valid number.");
  } else {
    return Math.round((studentScore / totalScore) * 100);
  }
};

try {
  const percentageGrade = computeGrade(78, 120);
  let grade = undefined;

  if (percentageGrade >= 90) {
    grade = "A";
  } else if (percentageGrade >= 80) {
    grade = "B";
  } else if (percentageGrade >= 70) {
    grade = "C";
  } else if (percentageGrade >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  let message = `${studentScore}/${totalScore} -> You got a ${grade}(${percentageGrade}%)`;
  console.log(message);
  
} catch (error) {
  console.log(error);
}
