import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail:[''],
      password:[''],
      position:[''],
      language: ['']
    })
  }
  logIn() {
    this._http.get<any>("http://localhost:3000/register").subscribe(res=>{
      const user = res.find((a:any)=> {
        return a.mail === this.loginForm.value.mail && a.password === this.loginForm.value.password
      })
      if (user){
        alert("Login was successful");
        this.loginForm.reset();
        this.router.navigate(['layout'])
      } else{
        alert("There was an error, check email and password and try again")
      }
    },err=>{
      alert("server-side error")
    })

    
  }


}
