interface Directors extends Teacher {
    numberOfReports: number;
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

const teacher = new Teacher("Thato", "Mashigo", true, "New York", "yearsOfExperience", 5, "contract", true);

console.log(teacher.firstName); // "Thato"
console.log(teacher.lastName); // "Mashigo"
console.log(teacher.fullTimeEmployee); // true
console.log(teacher.yearsOfExperience); // 5
console.log(teacher.contract); // true

// Attempt to modify firstName after initialization
teacher.firstName = "Jane";
console.log(teacher.firstName); // "Thato" (firstName cannot be modified after initialization)
