import { Component } from '@angular/core';
// Services
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorsApp';
  constructor(
    private usersService: UsersService
  ) {
    this.usersService.getUsers()
      .subscribe( resp => console.log( resp ) )
  }
}
