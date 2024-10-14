import { Component, computed, effect, input, OnInit, output } from '@angular/core';
import { Usuario } from '../model_usuario';


@Component({
  selector: 'app-signalhijo1',
  standalone: true,
  imports: [],
  templateUrl: './signalhijo1.component.html',
  styleUrl: './signalhijo1.component.scss'
})
export class Signalhijo1Component   {

  //nombre_input = input<string>();  
  nombre_input = input('',{
    alias:'nombre_input', // nombre que deve ir en el app
    transform:(value:string) => value.toUpperCase()
  });  

  dataUsuario_input = input<Usuario|null>();
  datuarios_input =  input<Usuario[]>([]);
  inputCurrentDate = input<string|null>();
  inputRequerido = input.required<number>()
  inputActivoModel = input<boolean>;
  
  dataSelect_output = output<Usuario|null>();
  usuariocomputed = computed( ()=> `${this.dataUsuario_input()?.codiPer} ${this.dataUsuario_input()?.codiUsu} `)
  constructor() {
    effect(() => {
       // alert("cambio nombre effect:" +this.usuariocomputed()+this.inputCurrentDate() )
         alert("cambio nombre effect:" +this.usuariocomputed() )
    })
  }
 
  modificarPadre(){
   
    this.dataSelect_output.emit( { codiPer: 999,  codiUsu: 'emalcap@gmail.com999',  dniPer: '99999'})
     
  }


}
