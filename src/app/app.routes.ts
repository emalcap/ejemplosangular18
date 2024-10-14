import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'signal', loadComponent: () =>
            import('./modules/ejemplosgnal/signal-padre/signal-padre.component').then((c) => c.SignalPadreComponent)
    },
    {
        path: 'signalinpout', loadComponent: () =>
            import('./modules/ejemplos_signalinou/signalpadreinout/signalpadreinpout.component').then((c) => c.SignalpadreComponent)
    },   
   

];