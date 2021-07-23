import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {OfferComponent} from "./offer/offer.component";
import {TextBlockComponent} from "./textBlock/textBlock.component";

const routes: Routes = [
  {path: 'textblocks', component: TextBlockComponent},
  {path: 'offer/:id', component: OfferComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'overview', component: OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
