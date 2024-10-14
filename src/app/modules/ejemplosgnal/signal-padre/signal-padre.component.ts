import { Component, ElementRef, Signal, viewChild } from '@angular/core';
import { SignalHijoComponent } from '../signal-hijo/signal-hijo.component';

@Component({
  selector: 'app-signal-padre',
  standalone: true,
  imports: [SignalHijoComponent],
  templateUrl: './signal-padre.component.html',
  styleUrl: './signal-padre.component.scss'
})
export class SignalPadreComponent {

nombreSignal:Signal<ElementRef|undefined> = viewChild('identificadorhtml')

inputNombreSignal:Signal<ElementRef> = viewChild.required('inputIdentificadorhtml')

onClick(){
   console.log( this.nombreSignal()?.nativeElement)
  this.nombreSignal()?.nativeElement.focus()
  this.nombreSignal()!.nativeElement.style.borderColor  = 'red'
  console.log( this.nombreSignal()?.nativeElement.value)

  console.log( this.inputNombreSignal().nativeElement)
   this.inputNombreSignal().nativeElement.focus()
  this.inputNombreSignal().nativeElement.style.borderColor  = 'red'
}

}
