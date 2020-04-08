//import { ClientListModule } from './client-list.module';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './container/client-list.component';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientCardComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    ClientListComponent
  ],
  exports: [
    ClientListComponent,
    ClientCardComponent
  ],
})
export class ClientListModule {
  
}
