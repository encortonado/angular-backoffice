import { Component, OnInit } from '@angular/core';
import { library_menu } from 'src/app/shared/utils/menu/menu-tabs';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {


  public menu_tabs = library_menu;

  public showoutlet = false;
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
   
    this.checkRoute();

  }

  private checkRoute() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menu_tabs.forEach(tab => {
          if (this.router.url === tab.href) {
            this.showoutlet = true;
          }
        });
      }
    });
  }



}
