import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  employeeList: Employee[] = []; //declared employeees as an array of Employee type

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      data.forEach((employee) => console.log(employee));
      this.employeeList = data;
    });
  }

  updateEmployee(id: number | null) {
    console.log('inside updateEmployee method : ', id);
    //redirect to update employee page
    window.location.href = `/update-employee/${id}`;
  }

  deleteEmployee(id: number | null) {
    console.log('inside ddeleteEmployee method : ', id);
    this.employeeService.deleteEmployee(id).subscribe((data: any) => {
      console.log('delete api response : ', data);
      this.getEmployees();
    }, error => console.log('error from delete api call : ', error));
  }

  viewEmployee(id: number | null) {
    console.log('inside viewEmployee');
    window.location.href = `/employee-details/${id}`;
  }
}
