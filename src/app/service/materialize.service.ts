import {Injectable} from '@angular/core';
import * as M from 'materialize-css';

@Injectable({
  providedIn: 'root'
})
export class MaterializeService {

  constructor() {
  }

  dropdownInit() {
    setTimeout(() => {
      M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {coverTrigger: false});
    }, 1);
  }

  initSidenav() {
    setTimeout(() => {
      console.log('init sidenav');
      M.Sidenav.init(document.querySelectorAll('.sidenav'));
    }, 1);
  }

  sidenavTriggerInit() {
    setTimeout(() => {
      M.Dropdown.init(document.querySelectorAll('.sidenav-trigger'), );
    }, 1);
  }

  autoInit(){
    setTimeout(() => {
      M.AutoInit();
    }, 1)
  }
}
