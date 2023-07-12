import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';

interface users{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    direccion: FormControl<string | null>;
    ciudad: FormControl<string | null>;
    pais: FormControl<string | null>;

}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

emailC = new FormControl('',[Validators.required, Validators.minLength(4),]);
passwordC = new FormControl('', [Validators.required, Validators.minLength(7),]);
direccionC = new FormControl('', [Validators.required,]);
ciudadC = new FormControl('', [Validators.required,]);
paisC = new FormControl('', [Validators.required,]);

  users: FormGroup<users> = new FormGroup({
    email: this.emailC,
    password: this.passwordC,
    direccion: this.direccionC,
    ciudad: this.ciudadC,
    pais: this.paisC,

  })
  onSumbmit(): void {
    alert(JSON.stringify(this.users.value));
  }

  }



 
