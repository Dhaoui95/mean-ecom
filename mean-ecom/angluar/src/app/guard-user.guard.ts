import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogComponent } from './share/dialog/dialog.component';
import { UserService } from './share/user.service';

@Injectable()
export class GuardUserGuard implements CanActivate {
  constructor(
    private userService:UserService,
    private router: Router,
    public dialog: MatDialog,
    ) { }
  canActivate() {
    if (this.userService.getUser()) {
      
      return true;
     
      
    } else {

      let _html=`
                <div class="c-red">
                  <div class="material-icons">error_outline</div>
                  <h1>Please log in!</h1>
                </div>`;
      this.openDialog(_html);

      this.router.navigate(['/login']);
      return false;
      
    }
 
  
}

openDialog(_html) {
  let dialogRef = this.dialog.open(DialogComponent, {
      data: {
        html: _html,
      }
  });
  setTimeout(() => {
    dialogRef.close();
  }, 3000);
}
}
  

