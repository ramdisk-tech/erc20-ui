import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AssetDialogComponent } from './asset-dialog/asset-dialog.component';
import { URLS } from './urls';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/api-service';
import { TransferFromComponent } from './transfer-from/transfer-from.component';
import { BurnDialogComponent } from './burn-dialog/burn-dialog.component';
import { TransferDialogComponent } from './transfer-dialog/transfer-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Utility } from './utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userDataSource = new MatTableDataSource();
  transactionsDataSource = new MatTableDataSource();
  mintForm = new FormGroup({
    amount: new FormControl('', Validators.required),
  });
  transferFromForm = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
  });
  clientAccountBalanceForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  transferForm = new FormGroup({
    to: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
  });
  BalanceOfForm = new FormGroup({
    user: new FormControl('', Validators.required),
  });
  burnForm = new FormGroup({
    amount: new FormControl('', Validators.required),
  });
  appUserForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  filterDataLength = -1;
  public pageSize = 5;
  public page = 1;
  dataSource = new MatTableDataSource();
  title = 'frontend';
  assets = [];
  // tokenColumns: string[] = ['id', 'userName', 'password', 'role'];
  userColumns: string[] = ['id', 'userName', 'password', 'role', 'created'];
  transactionsColumns: string[] = ['id', 'name','created'];
  response: any = [];
  usersResponse: any = [];
  transactionsResponse: any = [];
  showUi = false;
  utility: any;
  roles = [{
    name: 'Admin'
  },
  {
    name: 'Client'
  },
  ]

  constructor(private _http: HttpClient, private dialog: MatDialog, private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute,
    private apiService: ApiService,) {
      this.utility=new Utility();
      this.tokenInfo();

  }
  ngOnInit() {

  }

  // ngAfterViewInit() {
  //   this.userDataSource.sort = this.sort;
  //   this.userDataSource.paginator = this.paginator;
  // }

  ngAfterViewInit() {
    this.transactionsDataSource.sort = this.sort;
    this.transactionsDataSource.paginator = this.paginator;
  }

  tokenInfo() {
    this.apiService.tokenListById().subscribe((response: any) => {
      this.response = response;
      this.dataSource.data = response.data;
      console.log("token list : " + this.dataSource.data);
      this.showUi = true;
    });

    this.apiService.erc20UsersList().subscribe((response: any) => {
      this.usersResponse = response;
      this.userDataSource.data = response;
      console.log("user list : " + this.userDataSource);
      this.showUi = true;
    });

    this.apiService.transactionsList(28).subscribe((response: any) => {
      this.transactionsResponse = response;
      this.transactionsDataSource.data = response;
      console.log("user list : " + this.transactionsDataSource);
      this.showUi = true;
    });
  }
  editRow(asset: any, index: number) {
    const dialogRef = this.dialog.open(AssetDialogComponent, {
      width: '500px', height: '100vh', position: { right: '0' }, data: asset

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data[index] = (result)
        this.dataSource._updateChangeSubscription();
      }
    });
  }
  // delete(asset:any,index:number){
  //   this._http.post<any>(URLS.DELETE,JSON.stringify({"id":asset.ID}),this.httpOptions).subscribe((data:any) => {
  //     console.log(data);
  //     this.dataSource.data.splice(index,1)
  //     this.dataSource._updateChangeSubscription();
  //     this.snackBar.open(asset.ID+ ' deleted', '', {duration:1000
  //     });
  //      })
  // }
  addNewAsset() {
    const dialogRef = this.dialog.open(AssetDialogComponent, {
      width: '500px', height: '100vh', position: { right: '0' },

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.push(result)
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  transferFromSave() {
    // if (this.utility.getUserProfile().role===0) {
    //   this.utility.showSnackBar(this.snackBar, " Deployments are not allowed for the test app")
    //   return;
    // }
    const dialogRef = this.dialog.open(TransferFromComponent, {
      width: '40vw', position: { right: '0' }, height: '100vh', autoFocus: false, data: {}
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  transferSave() {
    const dialogRef = this.dialog.open(TransferDialogComponent, {
      width: '40vw', position: { right: '0' }, height: '100vh', autoFocus: false, data: {}
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  burnSave() {
    const dialogRef = this.dialog.open(BurnDialogComponent, {
      width: '40vw', position: { right: '0' }, height: '100vh', autoFocus: false, data: {}
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // ngAfterViewInit() {
  //   console.log('after ininti');
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }

  request: any

  onSubmitUser() {
    this.request = this.appUserForm.value;
    this.request['organizationId'] = 1610;
    this.apiService.appUserSave(this.request).subscribe((response: any) => {
      if (response.status == 0) {
        this.utility.showSnackBar(this.snackBar, 'Token Created sucessfully');
        // this.dialogRef.close(response);
        this.appUserForm.reset();
      }
      else {
        this.utility.showSnackBar(this.snackBar, 'Token Created Unsucessfully');
        // this.dialogRef.close(response);
      }
    })
  }
  onSubmit() {
    this.request = this.mintForm.value;
    this.apiService.mintSave(this.request).subscribe((response: any) => {
      this.tokenInfo();
      if (response.status == 0) {
        this.snackBar.open("Minted Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Minting failed", "X", { "duration": 3000 });
      }
    })
  }

  onSubmitTransferFrom() {
    this.request = this.transferFromForm.value;
    // this.request['userId'] = this.userId;
    this.apiService.transferFromSave(this.request).subscribe((response: any) => {
      this.tokenInfo();

      if (response.status == 0) {
        this.snackBar.open("Transfer Form Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Transfer From failed", "X", { "duration": 3000 });
      }
    })
  }

  onSubmitClientAccountBalance() {
    this.request = this.clientAccountBalanceForm.value;
    // this.request['userId'] = this.userId;
    this.apiService.clientAccountBalanceSave(this.request).subscribe((response: any) => {
      this.tokenInfo();
      if (response.status == 0) {
        this.snackBar.open("Client Account Balance Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Client Account Balance failed", "X", { "duration": 3000 });
      }
    })
  }

  onSubmitBalanceOff() {
    this.request = this.BalanceOfForm.value;
    // this.request['userId'] = this.userId;
    this.apiService.BalanceOffSave(this.request).subscribe((response: any) => {
      this.tokenInfo();
      if (response.status == 0) {
        this.snackBar.open("Balance Off Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Balance Off failed", "X", { "duration": 3000 });
      }
    })
  }

  onSubmitTransfer() {
    this.request = this.transferForm.value;
    // this.request['userId'] = this.userId;
    this.apiService.transferSave(this.request).subscribe((response: any) => {
      this.tokenInfo();
      if (response.status == 0) {
        this.snackBar.open("Transfer Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Transfer failed", "X", { "duration": 3000 });
      }
    })
  }

  onSubmitBurn() {
    this.request = this.burnForm.value;
    // this.request['userId'] = this.userId;
    this.apiService.burnSave(this.request).subscribe((response: any) => {
      this.tokenInfo();
      if (response.status == 0) {
        this.snackBar.open("Burn Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Burn failed", "X", { "duration": 3000 });
      }
    })
  }

}
