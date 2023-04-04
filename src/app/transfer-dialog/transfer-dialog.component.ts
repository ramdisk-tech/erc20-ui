import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data } from '@angular/router';
import { ApiService } from 'src/api-service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-transfer-dialog',
  templateUrl: './transfer-dialog.component.html',
  styleUrls: ['./transfer-dialog.component.scss']
})
export class TransferDialogComponent implements OnInit {
  form = new FormGroup({
    to: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
  });
  utility: any;

  constructor(private apiService:ApiService,public dialogRef: MatDialogRef<AppComponent, any>,
    @Inject(MAT_DIALOG_DATA) public dialogData: Data,private snackBar:MatSnackBar) { }

    close() {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

  request:any
  onSubmit() {
    this.request = this.form.value;
    // this.request['userId'] = this.userId;
    this.apiService.tokenSave(this.request).subscribe((response: any) => {
      if (response.status == 0) {
        this.utility.showSnackBar(this.snackBar, 'Token Created sucessfully');
        this.dialogRef.close(response);
      }
      else {
        this.utility.showSnackBar(this.snackBar, 'Token Created Unsucessfully');
        this.dialogRef.close(response);
      }
    })
  }

}
