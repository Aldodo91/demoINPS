import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  listaAnni = ['1991', '2000', '1980'];

  data = {
    nome: new FormControl(''),
    lavoro: new FormControl(''),
    anno: new FormControl(0),
  };
  constructor(private formBuilder: FormBuilder) {}

  questionerForm = this.formBuilder.group({
    nome: ['', Validators.required],
    lavoro: ['', Validators.required],
    anno: [0, Validators.required],
  });

  submit() {
    console.clear();
    console.log(this.questionerForm);
    console.log(
      `Ciao ${this.questionerForm.value.nome} hai ${this.questionerForm.value.anno} anni e fai il ${this.questionerForm.value.lavoro}`
    );
  }
}
