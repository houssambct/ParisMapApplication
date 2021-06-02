import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./footer/footer.component";
import { MapComponent } from "./map/map.component";
import { TextFieldModule } from "@angular/cdk/text-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DialogInformationsComponent } from "./dialog-informations/dialog-informations.component";
import { MatDialogModule } from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import { StartDialogInformationsComponent } from './start-dialog-informations/start-dialog-informations.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MapComponent,
    DialogInformationsComponent,
    StartDialogInformationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LeafletModule,
    TextFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogInformationsComponent,StartDialogInformationsComponent]

})
export class AppModule {}
