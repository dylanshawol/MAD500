import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(updates: SwUpdate, private _snackBar: MatSnackBar) {
    updates.available.subscribe(event => {
      this.openSnackBar("current version is " + event.current, "OK");
      this.openSnackBar("available version is " + event.available, "OK");

      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });

    updates.activated.subscribe(event => {
      this.openSnackBar("old version was " +  event.previous, "OK");
      this.openSnackBar("new version is " + event.current, "OK");

      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action)
  }
}
