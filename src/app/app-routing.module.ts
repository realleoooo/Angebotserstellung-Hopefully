import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UebersichtComponent} from "./uebersicht/uebersicht.component";
import {AngebotComponent} from "./angebot/angebot.component";
import {TextbausteineComponent} from "./angebot/stepper/ausgangssituation/textbausteine/textbausteine.component";

const routes: Routes = [
  {path: 'textbausteine', component: TextbausteineComponent},
  {path: 'angebot/:id', component: AngebotComponent},
  {path: 'angebot', component: AngebotComponent},
  {path: 'uebersicht', component: UebersichtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
