import { Component, OnInit } from "@angular/core";
import {LoginUser} from "./models/login-user";
import {UserService} from "../../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginUser: LoginUser = {
    username: "",
    secretWord: ""
  };
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.loginUser)
        .subscribe(data => {
          location.replace("/home");
        });
  }

}
