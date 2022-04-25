import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  public createEmployeeForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    emailId: [''],
  });

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder) { }


  saveEmployee() {
    this.employeeService.createEmployee(this.createEmployeeForm.value)
      .subscribe(() => this.goToEmployeeList());
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.saveEmployee();
  }
}
