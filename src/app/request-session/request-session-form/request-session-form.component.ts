import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../service/session.service";
import DatepickerOptions = M.DatepickerOptions;
import {Topic} from "../../model/topic";

@Component({
  selector: 'app-request-session-form',
  templateUrl: './request-session-form.component.html',
  styleUrls: ['./request-session-form.component.css']
})
export class RequestSessionFormComponent implements OnInit, AfterViewInit {

  firstName = 'Emil';
  lastName = "Noirhomme";

  private _requestSessionForm = new FormGroup({
    'topicId': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'time': new FormControl('', [Validators.required]),
    'location': new FormControl('', [Validators.required]),
    'remarks': new FormControl('')
  });
  private datePickerElem: any;
  private timePickerElem: any;
  topics: Topic[] = [
    {
      id: '0dab9a2a-7ea2-11ec-90d6-0242ac120003',
      topicName: 'BIOLOGY'
    },
    {
      id: 'cab03db4-7e94-11ec-90d6-0242ac120003',
      topicName: 'MATHEMATICS'
    }, {
      id: '44ff86a8-7ea7-11ec-90d6-0242ac120003',
      topicName: 'JAVA'
    }];

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  get topicId(): FormControl {
    return this._requestSessionForm!.get('topicId') as FormControl;
  }

  get date(): FormControl {
    return this._requestSessionForm!.get('date') as FormControl;
  }

  get time(): FormControl {
    return this._requestSessionForm!.get('time') as FormControl;
  }

  get location(): FormControl {
    return this._requestSessionForm!.get('location') as FormControl;
  }

  get remarks(): FormControl {
    return this._requestSessionForm!.get('remarks') as FormControl;
  }


  get requestSessionForm(): FormGroup {
    return this._requestSessionForm;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeDatePicker();
      this.initializeTimePicker()
    }, 1);
  }

  onSubmit(): void {
    console.log(this._requestSessionForm.value);
    this.requestSession();
  }

  requestSession() {
    // let sessionToRequest: CreateSession = {
    //   'topicId': 'string',
    //   'date': string,
    //   'time': string,
    //   'location': string,
    //   'remarks': string,
    //   'coachId': string,
    //   'coacheeId': string
    // }
    // this.sessionService.requestSession()
  }

  private initializeDatePicker(): void {
    const elems = document.querySelectorAll('.datepicker');
    const instances = M.Datepicker.init(elems, {
      format: 'dd/mm/yyyy',
      onClose: () => {
        this._requestSessionForm.patchValue({date: this.datePickerElem.toString()});
        this._requestSessionForm.updateValueAndValidity({onlySelf: false, emitEvent: true});
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
        this._requestSessionForm.patchValue({time: this.timePickerElem.time});
        this._requestSessionForm.updateValueAndValidity({onlySelf: false, emitEvent: true});
      }
    });
    for (const instance of instances) {
      if (instance !== undefined) {
        this.timePickerElem = instance;
      }
    }
  }

}
