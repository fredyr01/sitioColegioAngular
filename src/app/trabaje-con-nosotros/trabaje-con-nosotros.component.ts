import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trabaje-con-nosotros',
  templateUrl: './trabaje-con-nosotros.component.html',
  styleUrls: ['./trabaje-con-nosotros.component.css']
})
export class TrabajeConNosotrosComponent implements OnInit {
  
  trabajeForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Enviados los datos!");
    console.log(this.trabajeForm.value);
  }

}
