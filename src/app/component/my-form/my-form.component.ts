import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regexValidator } from 'src/app/common/customValidators';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      console.clear();
      console.log(this.questionerForm);
    }, 10000);
  }
  listaAnni = ['', '1991', '2000', '1980'];

  dataDTO = {
    nome: '',
    lavoro: '',
    anno: '',
    codFis: '',
    email: '',
  };

  risultato = '';

  questionerForm = new FormGroup({
    nome: new FormControl(this.dataDTO.nome, [Validators.required]),
    anno: new FormControl(this.dataDTO.anno, []),
    lavoro: new FormControl(this.dataDTO.lavoro, []),
    codFis: new FormControl(this.dataDTO.codFis, [regexValidator(/^[a-zA-Z]/)]),
    email: new FormControl(this.dataDTO.email, [
      regexValidator(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
      //Validators.email,
    ]),
  });
  submit() {
    console.clear();
    console.log(this.questionerForm);
    let condition = this.questionerForm.status == 'INVALID';
    !condition &&
      this.questionerForm
        .get('codFis')
        ?.setValue(
          this.questionerForm.get('codFis')?.value?.toUpperCase() || null
        );

    this.risultato = condition
      ? 'Dove vai la form non è completa'
      : `Ciao ${this.questionerForm.value.nome} hai ${this.questionerForm.value.anno} anni e fai il ${this.questionerForm.value.lavoro} la tua mail e ${this.questionerForm.value.email}`;
  }
}
