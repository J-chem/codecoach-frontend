import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private materializeService: MaterializeService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.materializeService.initSidenav();
    this.materializeService.sidenavTriggerInit();
  }

}
