import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // optional for extra styling
})
export class AppComponent {
  page: string = 'home';

  formData = {
    name: '',
    email: ''
  };

  submitForm() {
    if (this.formData.name && this.formData.email) {
      console.log('Form Submitted:', this.formData);
      alert(`✅ Thanks, ${this.formData.name}! We’ll contact you at ${this.formData.email}.`);
      this.formData = { name: '', email: '' }; // reset
    } else {
      alert('⚠️ Please fill all fields!');
    }
  }
}
