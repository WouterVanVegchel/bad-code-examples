/// Mock
class EmployeeService {
    getEmployee(id: number): Employee{
        let e = new Employee();
        e.employeeId = 1;
        e.firstYear = 2004;
        e.payment = PaymentType.HOURLY;
        e.yearOfBirth = 1950;
        e.rate = 25;
        return e;
    }
}