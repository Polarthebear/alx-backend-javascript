interface Directors extends Teacher {
    numberOfReports: number;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + ". " + lastName;
}

class Teacher {
    private firstName: string;
    private lastName: string;
    public fullTimeEmployee: boolean;
    public yearsOfExperience?: number;
    public location: string;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, ...args: any[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;

        for (let i = 0; i < args.length; i += 2) {
            const key = args[i];
            const value = args[i + 1];
            (this as any)[key] = value;
        }
    }
}

const teacher = new Teacher("John", "Doe", true, "New York", "yearsOfExperience", 5, "contract", true);

// Create a Director object
const director: Directors = {
    ...teacher,
    numberOfReports: 10,
};

console.log(printTeacher(director.firstName, director.lastName)); // Output: J. Doe
