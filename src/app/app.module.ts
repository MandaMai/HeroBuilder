import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { ArchetypesComponent } from './archetypes/archetypes.component';
import { BuilderComponent } from './builder/builder.component';
import { ReferencesComponent } from './references/references.component';
import { StylesheetComponent } from './stylesheet/stylesheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlignmentComponent,
    CharacteristicsComponent,
    ArchetypesComponent,
    BuilderComponent,
    ReferencesComponent,
    StylesheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
