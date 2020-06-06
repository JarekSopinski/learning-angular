import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})

export class ChangePasswordFormComponent {

  isPasswordChanged: boolean = false;

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, this.isOldPasswordCorrect),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  isOldPasswordCorrect(control: AbstractControl) : Promise<ValidationErrors | null> {
    const oldPassword = '1234';
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        control.value !== oldPassword ? resolve({ isOldPasswordCorrect: true }) : resolve(null);
      }, 2000);
    })
  }

  handleSubmit(f){
    if (f.value.newPassword !== f.value.confirmPassword)
      this.form.setErrors({
        passwordsDontMatch: true
      })
    else 
      this.isPasswordChanged = true;
  }

}