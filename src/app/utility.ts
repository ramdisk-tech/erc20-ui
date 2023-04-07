import { HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { ChaincodeListener } from './listener/chanicode-listener';
// import { SpinnerListener } from './listener/spinner-listener';

export class Utility {
//   public static spinnerListener: SpinnerListener;
//   public static chaincodeListener: ChaincodeListener;
  public static spinnerText = ""
  public static showLoader = true;

  getToken() {
    if (localStorage.getItem('user-profile')) {
      let data = JSON.parse(localStorage.getItem('user-profile') || '');
      return data.token
    } else {
      return undefined;
    }
  }

  Utility() {
    //  this.profile = JSON.parse(localStorage.getItem('profile'));
  }

  convertMinutesToTimeFormat(duration: number): string {
    var time = ""
    if (duration >= 3600) {

    } else if (duration >= 60) {
      //console.log((Math.floor(duration / 60)) );
      var remainder = duration % 60;
      if (remainder >= 10) {
        time = (Math.floor(duration / 60)) + ":" + remainder
      } else {
        time = (Math.floor(duration / 60)) + ":0" + remainder
      }
    } else {
      //console.log('else '+(Math.floor(duration / 60)) );
      var remainder = duration % 60;
      if (remainder >= 10) {
        time = "0:" + remainder
      } else {
        time = "0:0" + remainder
      }
    }
    return time;
  }
  public convertMillisToDate(millis: any) {
    var m = new Date(millis);
    var dateString = m.getFullYear() + "/" + (m.getMonth() + 1) + "/" + m.getDate() + " " + m.getHours() + ":" + m.getMinutes() + ":" + m.getSeconds();
    return dateString;
  }
  public getDate(datetime: string): string {
    var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    var d = new Date(datetime);
    var timestamp = monthShortNames[d.getMonth()] + " " + d.getDate() + "," + d.getFullYear();
    return timestamp;
  }

  public getHttpOptions() {
    return {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
  }
  public getCurrentTime(): string {
    var d = new Date();
    var timestamp = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return timestamp;
  }
  public getOnlyDate(d: any) {
    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }
  public formatAMPM(date: any) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  getCurrentTimeInMills(): string {
    var d = new Date();
    return d.getTime() + "";
  }
  public showSnackBar(snackBar: MatSnackBar, message: string) {
    var className = 'blue-snackbar'
    snackBar.open(message, '', {
      duration: 3000,
      panelClass: [className]
    });
  }
  public getUserProfile(): any {
    if (localStorage.getItem('user-profile')) {
      let data = JSON.parse(localStorage.getItem('user-profile') || '');
      return data
    } else {
      return undefined;
    }

  }
  public getUserSubscriptionType(): any {
    if (localStorage.getItem('user-profile')) {
      let data = JSON.parse(localStorage.getItem('user-profile') || '');
      return data.type;
    } else {
      return undefined;
    }

  }
  public getUserId(): any {
    if (localStorage.getItem('user-profile')) {
      let data = JSON.parse(localStorage.getItem('user-profile') || '');
      return data.userId
    } else {
      return undefined;
    }
  }
  timestampToDate(timestamp: any) {
    var date = new Date(timestamp).toLocaleDateString("en-us");
    return date;
  }

  padTo2Digits(num: any) {
    return num.toString().padStart(2, '0');
  }

  convertSecondsToMinutes(milliseconds: number) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.round((milliseconds % 60000) / 1000);

    return seconds === 60
      ? `${minutes + 1}:00`
      : `${minutes}:${this.padTo2Digits(seconds)}`;
  }
  getCurrencyType(): string {
    if (localStorage.getItem('country_code') === 'IN') {
      return "INR"
    } else
      return "USD"
  }
  getPrice(amount: any): any {
    if (localStorage.getItem('country_code') === 'IN') {
      return amount
    } else
      return Math.round(((amount / 76.33)));
  }
  getTime(d: any) {
    var date = new Date(d);
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }
}