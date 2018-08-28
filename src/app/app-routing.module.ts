import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { ArchetypesComponent } from './archetypes/archetypes.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { BuilderComponent } from './builder/builder.component';
import { ReferencesComponent } from './references/references.component';
import { StylesheetComponent } from './stylesheet/stylesheet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'alignment', component: AlignmentComponent },
  { path: 'archetypes', component: ArchetypesComponent },
  { path: 'characteristics', component: CharacteristicsComponent },
  { path: 'builder', component: BuilderComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'stylesheet', component: StylesheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
