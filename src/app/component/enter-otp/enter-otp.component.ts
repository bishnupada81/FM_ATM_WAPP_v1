import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enter-otp',
  templateUrl: './enter-otp.component.html',
  styleUrls: ['./enter-otp.component.css']
})
export class EnterOtpComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public setOtpForm = new FormGroup({
    setOtp: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.maxLength(4),
         Validators.minLength(4)]
         ),
  })

  public get setOtp() {
    return this.setOtpForm.get('setOtp');
  }

  public setOtpFormSubmit(): void {

    Swal.fire({

      title: "Withdraw Successfull",
      confirmButtonText: "Okay",

  }).then((_result) => {

     this._router.navigate(['/']);

   });
    
  }


}
