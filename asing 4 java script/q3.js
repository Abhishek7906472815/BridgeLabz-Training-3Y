// q6-employee-system.js: Employee Management System

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary assumption
    }

    // Method to calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Method to apply a bonus percentage to monthly salary
    applyBonus(percent) {
        this.salary += this.salary * (percent / 100);
    }
}

// Create 5 employee objects
const employees = [
    new Employee(1, "Alice Smith", "Engineering", 75000),
    new Employee(2, "Bob Jones", "Marketing", 52000),
    new Employee(3, "Charlie Brown", "Human Resources", 48000),
    new Employee(4, "Diana Prince", "Executive Management", 120000),
    new Employee(5, "Evan Wright", "Sales", 60000)
];

console.log("=== Individual Employee Annual Salaries ===");
employees.forEach(emp => {
    console.log(`Employee: ${emp.name.padEnd(16)} | Dept: ${emp.department.padEnd(22)} | Annual Salary: ₹${emp.getAnnualSalary().toLocaleString()}`);
});

// Use reduce() to calculate total annual payout of the company
const totalCompanyPayout = employees.reduce((totalSum, emp) => {
    return totalSum + emp.getAnnualSalary();
}, 0);

console.log(`\n💰 Total Company Annual Payroll Payout: ₹${totalCompanyPayout.toLocaleString()}`);