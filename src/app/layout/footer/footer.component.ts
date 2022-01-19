import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor(private materializeService: MaterializeService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
