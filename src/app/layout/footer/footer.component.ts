import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor(private materializeService: MaterializeService) { }

  location?: string;

  ngOnInit(): void {

    this.location = window.location.pathname;
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
