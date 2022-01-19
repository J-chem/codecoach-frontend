import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, AfterViewInit {

  constructor(private materializeService : MaterializeService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
