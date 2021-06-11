import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import { DialogComponent } from 'src/app/share/dialog/dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //imgPath: string = environment.image_path;
  menu = {main: false, child: false}
  userData;
  imgPath: string = environment.image_path;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService
    ) { }

  ngOnInit() {
    
   
  
  }
 
  mainOver(){
    this.menu.main = true;
  }
  mainOut(){
    this.menu.main = false;
  }
  childOver(){
    this.menu.main = false;
    this.menu.child = true;
  }
  childOut(){
    this.menu.child = false;
  }
  openDialog(_html) {
    let dialogRef = this.dialog.open(DialogComponent, {
        data: {
          html: _html,
        }
    });
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
  }
  logout(){
    sessionStorage.removeItem("user-data");
    let _html=`
      <div class="c-red">
        <div class="material-icons">task_alt</div>
        <h1>Logout Success!</h1>
      </div>`;
    this.openDialog(_html);
    this.router.navigate(["home"]);
  }

  get user(){
    
    if(sessionStorage.getItem("user-data")){
      //console.log(this.userData)
      this.userData = JSON.parse(sessionStorage.getItem("user-data"));
    }
    return this.userData? this.userData: false;
    
  }


}