import {Component, OnInit} from '@angular/core';
import {Event as RouterEvent, NavigationStart, Router} from "@angular/router";
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
    {name: 'Übersicht', path: '/overview'},
    {name: 'Textbausteine', path: '/textblocks'}
  ];

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(filter((e: RouterEvent): e is NavigationStart =>
      e instanceof NavigationStart))
      .subscribe((e: NavigationStart) => {
        this.editMenuEntriesDependingOnRoute(e.url);
      });
  }

  editMenuEntriesDependingOnRoute(url: string) {
    const offerIsOpenedAndOfferIsntInMenu: boolean =
      url.includes('offer') && !this.themes.some((t) => t.name === 'Angebot');
    const otherSiteThanOfferIsOpenedAndOfferIsInMenu: boolean =
      !url.includes('offer') && this.themes.some((t) => t.name === 'Angebot');

    if (offerIsOpenedAndOfferIsntInMenu) {
      this.addOfferToMenu(url);
    } else if (otherSiteThanOfferIsOpenedAndOfferIsInMenu) {
      this.removeOfferFromMenu();
    }
  }

  addOfferToMenu(url: string) {
    this.themes.splice(1, 0, {name: 'Angebot', path: url});
  }

  removeOfferFromMenu() {
    this.themes.splice(1, 1)
  }

}
