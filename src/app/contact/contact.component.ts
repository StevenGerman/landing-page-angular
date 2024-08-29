import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  formularioContacto: FormGroup; 

  tipoDni: string = 'DNI'
  

  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: ['', [Validators.required]],
      dni: [0,[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(valor => {
      this.tipoDni = valor;
    })
  }

  hasErrors( controlName : string, typeError: string){
    return this.formularioContacto.get(controlName)?.hasError(typeError) && this.formularioContacto.get(controlName)?.touched;
    
  }

  enviar(){
    console.log(this.formularioContacto);
  }


}
