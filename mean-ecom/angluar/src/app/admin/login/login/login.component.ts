import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/share/dialog/dialog.component';
import { UserService } from 'src/app/share/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  customError2 = {status: false, message:''};

  constructor(
    private fb: FormBuilder,
    private userService:UserService,
    private router: Router,
    public dialog: MatDialog,
  ) {

      this.loginForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });

  }

  ngOnInit(): void {
    console.log('environment--', environment.api_url);
  }
  get flog() { return this.loginForm.controls; }

  async adminLogin(){
    console.log('adminLogin');
    if (!this.loginForm.invalid) {

      const res = await this.userService.adminLogin(this.loginForm.value);
      // console.log('resxx-', res);
      if(res.status === 200){
        if(res.data.data.roles[0] === "ROLE_ADMIN"){

          // console.log('data-login-', res.data);
          sessionStorage.setItem("admin-data", JSON.stringify(res.data.data));
          let _html=`
                  <div class="c-green">
                    <div class="material-icons">task_alt</div>
                    <h1>Admin Login Success!</h1>
                  </div>`;
          this.openDialog(_html);

          this.loginForm.reset();
          this.router.navigate(["/admin/dashboard"]);
        }else{
          this.customError2.status = true;
          this.customError2.message = 'Require Admin Role!';
          return;
        }

      }else{
        this.customError2.status = true;
        this.customError2.message = res.data.message;
        return;
      }
    } else {
        //--Form input is not valid
        this.loginForm.markAllAsTouched(); //--Trigger validation across form
        console.log('block submission');
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
    }, 2000);
  }
}
