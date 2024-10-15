import { Component } from '@angular/core';
import { StudentNavbarComponent } from '../student-navbar/student-navbar.component';
import { StudentFooterComponent } from '../student-footer/student-footer.component';

@Component({
  selector: 'app-student-registry',
  standalone: true,
  imports: [StudentNavbarComponent, StudentFooterComponent],
  templateUrl: './student-registry.component.html',
  styleUrl: './student-registry.component.css'
})
export class StudentRegistryComponent {

}
