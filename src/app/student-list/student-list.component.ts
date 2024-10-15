import { Component } from '@angular/core';
import { StudentNavbarComponent } from '../student-navbar/student-navbar.component';
import { StudentFooterComponent } from '../student-footer/student-footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentNavbarComponent, StudentFooterComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

}
