import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../service/session.service";
import DatepickerOptions = M.DatepickerOptions;
import {CreateSession} from "../../model/create-session";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-request-session-form',
  templateUrl: './request-session-form.component.html',
  styleUrls: ['./request-session-form.component.css']
})
export class RequestSessionFormComponent implements OnInit {

  private _requestSessionForm = new FormGroup({
    'topicId': new FormControl('', [Validators.required]),
    'date': new FormControl('', [Validators.required]),
    'time': new FormControl('', [Validators.required]),
    'location': new FormControl('', [Validators.required]),
    'remarks': new FormControl('')
  });

  private datePickerElem: any;
  private timePickerElem: any;

  coach$!: Observable<User>;

  constructor(private sessionService: SessionService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.getCoach();
  }

  onSubmit(): void {
    this.requestSession();
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

  requestSession() {
    let coachee: string = localStorage.getItem('uuid')!;
    let sessionToRequest: CreateSession = {
      topicId: this.topicId.value,
      date: this.date.value,
      time: this.time.value,
      location: this.location.value,
      remarks: this.remarks.value,
      coachId: this.activatedRoute.snapshot.params['id'],
      coacheeId: coachee
    };
    console.log(sessionToRequest);
    this.sessionService.requestSession(sessionToRequest).subscribe(session => {
      if (session) {
        this.router.navigate(['profile']).then();
      }
    });
  }

  private initializeSelect(): void {
    const elements = document.querySelectorAll('select');
    M.FormSelect.init(elements);
  }

  private initializeDatePicker(): void {
    const elems = document.querySelectorAll('.datepicker');
    const instances = M.Datepicker.init(elems, {
      format: 'yyyy-mm-dd',
      onClose: () => {
        this._requestSessionForm.patchValue({date: this.datePickerElem.toString()});
        this._requestSessionForm.updateValueAndValidity({onlySelf: false, emitEvent: true});
      },
      minDate: new Date(Date.now() + 86400000)
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

  private getCoach() {
    const coachId = this.activatedRoute.snapshot.params['id'];
    this.coach$ = this.userService.getUserById(coachId).pipe(tap((user) => {
      console.log(user);
      setTimeout(() => {
        this.initializeDatePicker();
        this.initializeTimePicker();
        this.initializeSelect();
      }, 1);
    }));
  }

}
