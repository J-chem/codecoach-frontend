import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";

@Component({
  selector: 'app-main-en',
  templateUrl: './main-en.component.html',
  styleUrls: ['./main-en.component.css']
})
export class MainEnComponent implements OnInit, AfterViewInit {

  constructor(private materializeService: MaterializeService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }


}
