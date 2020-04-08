import { LocationService } from './services/location.service';
import { LocationEffects } from './store/location.effects';
import { ClientFormComponent } from './container/client-form.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromLocationReducer from './store/location.reducer';



@NgModule({
  declarations: [
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('location', fromLocationReducer.reducer),
    EffectsModule.forFeature([LocationEffects]),
    EffectsModule.forRoot([])
  ],
  entryComponents: [
    ClientFormComponent
  ],
  exports: [
    ClientFormComponent
  ],
  providers: [
    LocationService
  ]
})
export class ClientFormModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ClientFormModule
    }
  };
}
