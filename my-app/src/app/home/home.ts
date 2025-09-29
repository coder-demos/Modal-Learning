import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Add this

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: true,        // ✅ important in standalone mode
  imports: [FormsModule]   // ✅ tell Angular to enable ngModel/ngForm
})
export class HomeComponent {
  // ✅ form data object
  formData = {
    name: '',
    email: ''
  };

  // ✅ function for submit
  submitForm() {
    console.log('Form Submitted:', this.formData);
    alert(`Thanks ${this.formData.name}! We will contact you at ${this.formData.email}`);
  }
}
