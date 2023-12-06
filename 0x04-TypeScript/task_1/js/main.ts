// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [index: string]: any;
}

// Define the Director interface that extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Define the function type for printTeacher
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// Create a Teacher
const teacher1: Teacher = {
  firstName: "Sheeva",
  lastName: "Tanya",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "Seatle"
};

// Print the teacher's name
console.log(printTeacher(teacher1.firstName, teacher1.lastName)); // to output: "Sheeva Tanya"

// create Director
const director1: Director = {
  firstName: "Sonya",
  lastName: "Briggs",
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: "New Jersey",
  numberOfReports: 3
};

// Print the director's name
console.log(printTeacher(director1.firstName, director1.lastName)); // to output: "Sonya Briggs"
