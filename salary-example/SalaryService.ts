class SalaryService{
    GetSalary(id: number, year: number): number{
        let add: number = 0;
        let dateTime = new Date();
        let age = dateTime.getFullYear() - year;
        let empSer = new EmployeeService();
        let emp = empSer.getEmployee(id);
        // hourly payed over 65 and four weekly payed over 50 
        if ((age > 65 && emp.payment == PaymentType.HOURLY) || (age > 50 && emp.payment == PaymentType.FOUR_WEEKLY)){
            add = 0.05;
        }
        let fhp = 1.00;
        let hours = 0;
        if(emp.payment == PaymentType.HOURLY) { // is hourly rate
            fhp = 1.02; // add two percent
            let hourSe = new HourService();
            hours = hourSe.getHoursLastPeriod(id);
        }
        else if(emp.payment == PaymentType.WEEKLY) { // is weekly rate
            fhp = 1.01; // add one percent
            let hourSe = new HourService();
            hours = hourSe.getHoursLastPeriod(id);
        }else {
            let hourSe = new HourService();
            hours = hourSe.getHoursLastPeriod(id);
        }
        let s = (fhp + add) * 10 * hours;
        //temp return
        // return 10;
        return s;
    }
}