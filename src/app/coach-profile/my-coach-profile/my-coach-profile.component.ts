import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {UserService} from "../../service/user.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-my-coach-profile',
  templateUrl: './my-coach-profile.component.html',
  styleUrls: ['./my-coach-profile.component.css']
})
export class MyCoachProfileComponent implements OnInit, AfterViewInit {

  user = {
    "firstName": "Laurie"
  }

  @Input() selectedUser?: User;

  constructor(private materializeService: MaterializeService, private userService: UserService) { }


  ngOnInit(): void {
    this.getUserById();

  }

  ngAfterViewInit(): void {
    this.materializeService.autoInit();
  }

  getUserById(): void{
    this.userService.getLoggedInUser().subscribe(user => {
      this.selectedUser = user
    });

  }


  getUser(): any {
    return this.user;
  }

  getSelectedUser(): User | undefined{
    return this.selectedUser;
  }
}
