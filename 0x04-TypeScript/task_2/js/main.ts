// Define the ManagerInterface
interface ManagerInterface {
  workFromHome(): string;
  takeBreak(): string;
  performManagerTasks(): string;
}

// Define the LecturerInterface
interface LecturerInterface {
  workFromHome(): string;
  takeBreak(): string;
  performLecturerTasks(): string;
}

// Implement the Manager class
class Manager implements ManagerInterface {
  workFromHome(): string {
    return 'Working from home'
  }
  takeBreak(): string {
    return 'Taking a break'
  }
  performManagerTasks(): string {
    return 'Performing manager tasks'
  }
};

// Implement the Lecturer class
class Lecturer implements LecturerInterface {
  workFromHome(): string {
    return 'Cannot work from home'
  }
  takeBreak(): string {
    return 'Cannot take a break'
  }
  performLecturerTasks(): string {
    return 'Performing lecturer tasks'
  }
}

// Function to create an Employee
function createEmployee(salary: (number | string)): Manager | Lecturer {
  if (typeof salary === 'number' && salary < 500) {
    return new Lecturer();
  }
  return new Manager();
}

// Function to check if an employee is a Manager
function isManager(employee: (Manager | Lecturer)) {
  return employee instanceof Manager;
}

// Function to execute work based on the type of employee
function executeWork(employee: Manager | Lecturer): void {
  if (employee instanceof Manager) employee.performManagerTasks();
  else if (employee instanceof Lecturer) employee.performLecturerTasks();
}

// Define the Subjects type
type Subjects = ('Math' | 'History');

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}
