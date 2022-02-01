import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.css']
})
export class EditMyProfileComponent implements OnInit {

  @Input() user$!: Observable<User>;
  editProfileForm: FormGroup = this.formBuilder.group({
    id: '',
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: '',
    team: ['', [Validators.required]]
  });


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
    ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.user$.subscribe(value => this.editProfileForm.patchValue(value));
  }


  onSubmit(editedProfile: User) : void {
    this.userService.saveProfile(editedProfile).subscribe();
    this.router.navigateByUrl("/my-profile").then();
  }
}
