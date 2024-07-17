import React from "react";
import Employee from "./employee";

const Employees = () => {
  const employees = [
    {
      name: "Denver Hoy",
      position: "Manager",
      salary: 90000,
      status: "Active",
    },
    {
      name: "Michaelo Buddin",
      position: "Developer",
      salary: 90000,
      status: "Active",
    },
    {
      name: "Kalix Martinez",
      position: "Designer",
      salary: 10000,
      status: "Active",
    },
    {
      name: "Juan Dela Cruz",
      position: "Developer",
      salary: 85000,
      status: "Active",
    },
    {
      name: "Trisha Luaria",
      position: "Manager",
      salary: 95000,
      status: "Active",
    },
    {
      name: "David Henry",
      position: "Designer",
      salary: 72000,
      status: "Active",
    },
    {
      name: "Shaun Lopez",
      position: "Developer",
      salary: 82000,
      status: "Active",
    },
    {
      name: "Nathan Lemuel",
      position: "Manager",
      salary: 93000,
      status: "Active",
    },
    {
      name: "Jacod Ramirez",
      position: "Designer",
      salary: "100000",
      status: "Active",
    },
    {
      name: "Sabrina Hernandez",
      position: "Developer",
      salary: "950000",
      status: "Active",
    },
  ];

  return (
    <div>
      <h1>Employees</h1>
      <table border="1">
        <thead>
          <tr>
            <th>No.</th>
            <th>Employee Names</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <Employee key={index} index={index} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
