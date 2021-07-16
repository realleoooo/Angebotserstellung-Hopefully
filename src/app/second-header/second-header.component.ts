import {Component, OnInit} from '@angular/core';
import {Router, Event as RouterEvent, NavigationStart} from "@angular/router";
import {filter} from "rxjs/operators";

interface Theme {
  name: string;
  path: string;
};

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.scss']
})
export class SecondHeaderComponent implements OnInit {
  themes: Theme[] = [
    {name: 'Übersicht', path: '/uebersicht'},
    {name: 'Textbausteine', path: '/textbausteine'}
  ];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.events.pipe(filter((e: RouterEvent): e is NavigationStart =>
      e instanceof NavigationStart))
      .subscribe((e: NavigationStart) => {
        this.handleRoute(e.url);
      });
  }

  handleRoute(url: string) {
    const offerIsOpenedAndOfferIsntInMenu: boolean =
      url.includes('angebot') && !this.themes.some((t) => t.name === 'Angebot');
    const otherSiteThanOfferIsOpenedAndOfferIsInMenu: boolean =
      !url.includes('angebot') && this.themes.some((t) => t.name === 'Angebot');

    (offerIsOpenedAndOfferIsntInMenu)?
      this.addOfferToMenu(url):
    (otherSiteThanOfferIsOpenedAndOfferIsInMenu)?
      this.removeOfferFromMenu()  : null;
  }

  addOfferToMenu(url : string){
    this.themes.splice(1, 0, {name: 'Angebot', path: url});
  }

  removeOfferFromMenu(){
    this.themes.splice(1,1)
  }
}
