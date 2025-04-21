import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  displayedColumns: string[] = [
    'persalNumber',
    'firstName',
    'lastName',
    'jobDescription',
    'jobTitle',
    'componentDescription',
  ];
  employees = [
    {
      persalNumber: '12345',
      firstName: 'Theo',
      lastName: 'Rakomane',
      jobDescription: 'Software Engineer',
      jobTitle: 'Developer',
      componentDescription: 'Frontend',
    },
    {
      persalNumber: '67890',
      firstName: 'Umme',
      lastName: 'Dawood',
      jobDescription: 'Project Manager',
      jobTitle: 'Manager',
      componentDescription: 'Operations',
    },
    {
      persalNumber: '11223',
      firstName: 'Suresh',
      lastName: 'Pilley',
      jobDescription: 'OverSeer',
      jobTitle: 'CTO',
      componentDescription: 'IT Department',
    },
    {
      persalNumber: '11223',
      firstName: 'Suresh',
      lastName: 'Pilley',
      jobDescription: 'OverSeer',
      jobTitle: 'CTO',
      componentDescription: 'IT Department',
    },
    {
      persalNumber: '11223',
      firstName: 'Suresh',
      lastName: 'Pilley',
      jobDescription: 'OverSeer',
      jobTitle: 'CTO',
      componentDescription: 'IT Department',
    },
    {
      persalNumber: '11223',
      firstName: 'Suresh',
      lastName: 'Pilley',
      jobDescription: 'OverSeer',
      jobTitle: 'CTO',
      componentDescription: 'IT Department',
    },
    {
      persalNumber: '11223',
      firstName: 'Suresh',
      lastName: 'Pilley',
      jobDescription: 'OverSeer',
      jobTitle: 'CTO',
      componentDescription: 'IT Department',
    },
  ];
}
