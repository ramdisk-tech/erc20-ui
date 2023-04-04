import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data } from '@angular/router';
import { ApiService } from 'src/api-service';

@Component({
  selector: 'app-transfer-from',
  templateUrl: './transfer-from.component.html',
  styleUrls: ['./transfer-from.component.scss']
})
export class TransferFromComponent implements OnInit {
  form = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
  });
  utility: any;

  constructor(private apiService:ApiService,public dialogRef: MatDialogRef<AppComponent, any>,
    @Inject(MAT_DIALOG_DATA) public dialogData: Data,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
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
