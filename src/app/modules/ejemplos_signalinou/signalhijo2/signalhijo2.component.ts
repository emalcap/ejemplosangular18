import { Component, effect, input } from '@angular/core';
import { Usuario } from '../model_usuario';

@Component({
  selector: 'app-signalhijo2',
  standalone: true,
  imports: [],
  templateUrl: './signalhijo2.component.html',
  styleUrl: './signalhijo2.component.scss'
})
export class Signalhijo2Component  {

  dataUsu_input2 = input<Usuario|null>();

 constructor(){
  effect(() => {
    if(this.dataUsu_input2()){
        alert('Enviar por output hijo1 -> padre - padre input-> hijo 2')
    }
  })
 }
}
