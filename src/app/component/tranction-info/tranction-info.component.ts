import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tranction-info',
  templateUrl: './tranction-info.component.html',
  styleUrls: ['./tranction-info.component.css'],
  providers: [DatePipe]

})
export class TranctionInfoComponent implements OnInit {

  constructor(private datePipe: DatePipe,private _router: Router) {
  }


  ngOnInit(): void {
  }
 currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');

 public goToProceed(): void{
   this._router.navigateByUrl('/enter-otp');

}
public goToDecline(): void{
 this._router.navigateByUrl('/');

}


}
