//Task 1: Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Test Case
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary());


//Task 2: Manager Class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }

    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    calculateBonus() {
        return this.calculateAnnualSalary() * 0.10;
    }
}

// Test Case
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());


//Task 3: Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(emp => console.log(emp.getDetails()));
    }
}

// Test Case
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();


//Task 4: Payroll System
class Employee {
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.calculateBonus();
    }
}

class Company {
    calculateTotalPayroll() {
        return this.employees.reduce((total, emp) => total + emp.calculateAnnualSalary(), 0);
    }
}

// Test Case
console.log(company.calculateTotalPayroll());


//Task 5: Promotions
class Company {
    promoteToManager(employee, teamSize) {
        const manager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
        this.employees = this.employees.map(emp => emp === employee ? manager : emp);
    }
}

// Test Case
company.promoteToManager(emp1, 3);
company.listEmployees();