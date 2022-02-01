import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {
  location?: string;

  constructor(private materializeService: MaterializeService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(result => {
      if(result instanceof NavigationEnd){
        this.location = window.location.pathname;
      }
    })
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
