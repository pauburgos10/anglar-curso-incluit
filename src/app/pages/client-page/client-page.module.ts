import { ClientListModule } from './../../features/client-list/client-list.module';
import { ClientFormModule } from '../../features/client-form/client-form.module';
import { NgModule } from '@angular/core';
import { ClientPageComponent } from './client-page.component';
import { ClientPageRoutingModule } from './client-page.routing';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        ClientPageRoutingModule,
        ClientListModule,
        ClientFormModule
    ],
    declarations: [ClientPageComponent],
    entryComponents: [ClientPageComponent],
    exports: [ClientPageComponent]
})
export class ClientPageModule { }
