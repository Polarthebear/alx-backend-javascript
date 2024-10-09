interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Thato",
  lastName: "Mashigo",
  age: 25.
  location: "Johannesburg",
};

const student2: Student = {
  firstName: "Polar",
  lastName: "Bear",
  age: 35,
  location: "Antartica",
};

const studentList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);

table.appendChild(headerRow);

for (const student of studentsList) {
  const row = document.createElement("tr");
  consts firstNameCell = document.createElement("td");
  firstNameCell.textContent

 = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChile(row);
}

document.body.appendChild(table);
