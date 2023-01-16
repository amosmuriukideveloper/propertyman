import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: [''],
      secondname: [''],
      mail: [''],
      position: [''],
      buildingname: [''],
      mobile: [''],
      password: [''],
      rpassword: ['']
    })
  }

  // registerUp Method
  registerUp() {
    this._http.post<any>("http://localhost:3000/register", this.registerForm.value).subscribe(res => {
      alert("Registration Completed Successfully");
      this.registerForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert("Registration Failed. Try Again")
    }
    )
  }
}
