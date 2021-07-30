import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {


  peopleForm: FormGroup;

  validMessage = '';
  validClase = '';
  constructor() { }

  ngOnInit(){
    this.peopleForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required)
    });
  }

  submitRegistration(){
    let nombre = this.peopleForm.controls["nombre"].value;
    let apellido = this.peopleForm.controls["apellido"].value;
    let id = this.peopleForm.controls["id"].value;

    if (this.peopleForm.valid) {
      this.validMessage = `El/la señor/a ${nombre} ${apellido}, I.D. ${id} es una persona digna de entrar en este tan valioso y memorable servidor`;
      this.validClase = 'alert alert-success';
    }else{
      this.validMessage = ' Por favor completa el formulario correctamente ';
      this.validClase = 'alert alert-danger';
    }
    console.log('Enviaste el form ');
  }

}
