// Step 2: Create Employee Array
let employees = [
    { name: "Alice", hourlyRate: 20, hoursWorked: 40 },
    { name: "Bob", hourlyRate: 25, hoursWorked: 35 },
    { name: "Charlie", hourlyRate: 30, hoursWorked: 45 }
    { name: "Dana", hourlyRate: 22, hoursWorked: 60 },
];

// Step 3: Calculate Base Pay
function calculateBasePay(rate, hours) {
    return rate * Math.min(hours, 40);
}

// Step 4: Calculate Overtime Pay
function calculateOvertimePay(rate, hours) {
    return Math.max(hours - 40, 0) * rate * 1.5;
}

// Step 5: Calculate Net Pay (Gross Pay)
function calculateNetPay(grossPay) {
    return parseFloat(grossPay * 0.85).toFixed(2); // 15% tax rate
}

// Step 6: Calculate Process Payroll
function processPayroll(employee) {
   let name = employee.name;
   let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked); // Base pay for 40 hours or less
   let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked); // Overtime pay for hours over 40
   let grossPay = basePay + overtimePay; // Gross pay is base pay plus overtime pay
   let netPay = calculateNetPay(grossPay); // Net pay after tax deduction
   return { name, basePay, overtimePay, grossPay, netPay };
}

// Step 7: Process Payroll for Each Employee
for (const employee of employees) {
    const payroll = processPayroll(employee);
    console.log(`${payroll.name}:`, payroll);
}