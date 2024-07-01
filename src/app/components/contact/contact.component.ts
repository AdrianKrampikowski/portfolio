import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef,
    public fb: FormBuilder
  ) {}

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  changeButtonColor: boolean = false;
  showMessageSent: boolean = false;
  showMessageSent1: boolean = false;
  showMessageSent2: boolean = false;

  missingName: boolean = false;
  missingEmail: boolean = false;
  missingMessage: boolean = false;

  greenBorderName: boolean = false;
  greenBorderEmail: boolean = false;
  greenBorderMessage: boolean = false;

  scrollToHeader(): void {
    const headerElement = document.querySelector('#header');
    if (headerElement) {
      headerElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  async sendMail() {
    const formData = new FormData();
    const formValue = this.contactForm.value;

    if (this.contactForm.invalid) {
      if (this.contactForm.controls.name.errors?.['required']) {
        this.missingName = true;
      }
      if (this.contactForm.controls.email.errors?.['required']) {
        this.missingEmail = true;
      }
      if (this.contactForm.controls.message.errors?.['required']) {
        this.missingMessage = true;
      }

      // Exit early if the form is invalid
      return;
    }

    if (this.contactForm.valid) {
      if (formValue.name) {
        formData.append('name', formValue.name);
        this.greenBorderName = true;
      }

      if (formValue.email) {
        formData.append('email', formValue.email);
        this.greenBorderEmail = true;
      }

      if (formValue.message) {
        formData.append('message', formValue.message);
        this.greenBorderMessage = true;
      }
    }

    // Display success message

    try {
      const response = await fetch(
        'https://adrian-krampikowski.com/src/send_mail.php',
        { method: 'POST', body: formData }
      );

      if (!response.ok) {
        // Handle server error or unsuccessful response
        // You can set an error flag or show an error message to the user
      }
    } catch (error) {
      // Handle fetch error
      // You can set an error flag or show an error message to the user
    }

    // Reset the form and UI states after sending the email
    this.contactForm.reset();

    this.showMessageSent = true;
    this.showMessageSent1 = true;

    setTimeout(() => {
      this.showMessageSent1 = false;
      setTimeout(() => {
        this.showMessageSent2 = true;
      }, 250);
    }, 2000);

    setTimeout(() => {
      this.showMessageSent = false;
      this.showMessageSent2 = false;

      this.missingName = false;
      this.missingEmail = false;
      this.missingMessage = false;

      this.greenBorderName = false;
      this.greenBorderEmail = false;
      this.greenBorderMessage = false;
    }, 5000);
  }

  checkValidName() {
    if (this.contactForm.controls.name.errors?.['required']) {
      this.missingName = false;
      this.greenBorderName = false;
    }
  }

  checkValidEmail() {
    if (this.contactForm.controls.email.errors?.['required']) {
      this.missingEmail = false;
      this.greenBorderEmail = false;
    }
  }

  checkValidMessage() {
    if (this.contactForm.controls.message.errors?.['required']) {
      this.missingMessage = false;
      this.greenBorderMessage = false;
    }
  }

  ngOnInit(): void {}
}
