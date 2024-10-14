import { Component, contentChild, ElementRef, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-signal-hijo',
  standalone: true,
  imports: [],
  templateUrl: './signal-hijo.component.html',
  styleUrl: './signal-hijo.component.scss'
})
export class SignalHijoComponent {

  inputContehijo : Signal<ElementRef|undefined> = contentChild('inputIdentificadorhtmlHijo')
  
   ngAfterViewInit(){
    alert(100)
     this.inputContehijo()?.nativeElement.addEventListener(onchange,() =>{
      console.log('desde el hijo ')
      alert('eventoHijo')
     })
   }

}
