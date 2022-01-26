import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../service/session.service";
import DatepickerOptions = M.DatepickerOptions;

@Component({
  selector: 'app-request-session-form',
  templateUrl: './request-session-form.component.html',
  styleUrls: ['./request-session-form.component.css']
})
export class RequestSessionFormComponent implements OnInit, AfterViewInit {

  firstName = 'Emil';
  lastName = "Noirhomme";

  requestSessionForm = new FormGroup({
    'topicId': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'time': new FormControl('', [Validators.required]),
    'location': new FormControl('', [Validators.required]),
    'remarks': new FormControl('')
  });
  private datePickerElem: any;
  private timePickerElem: any;


  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  get topicId(): FormControl {
    return this.requestSessionForm!.get('topicId') as FormControl;
  }

  get date(): FormControl {
    return this.requestSessionForm!.get('date') as FormControl;
  }

  get time(): FormControl {
    return this.requestSessionForm!.get('time') as FormControl;
  }

  get location(): FormControl {
    return this.requestSessionForm!.get('location') as FormControl;
  }

  get remarks(): FormControl {
    return this.requestSessionForm!.get('remarks') as FormControl;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {this.initializeDatePicker(); this.initializeTimePicker()}, 1);
  }

  onSubmit(): void {
    this.requestSession();
  }

  requestSession() {
    console.log(this.requestSessionForm.value);
  }

  private initializeDatePicker(): void {
    const elems = document.querySelectorAll('.datepicker');
    const instances = M.Datepicker.init(elems, {
      format: 'dd/mm/yyyy',
      onClose: () => {
        this.requestSessionForm.patchValue({date: this.datePickerElem.toString()});
        this.requestSessionForm.updateValueAndValidity({onlySelf: false, emitEvent: true});
      }
    } as DatepickerOptions);

    for (const instance of instances) {
      if (instance !== undefined) {
        this.datePickerElem = instance;
      }
    }
  }

  private initializeTimePicker(): void {
    const elems = document.querySelectorAll('.timepicker');
    const instances = M.Timepicker.init(elems, {
      'twelveHour': false,
      'onCloseEnd': _ => {
        this.requestSessionForm.patchValue({time: this.timePickerElem.time});
        this.requestSessionForm.updateValueAndValidity({onlySelf: false, emitEvent: true});
      }
    });
    for (const instance of instances) {
      if (instance !== undefined) {
        this.timePickerElem = instance;
      }
    }
  }

}
