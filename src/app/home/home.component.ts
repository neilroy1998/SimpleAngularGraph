import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HomeDashServiceService } from '../home-dash-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public welcome_text: string = "Welcome to Graphs!!!";

  constructor(private router: Router, private homeDashNameService: HomeDashServiceService) { 
  }

  ngOnInit() {
    document.getElementById("errText").style.display = "none";
  }

  openDash() {
    var name: string = ((document.getElementById("searchTextInput") as HTMLInputElement).value);
    if (name.trim() === '') {
      document.getElementById("errText").style.display = "block";
      return;
    }
    document.getElementById("errText").style.display = "none";
    console.log(name);
    this.homeDashNameService.getHomeDashName(name);
    this.router.navigate(['/dash']);
  }

}
