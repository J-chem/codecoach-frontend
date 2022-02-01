import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user$!: Observable<User>;
  editMode!: boolean;

  constructor(
    private userService: UserService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = localStorage.getItem('uuid');
    this.user$ = this.userService.getUserById(id);
  }

  passTheUser(user$: Observable<User>) {
    this.editMode = true;
    this.user$ = user$;
  }
}
