import { Component, computed, input, model, signal } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { Signalhijo1Component} from '../signalhijo1/signalhijo1.component';
import { Signalhijo2Component } from '../signalhijo2/signalhijo2.component';
import { Usuario } from '../model_usuario';

@Component({
  selector: 'app-signalpadre',
  standalone: true,
  imports: [AppComponent,Signalhijo1Component,Signalhijo2Component],
  
  templateUrl: './signalpadreinpout.component.html',
  styleUrl: './signalpadreinpout.component.scss',
  })
export class SignalpadreComponent {

  currentDate:string = "";
 
  activoModel = model(true)

  private usuarioActivoSignal = signal(true);
 
  constructor(){
    setInterval( () => {
      this.currentDate = (new Date()).toISOString();
    },1000)
    this.usuarioActivoSignal.set(false)
   // this.usuarioActivoSignal.update(value=> true)
    //this.usuarioActivoSignal.update((value) => value =true)
   
  }


nombre:string = 'Elmer Mesias Malca Palomino para transform hijo1 ';
dataUsuario :Usuario  =  { codiPer: 123,  codiUsu: 'emalcap',  dniPer: '40043354'}

lstUsuarios :Usuario[]=[{ codiPer: 1,  codiUsu: 'elmerMalcap',  dniPer: '11111111'},
                          { codiPer: 2,  codiUsu: 'mesiasMalcap',  dniPer: '22222222'},
                          { codiPer: 3,  codiUsu: 'malcaPalomino',  dniPer: '33333333'}
                        ]
usuarios :Usuario[]=[]

datosUsurioHijo1_2?:Usuario;

modificar(){
  
  this.nombre ='Modificardo Elmer Mesias Malca Palomino transform hijo 1'
  this.dataUsuario   =  { codiPer: 777,  codiUsu: 'Elmer',  dniPer: '88888888'}
  this.usuarios = this.lstUsuarios;
  //console.log(this.usuarios)
  
}



datosHijo(datosHijo:any){
   //console.log("datosHijo")
   //this.dataUsuario= datosHijo;
   //console.log(this.dataUsuario)
   this.datosUsurioHijo1_2 = datosHijo;
   

}

}
